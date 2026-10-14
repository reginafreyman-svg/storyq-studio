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
  const levels = ['Pendiente', 'No observé esta capacidad', '1 · Reproduje una respuesta', '2 · La ejercí con guía', '3 · Expliqué mis razones', '4 · Adapté y comprobé', '5 · Transferí y defendí con autonomía', 'No aplica'];
  const levelGuide = [
    ['1 · Reproduje una respuesta','1 ★ · Repetí sin poder explicar','Tomé una respuesta o procedimiento y aún no puedo explicar sus razones. Ejemplo: copié la propuesta sin revisar por qué funcionaría.'],
    ['2 · La ejercí con guía','2 ★ · Lo hice con guía','Necesité preguntas, pistas o pasos para realizarlo. Ejemplo: revisé la propuesta siguiendo una lista que me dieron.'],
    ['3 · Expliqué mis razones','3 ★ · Lo expliqué con mis razones','Puedo explicar qué hice y por qué en esta tarea. Ejemplo: justifiqué qué sugerencia acepté o rechacé.'],
    ['4 · Adapté y comprobé','4 ★ · Lo adapté y revisé','Modifiqué lo obtenido para mi contexto y comprobé el ajuste con un criterio. Ejemplo: cambié una actividad y revisé si permite observar el aprendizaje.'],
    ['5 · Transferí y defendí con autonomía','5 ★ · Lo apliqué a un caso nuevo','Usé lo aprendido ante una condición nueva y defendí mi decisión sin pedir una nueva solución a la IA. Ejemplo: adapté una clase de 50 a 30 minutos y expliqué mis prioridades.']
  ];
  function levelCaption(value) {
    return levelGuide.find(row=>row[0]===value)?.[1] || (value==='Pendiente'?'Sin elegir':value);
  }
  function guideMarkup() {
    return '<details class="star-guide"><summary>¿Qué significa cada estrella?</summary><p>Valora lo que hiciste en este momento, no la calidad del producto ni cuánta IA usaste. Elige el nivel más alto que puedas sostener con lo ya escrito.</p><ol>'+levelGuide.map(row=>'<li><b>'+row[1]+'</b><p>'+row[2]+'</p></li>').join('')+'</ol><p><b>No observé esta capacidad:</b> no identifico que la haya ejercido aquí. <b>No aplica:</b> este momento no la requería. Ninguna de estas opciones equivale a una estrella.</p><p>Las ayudas de accesibilidad no reducen el nivel. Puedes usar IA como apoyo; para el nivel 5 debes resolver el cambio de condiciones con tu propio criterio.</p></details>';
  }
  const relations = ['Pendiente', 'Descarga cognitiva', 'Apoyo cognitivo', 'Contraste crítico', 'Apropiación intelectual', 'Soberanía cognitiva'];
  function ratings(tag) {
    return values.map((key, i) => {
      const r = tag.ratings?.[key] || {};
      const level = levels.includes(r.level) ? r.level : 'Pendiente';
      const evidence = typeof r.evidence === 'string' ? r.evidence.trim() : '';
      return {key, name:names[i], criterion:criteria[i], level, evidence,
        supported: level !== 'Pendiente'};
    });
  }
  function stars(r) {
    const match = r.level.match(/^([1-5]) ·/);
    if (!r.supported || !match) return '';
    const n=Number(match[1]);
    return `<span class="rating-stars" aria-label="Nivel ${n} de 5">${'★'.repeat(n)}${'☆'.repeat(5-n)}</span>`;
  }
  function ratingMarkup(tag) {
    return ratings(tag).map(r => `<li><span title="${escape(r.criterion)}">${r.name}</span><strong>${stars(r)}${escape(r.supported ? levelCaption(r.level) : 'Sin estrellas declaradas')}</strong></li>`).join('');
  }
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const present = value => value && !['No registrado', 'Sin decision critica'].includes(value);
  function relationReading(tag) {
    if(relations.includes(tag.relation) && tag.relation !== 'Pendiente') return {name:tag.relation,reason:tag.relationEvidence || tag.decisionWhy || ''};
    const why=String(tag.decisionWhy || '').trim();
    if(tag.aiFunction === 'Sin IA') return {name:'Trabajo humano sin IA en este momento',reason:why || 'Se declaró ausencia de IA. El registro no justifica todavía la decisión.'};
    if(why && /Contraste|Oponente/.test(tag.aiFunction||'')) return {name:'Contraste crítico declarado',reason:why};
    if(tag.aiFunction === 'Ayudante') return {name:'Apoyo cognitivo declarado',reason:why || 'Se declaró ayuda de IA, pero no se documenta qué razonamiento conservó la persona.'};
    return {name:'Relación no documentada',reason:'No hay datos suficientes para identificar la relación en este momento. Esto describe el registro, no la capacidad de la persona.'};
  }
  function build(state, steps) {
    return steps.filter(step => {
      const tag = state._cognitiveTags?.[step.id];
      return tag && Object.values(tag).some(present);
    }).map(step => ({
      id: step.id, moment: step.title,
      activity: state.activityName || state.finalTitle || state.objectName || 'Actividad sin nombre',
      participant: state.studentName || 'Sin registro',
      date: state.sessionDate || 'Sin registro',
      ...state._cognitiveTags[step.id],
      assessment: ratings(state._cognitiveTags[step.id]),
      automaticDiagnosis: root.StoryQCognitiveDiagnosis?.analyze(state, steps).rows || [],
      reflection: state.reflectionStatus || 'No evaluado',
      understanding: state.understandingStatus || 'No evaluado',
      evidence: state.reviewEvidence || 'Sin evidencia de revisión registrada',
      source: state.reviewSource || 'No evaluado'
    }));
  }
  function render(state, steps) {
    const tags = build(state, steps);
    const detail = (name, value) => `<div><dt>${name}</dt><dd>${escape(value || 'Sin registro')}</dd></div>`;
    if (!tags.length) return '<p class="label-empty">Tu etiqueta aparecerá cuando registres una relación con la IA y una decisión. Sin registro no significa falta de capacidad.</p>';
    return tags.map(tag => `<article class="result-label" aria-label="Etiqueta cognitiva: ${escape(tag.moment)}">
      <aside class="label-brand"><strong>STORYQ-IA</strong><span>Soberanía cognitiva</span><p>«Cada momento cuenta: piensa, decide y transforma»</p><img src="./assets/storyq-studio.png" alt=""/><span>ID momento</span><b>${escape(tag.id)}</b></aside>
      <div class="label-content"><header><span class="label-kicker">Etiqueta de valor cognitivo</span><h3>STORYQ</h3><p>${escape(tag.moment)}</p></header>
      <dl class="label-identity">${detail('Actividad', tag.activity)}${detail('Participante',tag.participant)}${detail('Fecha de la actividad',tag.date)}${detail('Función de la IA',tag.aiFunction)}</dl>
      <section class="label-box"><h4>Intervención declarada</h4><dl class="label-interventions">${detail('Inteligencia artificial',tag.aiIntervention)}${detail('Intervención humana',tag.humanIntervention)}</dl><p class="label-note">Las intervenciones son independientes; no representan porcentajes de autoría.</p></section>
      <section class="label-box"><h4>Valor cognitivo</h4><ul class="label-values">${ratingMarkup(tag)}</ul><p class="label-note">Estrellas: autovaloración humana. 1 repetir · 2 seguir una guía · 3 explicar · 4 adaptar y revisar · 5 aplicar a un caso nuevo.</p></section>
      <section class="label-box"><h4>Relación con la IA</h4><strong>${escape(relationReading(tag).name)}</strong></section>
      <section class="label-box"><h4>Decisión clave y justificación</h4><strong>${escape(tag.decisionMoment || 'Sin decisión registrada')}</strong><p>${escape(tag.decisionWhy || 'Justificación pendiente')}</p></section>
</div></article>`).join('');
  }
  function describe(tag) {
    const fields=[['Función de IA',tag.aiFunction],['Intervención IA',tag.aiIntervention],['Intervención humana',tag.humanIntervention],['Decisión',tag.decisionMoment],['Justificación',tag.decisionWhy],['Relación con IA',tag.relation],['Evidencia de relación',tag.relationEvidence]];
    return fields.map(([name,value])=>name+': '+(value || 'Sin registro')).join('\n')+'\n'+ratings(tag).map(r=>r.name+': '+(r.supported?r.level:'Pendiente de valoración o evidencia')+'\nCriterio: '+r.criterion+'\nEvidencia: '+(r.evidence || 'Sin registro')).join('\n');
  }
  const api = {build, render, ratings, values, names, criteria, levels, relations, describe, levelGuide, levelCaption, guideMarkup};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.StoryQCognitiveLabel = api;
})(typeof window !== 'undefined' ? window : globalThis);
