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
  const relations = ['Pendiente', 'Descarga cognitiva', 'Apoyo cognitivo', 'Contraste crítico', 'Apropiación intelectual', 'Soberanía cognitiva'];
  function ratings(tag) {
    return values.map((key, i) => {
      const r = tag.ratings?.[key] || {};
      const level = levels.includes(r.level) ? r.level : 'Pendiente';
      const evidence = typeof r.evidence === 'string' ? r.evidence.trim() : '';
      return {key, name:names[i], criterion:criteria[i], level, evidence,
        supported: level !== 'Pendiente' && Boolean(evidence)};
    });
  }
  function stars(r) {
    const match = r.level.match(/^([1-5]) ·/);
    if (!r.supported || !match) return '';
    const n=Number(match[1]);
    return `<span class="rating-stars" aria-label="Nivel ${n} de 5">${'★'.repeat(n)}${'☆'.repeat(5-n)}</span>`;
  }
  function ratingMarkup(tag) {
    return ratings(tag).map(r => `<li><div><span>${r.name}</span><small>${escape(r.criterion)}</small></div><strong>${stars(r)}${escape(r.supported ? r.level : r.level === 'Pendiente' ? 'Sin estrellas declaradas' : 'Autovaloración sin evidencia')}</strong></li><li class="rating-evidence">Lectura del registro completo: ${escape(tag.automaticDiagnosis?.find(d => d.name === r.name)?.status || 'Sin evidencia en el registro')}</li>${r.evidence ? `<li class="rating-evidence">Evidencia: ${escape(r.evidence)}</li>` : ''}`).join('');
  }
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const present = value => value && !['No registrado', 'Sin decision critica'].includes(value);
  function relationReading(tag) {
    if(tag.relationEvidence?.trim() && relations.includes(tag.relation) && tag.relation !== 'Pendiente') return {name:tag.relation,reason:tag.relationEvidence};
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
      <section class="label-box"><h4>Valor cognitivo</h4><ul class="label-values">${ratingMarkup(tag)}</ul><p class="label-note">Autovaloración por criterio con evidencia declarada. Escala: 1 reproducción, 2 guía, 3 explicación, 4 adaptación, 5 transferencia autónoma. No es una certificación.</p></section>
      <section class="label-box"><h4>Relación con la IA</h4><strong>${escape(relationReading(tag).name)}</strong><p>${escape(relationReading(tag).reason)}</p></section>
      <section class="label-box label-review"><h4>Estado de revisión del aprendizaje</h4><dl>${detail('Tipo de revisión',tag.source)}${detail('Reflexión',tag.reflection)}${detail('Comprensión',tag.understanding)}</dl><p class="label-note">Estado de la actividad completa. No evaluado no equivale a cero. Sin porcentaje de salud cognitiva.</p></section>
      <section class="label-box"><h4>Decisión clave y justificación</h4><strong>${escape(tag.decisionMoment || 'Sin decisión registrada')}</strong><p>${escape(tag.decisionWhy || 'Justificación pendiente')}</p></section>
      <details class="label-evidence"><summary>Evidencia de la revisión</summary><p>${escape(tag.evidence)}</p></details></div></article>`).join('');
  }
  function describe(tag) {
    const fields=[['Función de IA',tag.aiFunction],['Intervención IA',tag.aiIntervention],['Intervención humana',tag.humanIntervention],['Decisión',tag.decisionMoment],['Justificación',tag.decisionWhy],['Relación con IA',tag.relation],['Evidencia de relación',tag.relationEvidence]];
    return fields.map(([name,value])=>name+': '+(value || 'Sin registro')).join('\n')+'\n'+ratings(tag).map(r=>r.name+': '+(r.supported?r.level:'Pendiente de valoración o evidencia')+'\nCriterio: '+r.criterion+'\nEvidencia: '+(r.evidence || 'Sin registro')).join('\n');
  }
  const api = {build, render, ratings, values, names, criteria, levels, relations, describe};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.StoryQCognitiveLabel = api;
})(typeof window !== 'undefined' ? window : globalThis);
