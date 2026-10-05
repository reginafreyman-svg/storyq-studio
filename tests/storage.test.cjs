const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const { createStoryQStorage } = require('../storage.js');
const map = new Map();
const disk = {getItem:k=>map.get(k)??null,setItem:(k,v)=>map.set(k,v),removeItem:k=>map.delete(k)};
let s = createStoryQStorage(()=>disk);
assert.equal(s.saveRecord({open:{pitchOpen:'Una duda'}}),true);
assert.equal(createStoryQStorage(()=>disk).readObject('storyqRouteStore').open.pitchOpen,'Una duda');
const blocked=createStoryQStorage(()=>{throw Error('blocked')});
assert.deepEqual(blocked.readObject('storyqRouteStore'),{});
assert.equal(blocked.saveRecord({}),false);
assert.equal(createStoryQStorage(()=>({...disk,setItem(){throw Error('quota')}})).saveRecord({}),false);
map.set('storyqRouteStore','malformed');s=createStoryQStorage(()=>disk);
s.readObject('storyqRouteStore');assert.ok(s.warning);s.saveRecord({open:{pitchOpen:'Recovered'}});
assert.equal(map.get('storyqRouteStore'),'malformed');
assert.equal(createStoryQStorage(()=>disk).readObject('storyqRouteStore').open.pitchOpen,'Recovered');
// Exercise the actual import handler and persistence in a lightweight DOM fixture.
const nodes = new Map();
function element(){return {dataset:{},style:{},classList:{toggle(){}},listeners:{},children:[],value:'',hidden:false,
 addEventListener(type,fn){this.listeners[type]=fn},append(...items){this.children.push(...items)},replaceChildren(...items){this.children=items},setAttribute(){},remove(){},click(){}};}
const document={body:element(),documentElement:{},createElement:element,
 querySelector(key){if(!nodes.has(key))nodes.set(key,element());return nodes.get(key)},querySelectorAll(){return []},addEventListener(){}};
map.clear();
const context=vm.createContext({console,document,window:{localStorage:disk,addEventListener(){},scrollTo(){},print(){}},confirm:()=>true,Date,URL,Blob,setTimeout:()=>{},navigator:{}});
for(const name of ['storage.js','reflection.js','app.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,'..',name),'utf8'),context);
(async()=>{
 const payload={route:'open',evidence:{activityName:'Prueba',learningGoal:'Conservar respuesta',pitchOpen:'Todavía tengo dudas',_meta:{decisions:2},_timeline:[]}};
 const target={files:[{size:200,text:async()=>JSON.stringify(payload)}],value:'file'};
 await nodes.get('#restoreFile').listeners.change({target});
 const stored=JSON.parse(map.get('storyqRouteStore'));
 assert.equal(stored.open.learningGoal,'Conservar respuesta');
 assert.equal(stored.open.pitchOpen,'Todavía tengo dudas');
 assert.match(nodes.get('#backupStatus').textContent,/recuperada y guardada/);
 assert.equal(target.value,'');
 const before=map.get('storyqRouteStore');
 await nodes.get('#restoreFile').listeners.change({target:{files:[{size:10,text:async()=>'not json'}],value:'bad'}});
 assert.equal(map.get('storyqRouteStore'),before);
 assert.match(nodes.get('#backupStatus').textContent,/no contiene datos JSON/);
 console.log('PASS: persistence, blocked storage, quota, corruption preservation, restore round trip, invalid backup preservation');
})().catch(error=>{console.error(error);process.exitCode=1});
