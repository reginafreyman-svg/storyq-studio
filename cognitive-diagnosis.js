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
      const status=missingDemo?'Recuperación autónoma no demostrada':hits.length?'Indicios documentados':sources.length?'Descripción sin evidencia específica':'Sin evidencia en el registro';
      const interpretation=missingDemo?'El registro no contiene una demostración realizada de recuperación o aplicación sin una nueva consulta. Esto no implica falta de capacidad.':hits.length?`Encontramos acciones declaradas relacionadas con ${d.name.toLowerCase()}. Las referencias permiten revisar esa interpretación; no certifican el desempeño.`:sources.length?`Hay texto relacionado con este rubro, pero no una acción suficientemente específica para sostener su ejercicio.`:`El registro no documenta este rubro. La valoración del registro es insuficiencia de evidencia, no una calificación de la persona.`;
      return {name:d.name,status,interpretation,evidence,next:d.next};
    });
    const supported=rows.filter(r=>r.status==='Indicios documentados');
    const limits=rows.filter(r=>r.status!=='Indicios documentados');
    return {method:'Lectura automática por reglas explícitas del registro; no utiliza un modelo de IA ni observa acciones fuera de la app.',rows,
      summary:supported.length?`El registro contiene indicios declarados en ${supported.length} de los seis rubros: ${supported.map(r=>r.name).join(', ')}.`:'El registro todavía no aporta acciones específicas que sostengan los seis rubros.',
      next:limits.length?`Prioriza: ${limits[0].next}`:'Pon a prueba una decisión en un caso nuevo y compara el resultado con lo que registraste.',
      limits:'Esta lectura analiza lo escrito. No distingue por sí sola texto propio de texto generado por IA ni demuestra comprensión. Las estrellas son autovaloración humana y se conservan por separado.'};
  }
  function render(state,steps) {
    const d=analyze(state,steps);
    return `<section class="automatic-diagnosis"><p class="eyebrow">Diagnóstico final del proceso</p><h3>Tu recorrido en seis rubros</h3><p>${escape(d.summary)}</p>${d.rows.map(r=>`<section class="diagnosis-row"><h4>${r.name}</h4><strong>${r.status}</strong><p>${escape(r.next)}</p><details><summary>Ver fundamento</summary><p>${escape(r.interpretation)}</p>${r.evidence.map(s=>`<blockquote><b>${escape(s.field)}</b><br>${escape(s.text)}</blockquote>`).join('')}</details></section>`).join('')}<div class="diagnosis-review"><b>Revisión declarada:</b> ${escape(state.reviewSource||'No evaluado')}<br><b>Reflexión:</b> ${escape(state.reflectionStatus||'No evaluado')}<br><b>Comprensión:</b> ${escape(state.understandingStatus||'No evaluado')}</div><p><b>Próximo paso:</b> ${escape(d.next)}</p><details><summary>Cómo se produjo esta lectura</summary><p>${escape(d.method)}</p><p>${escape(d.limits)}</p></details></section>`;
  }
  const api={analyze,render};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  else root.StoryQCognitiveDiagnosis=api;
})(typeof window!=='undefined'?window:globalThis);
