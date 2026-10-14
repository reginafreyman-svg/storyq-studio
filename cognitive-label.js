(function (root) {
  const values = ['Pensamiento critico', 'Creatividad', 'Metacognicion', 'Memoria activa', 'Resolucion de problemas', 'Vision prospectiva'];
  const names = ['Pensamiento crítico', 'Creatividad', 'Metacognición', 'Memoria activa', 'Resolución de problemas', 'Visión prospectiva'];
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const present = value => value && !['No registrado', 'Sin decision critica'].includes(value);
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
      <section class="label-box"><h4>Valor cognitivo</h4><ul class="label-values">${values.map((value,i)=>`<li><span>${names[i]}</span><strong>${tag.cognitiveValue === value ? 'Seleccionado' : tag.cognitiveValue === 'No aplica' ? 'No aplica' : 'No valorado'}</strong></li>`).join('')}</ul><p class="label-note">Selección declarada para este momento. No se asignan estrellas sin una valoración de nivel.</p></section>
      <section class="label-box label-review"><h4>Estado de revisión del aprendizaje</h4><dl>${detail('Tipo de revisión',tag.source)}${detail('Reflexión',tag.reflection)}${detail('Comprensión',tag.understanding)}</dl><p class="label-note">Estado de la actividad completa. No evaluado no equivale a cero. Sin porcentaje de salud cognitiva.</p></section>
      <section class="label-box"><h4>Decisión clave y justificación</h4><strong>${escape(tag.decisionMoment || 'Sin decisión registrada')}</strong><p>${escape(tag.decisionWhy || 'Justificación pendiente')}</p></section>
      <details class="label-evidence"><summary>Evidencia de la revisión</summary><p>${escape(tag.evidence)}</p></details></div></article>`).join('');
  }
  const api = {build, render};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.StoryQCognitiveLabel = api;
})(typeof window !== 'undefined' ? window : globalThis);
