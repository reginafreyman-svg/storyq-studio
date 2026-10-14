(function (root) {
  const values = ['Pensamiento critico', 'Creatividad', 'Metacognicion', 'Memoria activa', 'Resolucion de problemas', 'Vision prospectiva'];
  const names = ['Pensamiento crítico', 'Creatividad', 'Metacognición', 'Memoria activa', 'Resolución de problemas', 'Visión prospectiva'];
  const criteria = [
    'Comparé una propuesta de IA con criterios o fuentes y justifiqué qué aceptar o rechazar.',
    'Transformé la propuesta para producir una solución propia y explicar mis elecciones.',
    'Reconocí qué delegué, qué comprendí y qué estrategia necesitaba ajustar.',
    'Recuperé y expliqué una idea sin copiar una nueva respuesta de IA; conservé mis ayudas de accesibilidad.',
    'Identifiqué un problema, comparé alternativas y comprobé la solución elegida.',
    'Anticipé consecuencias y adapté mi propuesta ante un cambio de condiciones.'
  ];
  const levels = ['', '1', '2', '3', '4', '5'];
  const taxonomy = [
    {name:'Descarga cognitiva',description:'Se delega el pensamiento. Uso acrítico y automático.',relationship:'Dependencia pasiva',risk:'Pérdida de autoría y comprensión.'},
    {name:'Apoyo cognitivo',description:'La IA asiste y amplía capacidades. Uso funcional y estratégico.',relationship:'Dependencia activa',risk:'Dependencia instrumental.'},
    {name:'Contraste crítico',description:'Se cuestiona, compara y problematiza. Uso reflexivo y deliberativo.',relationship:'Relación dialógica',risk:'Confirmación sesgada.'},
    {name:'Apropiación intelectual',description:'Se integra, reinterpreta y transforma. Uso creativo y situado.',relationship:'Relación transformadora',risk:'Ilusión de originalidad.'},
    {name:'Soberanía cognitiva',description:'Se decide con criterio y responsabilidad. Uso ético, autoral y estratégico.',relationship:'Relación autónoma',risk:'Sobreconfianza.'}
  ];
  const relations = ['', ...taxonomy.map(row=>row.name)];
  function normalizeLevel(value) { const m=String(value||'').match(/^([1-5])(?:$| ·)/);return m?m[1]:''; }
  function levelCaption(value) { const n=normalizeLevel(value);return n?'★'.repeat(Number(n))+'☆'.repeat(5-Number(n)): '—'; }
  function guideMarkup(perspective = "student") {
    return '<details class="star-guide"><summary>Etiqueta y taxonomía STORYQIA</summary><p>'+(perspective==='design'?'Docente: las estrellas expresan cuánto busca activar el diseño cada capacidad. Estudiante: las estrellas expresan cuánto reconoces haberla ejercido.':'Estudiante: las estrellas expresan cuánto reconoces haber ejercido cada capacidad. Docente: las estrellas expresan cuánto busca activarla el diseño.')+' Valora de 1 a 5; más estrellas indican mayor activación prevista o mayor ejercicio reconocido. No indican adquisición permanente ni porcentaje de aprendizaje. La relación con la IA se elige por separado usando esta taxonomía.</p>'+taxonomy.map((row,i)=>'<p><b>'+ (i+1)+' · '+row.name+'</b><br>'+row.description+'<br>'+row.relationship+'<br>Riesgo: '+row.risk+'</p>').join('')+'</details>';
  }
  function ratings(tag) {
    return values.map((key, i) => {
      const r = tag.ratings?.[key] || {};
      const level = normalizeLevel(r.level);
      const evidence = typeof r.evidence === 'string' ? r.evidence.trim() : '';
      return {key, name:names[i], criterion:criteria[i], level, evidence,
        supported: Boolean(level)};
    });
  }
  function stars(r) {
    const match = r.level.match(/^([1-5])$/);
    if (!r.supported || !match) return '';
    const n=Number(match[1]);
    return `<span class="rating-stars" aria-label="Nivel ${n} de 5">${'★'.repeat(n)}${'☆'.repeat(5-n)}</span>`;
  }
  function ratingMarkup(tag) {
    return ratings(tag).map(r => `<li><span title="${escape(r.criterion)}">${r.name}</span><strong>${r.supported?stars(r):'—'}</strong></li>`).join('');
  }
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const present = value => value && !['No registrado', 'Sin decision critica'].includes(value);
  function relationReading(tag) {
    if(relations.includes(tag.relation) && tag.relation) return {name:tag.relation,reason:tag.relationEvidence || tag.decisionWhy || ''};
    const why=String(tag.decisionWhy || '').trim();
    if(why && /Contraste|Oponente/.test(tag.aiFunction||'')) return {name:'Contraste crítico',reason:why};
    if(tag.aiFunction === 'Ayudante') return {name:'Apoyo cognitivo',reason:why};
    return {name:'—',reason:why};
  }
  function build(state, steps) {
    return ['design','student'].flatMap(perspective => steps.filter(step => {
      const tag = (perspective==='design'?state._designCognitiveTags:state._cognitiveTags)?.[step.id];
      return tag && Object.entries(tag).some(([key,value])=>key==='ratings'?Object.values(value||{}).some(r=>normalizeLevel(r.level)):present(value));
    }).map(step => ({
      perspective,
      id: step.id, moment: step.title,
      activity: state.activityName || state.finalTitle || state.objectName || 'Actividad sin nombre',
      participant: state.studentName || 'Sin registro',
      date: state.sessionDate || 'Sin registro',
      ...(perspective==='design'?state._designCognitiveTags:state._cognitiveTags)[step.id],
      assessment: ratings((perspective==='design'?state._designCognitiveTags:state._cognitiveTags)[step.id]),
      automaticDiagnosis: root.StoryQCognitiveDiagnosis?.analyze(state, steps).rows || [],
      reflection: state.reflectionStatus || 'No evaluado',
      understanding: state.understandingStatus || 'No evaluado',
      evidence: state.reviewEvidence || 'Sin evidencia de revisión registrada',
      source: state.reviewSource || 'No evaluado'
    })));
  }
  const authorship = [
    'Actividad generada por IA o plantilla', 'Ajustes menores', 'Reorganiza y adapta', 'Interviene y modifica', 'Diseño inicialmente propio'
  ];
  const strategy = {Inteligente:'Uso eficiente',Sabio:'Uso analítico',Genio:'Uso creativo'};
  function index(tag) {
    const marks=ratings(tag).filter(r=>r.level).map(r=>Number(r.level));
    return {percent:marks.length?Math.round(marks.reduce((a,b)=>a+b,0)/marks.length/5*100):null,count:marks.length};
  }
  function compare(state,steps) {
    return steps.filter(step=>state._designCognitiveTags?.[step.id] && state._cognitiveTags?.[step.id]).map(step=>{
      const design=state._designCognitiveTags[step.id],student=state._cognitiveTags[step.id];
      if(!index(design).count || !index(student).count)return '';
      return `<section class="label-comparison"><h3>Diseño y experiencia · ${escape(step.title)}</h3><table><thead><tr><th>Valor cognitivo</th><th>Diseño · previsto</th><th>Experiencia · realizada</th></tr></thead><tbody>${values.map((key,i)=>`<tr><th>${names[i]}</th><td>${levelCaption(design.ratings?.[key]?.level)}</td><td>${levelCaption(student.ratings?.[key]?.level)}</td></tr>`).join('')}<tr><th>Índice declarado</th><td>${index(design).percent}%</td><td>${index(student).percent}%</td></tr></tbody></table><p>Compara lo que se buscaba activar con lo que se reconoce haber ejercido. Los índices no miden aprendizaje ni adquisición de competencias.</p></section>`;
    }).join('');
  }
  function render(state, steps) {
    const perspective=state.labelPerspective==='design'?'design':'student';
    const tags = build(state, steps).filter(tag=>tag.perspective===perspective);
    const detail = (name, value) => `<div><dt>${name}</dt><dd>${escape(value || 'Sin registro')}</dd></div>`;
    if (!tags.length) return '<p class="label-empty">Registra tu valoración para esta lectura. Los datos de la otra lectura se conservan.</p>';
    return tags.map(tag => `<article class="result-label" aria-label="Etiqueta cognitiva: ${escape(tag.moment)}">
      <aside class="label-brand"><strong>STORYQ-IA</strong><span>Soberanía cognitiva</span><p>«Cada momento cuenta: piensa, decide y transforma»</p><img src="./assets/storyq-studio.png" alt=""/><span>ID momento</span><b>${escape(tag.id)}</b></aside>
      <div class="label-content"><header><span class="label-kicker">Etiqueta de valor cognitivo</span><h3>STORYQ</h3><p>${tag.perspective==='design'?'Diseño de la actividad':'Experiencia realizada'} — ${escape(tag.moment)}</p></header>
      <dl class="label-identity">${detail('Actividad', tag.activity)}${detail('Participante',tag.participant)}${detail('Fecha de la actividad',tag.date)}${detail('Función de la IA',tag.aiFunction)}</dl>
      <section class="label-box"><h4>Intervención declarada</h4><dl class="label-interventions">${detail('Inteligencia artificial',tag.aiIntervention)}${detail('Intervención humana',tag.humanIntervention)}</dl><p class="label-note">Las intervenciones son independientes; no representan porcentajes de autoría.</p></section>
      <section class="label-box"><h4>Valor cognitivo</h4><p class="label-note">${tag.perspective==='design'?'Capacidades que el diseño busca activar.':'Capacidades que reconozco haber ejercido.'}</p><ul class="label-values">${ratingMarkup(tag)}</ul><p class="label-note">Estrellas: activación prevista o ejercicio reconocido, de 1 a 5. No son una medición de adquisición permanente.</p></section>
      <section class="label-box label-index"><h4>Índice de valor cognitivo</h4><strong>${index(tag).percent===null?'—':index(tag).percent+'%'}</strong><p class="label-note">Promedio de estrellas ÷ 5 × 100. ${index(tag).count} de ${values.length} capacidades valoradas. Índice declarado; no mide aprendizaje ni adquisición.</p></section>
      <section class="label-box"><h4>Relación con la IA</h4><strong>${escape(relationReading(tag).name)}</strong></section>
      <section class="label-box"><h4>Decisión clave y justificación</h4><strong>${escape(tag.decisionMoment || 'Sin decisión registrada')}</strong><p>${escape(tag.decisionWhy || 'Justificación pendiente')}</p></section>
</div></article>`).join('') + (compare(state,steps) ? '<details class="optional-comparison"><summary>Comparar diseño y experiencia</summary>'+compare(state,steps)+'</details>' : '');
  }
  function describe(tag) {
    const fields=[['Función de IA',tag.aiFunction],['Intervención IA',tag.aiIntervention],['Intervención humana',tag.humanIntervention],['Decisión',tag.decisionMoment],['Justificación',tag.decisionWhy],['Relación con IA',tag.relation],['Evidencia de relación',tag.relationEvidence]];
    return fields.map(([name,value])=>name+': '+(value || 'Sin registro')).join('\n')+'\n'+ratings(tag).map(r=>r.name+': '+(r.supported?r.level:'Pendiente de valoración o evidencia')+'\nCriterio: '+r.criterion+'\nEvidencia: '+(r.evidence || 'Sin registro')).join('\n');
  }
  const api = {build, render, ratings, values, names, criteria, levels, relations, relationReading, index, compare, authorship, strategy, describe, taxonomy, normalizeLevel, levelCaption, guideMarkup};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.StoryQCognitiveLabel = api;
})(typeof window !== 'undefined' ? window : globalThis);
