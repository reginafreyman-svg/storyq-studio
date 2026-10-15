(function(root){
  const groups=[
    {name:'Indicios de antropomorfización',terms:['siento','me conmueve','me alegra','mi opinión sincera','creo firmemente','mi corazón','estoy aquí para ti','me pongo en tu lugar'],question:'¿Personalizas el tono o atribuyes sentimientos, vivencias o intención a la IA? Examina el contexto antes de decidir.'},
    {name:'Complacencia y adulación',terms:['excelente pregunta','mente brillante','propuesta impecable','sin fallas','genial','revolucionará','fascinante cómo piensas'],question:'¿El elogio aporta razones? Pide una objeción y decide si cambia tu propuesta.'},
    {name:'Afirmaciones por verificar',terms:['es indudable que','está comprobado que','todos coinciden en','sin duda alguna'],question:'¿Qué fuente o evidencia respalda esta afirmación? La expresión por sí sola no demuestra un error.'}
  ];
  const sample='Ejemplo: Me conmueve tu propuesta y siento con todo mi corazón que es una idea genial. Sin duda alguna, revolucionará tu campo.';
  const limits='El análisis busca coincidencias de expresiones; puede omitir indicios o producir falsos positivos. No encontrar coincidencias no garantiza ausencia de sesgo ni exactitud factual. La cortesía y los pronombres yo/tú no son sesgos por sí mismos.';
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function analyze(text){
    const s=String(text||'');const lower=s.toLocaleLowerCase('es');
    return groups.flatMap(g=>{const term=g.terms.find(t=>lower.includes(t));if(!term)return [];const at=lower.indexOf(term);return [{name:g.name,match:s.slice(at,at+term.length),question:g.question}];});
  }
  function clean(value){return {text:typeof value?.text==='string'?value.text.slice(0,30000):'',decision:typeof value?.decision==='string'?value.decision.slice(0,5000):'',sample:value?.sample===true};}
  function reportText(value){const data=clean(value);if(!data.text.trim()&&!data.decision.trim())return '';return 'REVISIÓN CRÍTICA DE RESPUESTAS'+(data.sample?' · EJEMPLO':'')+'\nTexto examinado: '+data.text+'\n'+analyze(data.text).map(r=>r.name+': «'+r.match+'». '+r.question).join('\n')+'\nMi decisión: '+(data.decision||'Sin registrar')+'\n'+limits;}
  function reportMarkup(value){const text=reportText(value);return text?'<section class="bias-report"><h3>Revisión crítica de respuestas</h3><p style="white-space:pre-wrap">'+esc(text.replace(/^REVISIÓN CRÍTICA DE RESPUESTAS/ ,''))+'</p></section>':'';}
  function mount(container,getData,onChange){
    if(!container)return;
    if(!container.dataset.mounted){
      container.dataset.mounted='yes';
      container.innerHTML='<summary>Sesgos antropomórficos · revisión crítica de respuestas (opcional)</summary><p>Personalizar el tono, el contexto o los apoyos de accesibilidad es compatible con conservar el pensamiento propio. Revisa cuándo atribuyes a la IA sentimientos, intención o autoridad infalible. Este módulo apoya la metacognición, el contraste crítico y la inmunidad intelectual; no añade otra puntuación.</p><p class="label-note">'+limits+'</p><label>Texto de IA que quiero examinar<textarea id="biasText" rows="4" maxlength="30000"></textarea></label><button id="biasSample" type="button" class="ghost">Ver ejemplo</button><p id="biasExample" class="label-note" hidden>Ejemplo ilustrativo; no corresponde a tu experiencia.</p><div id="biasFindings" role="status" aria-live="polite"></div><details><summary>Preguntas de fricción deliberada</summary><p>¿Qué supuesto conviene cuestionar? ¿Qué contraejemplo pondría a prueba esta respuesta? ¿Qué afirmación necesita una fuente?</p></details><label>Mi decisión (opcional)<textarea id="biasDecision" rows="2" maxlength="5000" placeholder="Qué acepto, cuestiono o ajusto y por qué. Puedes referirte a una decisión ya registrada."></textarea></label>';
      const text=container.querySelector('#biasText'),decision=container.querySelector('#biasDecision');
      text.addEventListener('input',()=>{onChange({...clean(getData()),text:text.value,sample:false});refresh();});
      decision.addEventListener('input',()=>onChange({...clean(getData()),decision:decision.value}));
      container.querySelector('#biasSample').addEventListener('click',()=>{if(text.value.trim()&&!confirm('El ejemplo sustituirá el texto de revisión de este módulo. ¿Continuar?'))return;onChange({...clean(getData()),text:sample,sample:true});text.value=sample;refresh();});
    }
    function refresh(){const data=clean(getData()),rows=analyze(data.text);container.querySelector('#biasExample').hidden=!data.sample;container.querySelector('#biasFindings').innerHTML=!data.text.trim()?'':rows.length?'<ul>'+rows.map(r=>'<li><strong>'+esc(r.name)+'</strong>: «'+esc(r.match)+'»<p>'+esc(r.question)+'</p></li>').join('')+'</ul>':'<p>Sin coincidencias específicas. Revisa el contexto y las fuentes: esto no certifica ausencia de sesgos.</p>';}
    const data=clean(getData());container.querySelector('#biasText').value=data.text;container.querySelector('#biasDecision').value=data.decision;refresh();
  }
  const api={analyze,clean,mount,reportText,reportMarkup,limits};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.StoryQBiasReview=api;
})(typeof window!=='undefined'?window:globalThis);
