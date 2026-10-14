(function(root) {
  const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const escape = value => String(value || '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const definitions = [
    {name:'Pensamiento crítico',keys:['verificationMethod','aiComparison','rejectionReason','decisionReason','reviewEvidence'],action:/compar|contrast|verifi|rechac|rechaz|corrig|cuestion/,next:'Contrasta una afirmación con una fuente o criterio y explica qué aceptas o rechazas.'},
    {name:'Creatividad',keys:['decisionReason','humanModification','revisionDecision','finalResult','humanDraft','transformationRule'],action:/transform|adapt|modifi|unifi|cree|creamos|disene|redisen|original/,next:'Muestra una versión antes y después y explica qué transformaste y por qué.'},
    {name:'Metacognición',keys:['pitchLearning','pitchAgency','pitchOpen','verificationLimits'],action:/aprend|deleg|conserv|comprend|revis|estrateg|reconoz|todavia|desconoz/,next:'Explica qué delegaste, qué conservaste y cómo ajustarías tu estrategia.'},
    {name:'Memoria activa',keys:['reviewResponse'],action:/expli|record|recuper|apli|resol|demostr/,next:'Explica o aplica una idea sin consultar una nueva respuesta de IA, conservando tus ayudas de accesibilidad.'},
    {name:'Resolución de problemas',keys:['initialQuestion','decisionReason','verificationMethod','humanModification','revisionDecision','testObservations'],action:/problema|dificult|desafio|soluci|ajust|alternativ|correg|corrig|tiempo|secuencia/,next:'Describe el problema, las alternativas y cómo comprobarás la solución elegida.'},
    {name:'Visión prospectiva',keys:['pitchNext','pitchWorld','verificationLimits','pitchOpen','desirableFuture','testProtocol'],action:/probar|ensay|anticip|futuro|consecu|riesgo|adapt|prev|necesit|desconoz|todavia/,next:'Plantea un cambio de condiciones y explica cómo adaptarías tu propuesta.'}
  ];
  function analyze(state, steps=[]) {
    const labels = Object.fromEntries(steps.flatMap(step=>(step.fields||[]).map(([key,label])=>[key,label])));
    const decisions=Object.entries(state._cognitiveTags || {}).filter(([,tag])=>String(tag.decisionWhy||'').trim()).map(([id,tag])=>({field:(steps.find(s=>s.id===id)?.title||id)+' · Decisión',text:tag.decisionWhy}));
    const rows=definitions.map((d,i)=>{
      const sources=d.keys.filter(key=>String(state[key]||'').trim()).map(key=>({field:labels[key]||key,text:state[key]}));
      // Personal disclosures are deliberately excluded. A rubric selection alone is not evidence.
      if ([0,1,4].includes(i)) sources.push(...decisions);
      for(const [id,tag] of Object.entries(state._cognitiveTags||{})) {
        const evidence=tag.ratings?.[['Pensamiento critico','Creatividad','Metacognicion','Memoria activa','Resolucion de problemas','Vision prospectiva'][i]]?.evidence;
        if(evidence?.trim())sources.push({field:(steps.find(s=>s.id===id)?.title||id)+' · Evidencia de capacidad',text:evidence});
      }
      const hits=sources.filter(s=>d.action.test(normalize(s.text)));
      const missingDemo=i===3 && (!String(state.reviewResponse||'').trim() || /pendiente|no he realizado|no he probado|todavia no|aun no/.test(normalize(state.reviewResponse)));
      const evidence=missingDemo?sources.slice(0,1):(hits.length?hits:sources).slice(0,2);
      const status=d.name;
      const found=Boolean(hits.length) && !missingDemo;
      const interpretation=missingDemo?'El registro no contiene una demostración realizada de recuperación o aplicación sin una nueva consulta. Esto no implica falta de capacidad.':hits.length?`Encontramos acciones declaradas relacionadas con ${d.name.toLowerCase()}. Las referencias permiten revisar esa interpretación; no certifican el desempeño.`:sources.length?`Hay texto relacionado con este rubro, pero no una acción suficientemente específica para sostener su ejercicio.`:`El registro no documenta este rubro. La valoración del registro es insuficiencia de evidencia, no una calificación de la persona.`;
      const key=['Pensamiento critico','Creatividad','Metacognicion','Memoria activa','Resolucion de problemas','Vision prospectiva'][i];
      const stars=Object.entries(state._cognitiveTags||{}).map(([id,tag])=>({moment:steps.find(step=>step.id===id)?.title||id,level:String(tag.ratings?.[key]?.level||'').match(/^([1-5])(?:$| ·)/)?.[1]||''})).filter(r=>r.level);
      return {name:d.name,status,found,stars,interpretation,evidence,next:d.next};
    });
    const supported=rows.filter(r=>r.found);
    const limits=rows.filter(r=>!r.found);
    return {method:'Lectura automática por reglas explícitas del registro; no utiliza un modelo de IA ni observa acciones fuera de la app.',rows,
      summary:'Valor cognitivo y relación con la IA según la etiqueta y la taxonomía STORYQIA. Las estrellas conservan tu valoración; las referencias proceden de lo que ya escribiste.',
      next:limits.length?`Prioriza: ${limits[0].next}`:'Pon a prueba una decisión en un caso nuevo y compara el resultado con lo que registraste.',
      limits:'Esta lectura analiza lo escrito. No distingue por sí sola texto propio de texto generado por IA ni demuestra comprensión. Las estrellas son autovaloración humana y se conservan por separado.'};
  }
  function render(state,steps) {
    const d=analyze(state,steps);
    const labelApi=root.StoryQCognitiveLabel || (typeof require==='function'?require('./cognitive-label.js'):null);
    const relationships=Object.entries(state._cognitiveTags||{}).map(([id,tag])=>({moment:steps.find(step=>step.id===id)?.title||id,name:labelApi?.relationReading(tag).name,why:tag.decisionWhy||''}));
    return `<section class="automatic-diagnosis"><p class="eyebrow">Etiqueta cognitiva STORYQ</p><h3>Valor cognitivo</h3><p>${escape(d.summary)}</p>${d.rows.map(r=>`<section class="diagnosis-row"><h4>${r.name}</h4><p>${escape(r.interpretation)}</p><details><summary>Registro y estrellas</summary>${r.stars.map(v=>`<p>${escape(v.moment)}: ${'★'.repeat(Number(v.level))}${'☆'.repeat(5-Number(v.level))}</p>`).join('')}${r.evidence.map(s=>`<blockquote><b>${escape(s.field)}</b><br>${escape(s.text)}</blockquote>`).join('')}</details></section>`).join('')}<h3>Taxonomía del pensamiento frente a la IA</h3>${relationships.map(r=>`<p><b>${escape(r.moment)}:</b> ${escape(r.name || '—')}</p>`).join('')}<p><b>Decisión clave y justificación:</b> ${escape(state.decisionReason||relationships.filter(r=>r.why).at(-1)?.why||'—')}</p><details><summary>Referencia del análisis</summary><p>${escape(d.method)}</p><p>${escape(d.limits)}</p></details></section>`;

  }
  const api={analyze,render};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  else root.StoryQCognitiveDiagnosis=api;
})(typeof window!=='undefined'?window:globalThis);
