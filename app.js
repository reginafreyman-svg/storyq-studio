const steps = [
  {
    id: "context",
    kicker: "Contexto",
    title: "Datos del laboratorio",
    purpose: "Identifica esta evidencia para que pueda leerse como parte de una clase, equipo o investigacion posterior.",
    fields: [
      ["studentName", "Nombre del estudiante o equipo", "input", "Ej. Equipo 4 / Ana y Luis"],
      ["groupName", "Grupo", "input", "Ej. Narrativas y futuros - Gpo. 301"],
      ["activityName", "Actividad", "input", "Ej. Artefactos de futuros"],
      ["teacherName", "Docente", "input", "Ej. Regina Freyman"],
      ["sessionDate", "Fecha", "input", "Ej. 17 de junio de 2026"]
    ]
  },
  {
    id: "world",
    kicker: "Sistema",
    title: "Elegir o describir el mundo",
    purpose: "Define el universo social que vas a analizar. Puede venir de una obra, una tendencia actual o una sociedad inventada.",
    fields: [
      ["worldName", "Nombre del mundo o proyecto", "input", "Ej. Ciudad de transparencia total"],
      ["worldDescription", "Descripcion breve", "textarea", "Que tipo de sociedad es? Que promete? Que incomoda?"]
    ]
  },
  {
    id: "map",
    kicker: "Mapa",
    title: "Mapa rapido del mundo",
    purpose: "Analiza el sistema. La meta no es resumir una historia, sino revelar valores, poder, exclusion y consecuencias humanas.",
    fields: [
      ["centralConflict", "Conflicto central", "textarea", "Que tension sostiene todo este mundo?"],
      ["values", "Valores predominantes", "textarea", "Que se protege o premia? Eficiencia, seguridad, armonia, progreso..."],
      ["power", "Estructura de poder", "textarea", "Quien decide, ejecuta y legitima el sistema?"],
      ["exclusion", "Exclusion y margen", "textarea", "Quien no cabe o queda en desventaja?"],
      ["systems", "Tecnologias o sistemas", "textarea", "Que infraestructura organiza la vida cotidiana?"]
    ]
  },
  {
    id: "dilemma",
    kicker: "Etica",
    title: "Dilema etico",
    purpose: "Formula la tension moral que el artefacto debe volver visible.",
    fields: [
      ["dilemmaType", "Tipo de dilema", "select", "Libertad vs. seguridad|Eficiencia vs. dignidad|Avance tecnologico vs. naturaleza|Excelencia vs. diversidad|Otro"],
      ["probableFuture", "Futuro probable", "textarea", "Que futuro aparece si las tendencias continuan?"],
      ["disturbingFuture", "Futuro inquietante", "textarea", "Que version nadie elegiria abiertamente, pero el sistema podria producir?"],
      ["desirableFuture", "Futuro deseable", "textarea", "Que deberia defenderse aunque el sistema no lo apoye?"],
      ["ethicalQuestion", "Pregunta etica", "textarea", "Escribe la pregunta que el artefacto debe provocar."]
    ]
  },
  {
    id: "human",
    kicker: "Humano primero",
    title: "Imaginacion humana",
    purpose: "Antes de usar IA, inventa dos objetos. Aqui importa tu intuicion: miedo, deseo, sospecha y postura.",
    fields: [
      ["humanObjectOne", "Objeto humano 1", "textarea", "Nombre, funcion, usuario y que revela."],
      ["humanObjectTwo", "Objeto humano 2", "textarea", "Nombre, funcion, usuario y que revela."]
    ]
  },
  {
    id: "ai",
    kicker: "Contrapunto",
    title: "Exploracion con IA",
    purpose: "Usa la IA como contraste, no como sustituto. Compara sus lugares comunes con tus decisiones humanas.",
    fields: [
      ["aiObject", "Objeto generado como contrapunto", "textarea", "Pulsa Generar contrapunto o escribe una propuesta propia."],
      ["aiComparison", "Comparacion critica", "textarea", "Que repite, simplifica o vuelve predecible? Que conviene rescatar?"],
      ["humanModification", "Que parte modificaste tu", "textarea", "Explica que cambiaste despues del contrapunto y por que."],
      ["rejectedAiSuggestion", "Que sugerencia de IA rechazaste", "textarea", "Nombra una idea que decidiste no usar."],
      ["rejectionReason", "Por que la rechazaste", "textarea", "Que criterio humano, etico o narrativo guio el rechazo?"],
      ["selectedConcept", "Concepto elegido", "select", "Concepto humano|Concepto de IA|Combinacion"],
      ["selectionReason", "Razon de la eleccion", "textarea", "Por que esta opcion sostiene mejor el dilema?"]
    ],
    ai: true
  },
  {
    id: "narrative",
    kicker: "Narrativa",
    title: "Historia del artefacto",
    purpose: "Convierte la descripcion en una microhistoria social sin repetir el argumento etico: antes, despues y conflicto.",
    fields: [
      ["lifeBeforeAfter", "Antes y despues del artefacto", "textarea", "En dos frases: que practica existia antes y que cambia cuando el objeto aparece?"],
      ["benefitResistance", "Beneficio y resistencia", "textarea", "Quien se beneficia y quien se resiste a su logica?"],
      ["narrativeConflict", "Conflicto narrativo", "textarea", "Que tension vuelve memorable esta historia?"]
    ]
  },
  {
    id: "futureHuman",
    kicker: "Diseno critico",
    title: "La persona que necesita este futuro",
    purpose: "La pregunta clave: que tipo de ser humano produce, exige o recompensa este sistema?",
    fields: [
      ["requiredHuman", "Este sistema requiere una persona que...", "textarea", "Describe disposiciones, habitos, habilidades y renuncias. Incluye que fortalece y que castiga."]
    ]
  },
  {
    id: "storyboard",
    kicker: "Artefacto",
    title: "Storyboard del artefacto",
    purpose: "Convierte la idea en un objeto cultural con nombre, uso, control, materialidad e ideologia.",
    fields: [
      ["objectName", "Nombre del artefacto", "input", "Ej. Pulsera de Merito Civico"],
      ["declaredPurpose", "Funcion social declarada", "textarea", "Que dice el sistema que hace?"],
      ["realPurpose", "Funcion real", "textarea", "Que hace realmente sobre las personas?"],
      ["users", "Quien lo usa", "textarea", "Es universal, obligatorio, exclusivo o diferencial?"],
      ["governance", "Quien lo gobierna", "textarea", "Usuario, Estado, empresa, algoritmo, comunidad..."],
      ["reveals", "Que revela sobre la sociedad", "textarea", "La frase mas importante del proyecto."],
      ["scale", "Escala y relacion con el cuerpo", "textarea", "Se porta, se habita, se consulta, se implanta, se instala en el espacio? Cuanto mide?"],
      ["materials", "Materiales principales", "textarea", "Metal, papel, bioplastico, textil, vidrio, pantallas, sensores, residuos, materia organica..."],
      ["materiality", "Materialidad y estetica", "textarea", "Lujoso, austero, amable, amenazante, invisible, infantil..."]
    ]
  },
  {
    id: "sketch",
    kicker: "Prototipo",
    title: "Boceto, collage o diagrama",
    purpose: "Aterriza el objeto. La representacion visual debe mostrar forma, escala, materiales, piezas y mecanismo.",
    fields: [
      ["visualMode", "Modo visual", "select", "Boceto anotado|Collage|Diagrama de sistema|Modelo conceptual"],
      ["visualDescription", "Descripcion visual", "textarea", "Que se veria? Que partes tendrian anotaciones?"],
      ["fabrication", "Fabricacion posible", "textarea", "Como podria construirse un prototipo rapido? Que piezas, tecnicas o herramientas usarias?"],
      ["assembly", "Partes y ensamblaje", "textarea", "Enumera 3 a 6 partes visibles u ocultas y como se conectan."],
      ["hiddenMechanism", "Mecanismo oculto", "textarea", "Que opera por debajo de la apariencia del objeto?"],
      ["visualPrompt", "Instruccion para visualizarlo", "textarea", "Escribe una instruccion clara para dibujarlo, fotografiarlo, modelarlo o pedir una imagen a IA."]
    ]
  },
  {
    id: "ethics",
    kicker: "Argumento",
    title: "Evaluacion etica",
    purpose: "Toma postura sobre lo que el objeto ilumina, a quien beneficia y quien paga el costo.",
    fields: [
      ["socialIssue", "Problema social que ilumina", "textarea", "Poder, vigilancia, acceso, reconocimiento, desigualdad..."],
      ["winnersLosers", "Ganancias y costos", "textarea", "Quien gana, quien pierde y que costo queda oculto?"],
      ["ethicalPosition", "Postura argumentada", "textarea", "Por que este artefacto importa fuera de la ficcion?"]
    ]
  },
  {
    id: "curatorial",
    kicker: "Museo",
    title: "Texto curatorial",
    purpose: "Escribe una ficha de museo que no cierre la interpretacion: debe situar, revelar valores y dejar una pregunta incomoda.",
    fields: [
      ["curatorialText", "Ficha curatorial", "textarea", "Este artefacto pertenece a la sociedad de... Fue utilizado para... Su existencia indica que esta cultura valoraba... por encima de... Cierra con una pregunta incomoda."]
    ]
  },
  {
    id: "exit",
    kicker: "Cierre",
    title: "Reflexion de salida",
    purpose: "Antes de entregar, deja una lectura breve de tu experiencia. Estas respuestas ayudan a mejorar la herramienta y a entender donde ocurrio el pensamiento.",
    fields: [
      ["mostHelpfulQuestion", "Que pregunta te ayudo mas a pensar", "textarea", "Nombra la pregunta o momento que mas activo tu reflexion."],
      ["mostConfusingQuestion", "Que se sintio confuso, repetido o innecesario", "textarea", "Esto ayuda a simplificar la siguiente version."],
      ["ideaShiftMoment", "En que momento cambio tu idea", "textarea", "Describe el cambio mas importante de tu proceso."],
      ["reportSelfView", "El Reporte StoryQ muestra algo real de tu proceso", "select", "Si|Parcialmente|No|No estoy seguro/a"],
      ["whatToRemove", "Si hubiera que reducir la app, que quitarias", "textarea", "Indica un campo, paso o pregunta que podria simplificarse."]
    ]
  }
];

const state = JSON.parse(localStorage.getItem("futureArtifactLab") || "{}");
let current = Number(localStorage.getItem("futureArtifactStep") || 0);
let pilotMode = localStorage.getItem("futureArtifactPilotMode") === "true";

const stepGuidance = {
  context: { time: "2 min", mode: "Preparar", effort: "Registro" },
  world: { time: "5 min", mode: "Situar", effort: "Descripcion" },
  map: { time: "12 min", mode: "Analizar", effort: "Sistema" },
  dilemma: { time: "10 min", mode: "Decidir", effort: "Etica" },
  human: { time: "10 min", mode: "Crear", effort: "Humano primero" },
  ai: { time: "12 min", mode: "Contrastar", effort: "Humano + IA" },
  narrative: { time: "8 min", mode: "Narrar", effort: "Historia" },
  futureHuman: { time: "8 min", mode: "Perfilar", effort: "Diseno critico" },
  storyboard: { time: "12 min", mode: "Materializar", effort: "Artefacto" },
  sketch: { time: "8 min", mode: "Visualizar", effort: "Prototipo" },
  ethics: { time: "8 min", mode: "Argumentar", effort: "Impacto" },
  curatorial: { time: "8 min", mode: "Comunicar", effort: "Museo" },
  exit: { time: "5 min", mode: "Reflexionar", effort: "Usabilidad" }
};

const coreFields = new Set([
  "studentName",
  "groupName",
  "worldName",
  "centralConflict",
  "values",
  "dilemmaType",
  "ethicalQuestion",
  "humanObjectOne",
  "aiComparison",
  "humanModification",
  "rejectedAiSuggestion",
  "rejectionReason",
  "requiredHuman",
  "objectName",
  "scale",
  "materials",
  "fabrication",
  "assembly",
  "reveals",
  "socialIssue",
  "ethicalPosition",
  "curatorialText",
  "mostHelpfulQuestion",
  "mostConfusingQuestion",
  "reportSelfView"
]);

const fieldLabels = Object.fromEntries(
  steps.flatMap((step) => step.fields.map(([key, label]) => [key, label]))
);

const stepNav = document.querySelector("#stepNav");
const stepForm = document.querySelector("#stepForm");
const stepTitle = document.querySelector("#stepTitle");
const stepKicker = document.querySelector("#stepKicker");
const stepPurpose = document.querySelector("#stepPurpose");
const stepMeta = document.querySelector("#stepMeta");
const stepCounter = document.querySelector("#stepCounter");
const completionText = document.querySelector("#completionText");
const progressBar = document.querySelector("#progressBar");
const pilotModeToggle = document.querySelector("#pilotModeToggle");
const pilotModeNote = document.querySelector("#pilotModeNote");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const aiBtn = document.querySelector("#aiBtn");
const cognitiveForm = document.querySelector("#cognitiveForm");
const cognitiveStepName = document.querySelector("#cognitiveStepName");

const cognitiveControls = [
  ["aiFunction", "Funcion de la IA", "Sin IA|Exploracion|Ayudante|Contraste cognitivo|Oponente"],
  ["aiIntervention", "Intervencion de IA", "Ninguna|Baja|Moderada|Alta"],
  ["humanIntervention", "Intervencion humana", "Alta|Moderada|Baja"],
  ["cognitiveValue", "Valor cognitivo", "Pensamiento critico|Creatividad|Memoria activa|Metacognicion|Resolucion de problemas|Vision prospectiva"],
  ["decisionMoment", "Momento de decision", "Sin decision critica|Eleccion de idea|Rechazo de sugerencia|Cambio de postura|Sintesis final"]
];

const sampleLabState = {
  studentName: "Equipo Aurora",
  groupName: "Narrativas y futuros - Gpo. 301",
  activityName: "Artefactos de futuros",
  teacherName: "Regina Freyman",
  sessionDate: "17 de junio de 2026",
  worldName: "Republica de la Calma Obligatoria",
  worldDescription: "Una sociedad que promete paz social regulando emociones improductivas.",
  centralConflict: "La pertenencia depende de demostrar estabilidad emocional constante.",
  values: "Calma, productividad, convivencia sin conflicto visible.",
  power: "Una alianza entre Estado, escuelas, empresas de bienestar y algoritmos de evaluacion emocional.",
  exclusion: "Quedan fuera quienes expresan duelo, rabia, ansiedad o desacuerdo publico.",
  systems: "Sensores afectivos, registros escolares, permisos de movilidad y certificados de serenidad.",
  dilemmaType: "Libertad vs. seguridad",
  probableFuture: "La estabilidad emocional se vuelve requisito para estudiar, trabajar y circular.",
  disturbingFuture: "Las personas aprenden a censurar sus emociones antes de sentirlas.",
  desirableFuture: "Una sociedad que cuide sin convertir la vulnerabilidad en falta civica.",
  ethicalQuestion: "Hasta que punto una sociedad puede exigir estabilidad emocional a cambio de pertenencia?",
  humanObjectOne: "Brazalete Sereno: objeto amable que vibra cuando detecta emociones no autorizadas.",
  humanObjectTwo: "Diario de Ajuste: cuaderno escolar donde se registran desviaciones emocionales.",
  aiObject: "Credencial de Ajuste Civico que clasifica compatibilidad emocional para acceder a servicios.",
  aiComparison: "La IA propuso una solucion administrativa y medible. Sirve como contraste porque revela la tendencia a convertir emociones en datos.",
  humanModification: "Cambiamos vigilancia directa por un objeto amable que normaliza la autocensura.",
  rejectedAiSuggestion: "Una app de puntaje emocional visible para todos.",
  rejectionReason: "Era demasiado obvia y convertia el dilema en control externo, no en interiorizacion.",
  selectedConcept: "Concepto humano",
  selectionReason: "El brazalete parecia cuidado, pero funcionaba como disciplina emocional.",
  lifeBeforeAfter: "Antes del brazalete, los conflictos emocionales eran visibles y comunitarios. Despues, la calma se convierte en requisito de acceso.",
  benefitResistance: "Se benefician escuelas, empresas y autoridades que reducen conflicto visible. Resisten personas que se niegan a traducir duelo o rabia en una falla de comportamiento.",
  narrativeConflict: "El artefacto promete cuidado, pero produce obediencia emocional.",
  requiredHuman: "Una persona que anticipa su propia desviacion emocional y se corrige antes de incomodar al sistema.",
  objectName: "Brazalete Sereno",
  declaredPurpose: "Ayudar a mantener ambientes seguros y emocionalmente saludables.",
  realPurpose: "Normalizar la autocensura y convertir la calma en criterio de pertenencia.",
  users: "Estudiantes, trabajadores y personas que necesitan acceder a servicios publicos.",
  governance: "Instituciones educativas, empresas de bienestar y una autoridad algoritmica.",
  reveals: "Esta sociedad valora la calma administrable por encima de la complejidad emocional.",
  scale: "Objeto portable del tamano de una pulsera medica, siempre en contacto con la piel.",
  materials: "Metal pulido, silicona hipoalergenica, microleds dorados, sensor interior y sello institucional grabado.",
  materiality: "Metal pulido, interfaz suave, luces doradas y vibracion discreta.",
  visualMode: "Boceto anotado",
  visualDescription: "Un brazalete elegante con sensor interior, luz de advertencia y sello institucional.",
  fabrication: "Prototipo con impresion 3D, lamina metalica, tira led, pieza de silicona y etiqueta institucional.",
  assembly: "Aro exterior, sensor interior, modulo de luz, sello de autorizacion, cierre magnetico y chip de registro.",
  hiddenMechanism: "Registra microexpresiones y envia alertas a un archivo de comportamiento civico.",
  visualPrompt: "Boceto de producto de un brazalete institucional elegante, metal pulido y luz dorada discreta, con anotaciones de sensor interior, sello civico, vibracion y archivo de datos.",
  socialIssue: "La conversion del bienestar emocional en requisito de productividad.",
  winnersLosers: "Ganan instituciones que reducen conflicto visible y empresas que venden bienestar medible. Pierden personas que viven duelo, ansiedad, rabia o protesta.",
  ethicalPosition: "El artefacto importa porque muestra como el cuidado puede convertirse en disciplina.",
  curatorialText: "Este artefacto pertenece a la Republica de la Calma Obligatoria. Fue utilizado para regular el acceso a espacios educativos y laborales mediante indicadores de estabilidad emocional. Su existencia indica que esta cultura valoraba la convivencia sin conflicto por encima de la expresion legitima del dolor, la rabia o la vulnerabilidad. Que emociones dejamos de reconocer cuando solo premiamos las que no incomodan?",
  mostHelpfulQuestion: "Que sugerencia de la IA rechazaste y por que.",
  mostConfusingQuestion: "La diferencia entre funcion declarada y funcion real.",
  ideaShiftMoment: "Cuando vimos que el control mas fuerte era la autocensura, no la vigilancia externa.",
  reportSelfView: "Si",
  whatToRemove: "Reduciria algunos campos de materialidad."
};

function ensureTrace() {
  state._meta ||= {};
  state._meta.startedAt ||= new Date().toISOString();
  state._meta.aiCounterpoints ||= 0;
  state._meta.humanModifications ||= 0;
  state._meta.decisions ||= 0;
  state._fieldTouched ||= {};
  state._fieldChanged ||= {};
  state._cognitiveTags ||= {};
  state._timeline ||= [];
}

function logEvent(type, title, detail = "") {
  ensureTrace();
  state._timeline.push({
    at: new Date().toISOString(),
    step: steps[current]?.id || "general",
    type,
    title,
    detail
  });
  state._meta.lastUpdatedAt = new Date().toISOString();
  if (type === "decision") state._meta.decisions += 1;
  if (type === "human-edit") state._meta.humanModifications += 1;
  save();
}

ensureTrace();

function save() {
  ensureTrace();
  state._meta.lastUpdatedAt = new Date().toISOString();
  localStorage.setItem("futureArtifactLab", JSON.stringify(state));
  localStorage.setItem("futureArtifactStep", String(current));
}

function filledFields() {
  const all = steps.flatMap((step) => step.fields.map((field) => field[0]));
  return all.filter((key) => String(state[key] || "").trim()).length / all.length;
}

function coreCompletionStats() {
  const fields = [...coreFields];
  const missing = fields.filter((key) => !String(state[key] || "").trim());
  const filled = fields.length - missing.length;
  const percent = Math.round((filled / fields.length) * 100);
  return { fields, missing, filled, total: fields.length, percent };
}

function compact(value, fallback = "Pendiente") {
  const text = String(value || "").trim();
  if (!text) return fallback;
  return text.length > 118 ? `${text.slice(0, 115)}...` : text;
}

function hasStudentWork() {
  const ignored = new Set(["_meta", "_fieldTouched", "_fieldChanged", "_cognitiveTags", "_timeline"]);
  return Object.keys(state).some((key) => !ignored.has(key) && String(state[key] || "").trim());
}

function renderNav() {
  stepNav.innerHTML = "";
  steps.forEach((step, index) => {
    const complete = step.fields.some(([key]) => String(state[key] || "").trim());
    const button = document.createElement("button");
    button.type = "button";
    button.className = `step-tab${index === current ? " active" : ""}${complete ? " complete" : ""}`;
    button.innerHTML = `<span>${complete ? "✓" : index + 1}</span><span>${step.title}</span>`;
    button.addEventListener("click", () => {
      current = index;
      save();
      render();
    });
    stepNav.append(button);
  });
}

function renderField([key, label, type, hint]) {
  const wrap = document.createElement("div");
  const isCore = coreFields.has(key);
  wrap.className = `field${isCore ? " core-field" : " support-field"}`;
  if (pilotMode && !isCore) wrap.hidden = true;

  const labelEl = document.createElement("label");
  labelEl.setAttribute("for", key);
  labelEl.innerHTML = `<span>${label}</span><strong>${isCore ? "Clave" : "Apoyo"}</strong>`;
  wrap.append(labelEl);

  let control;
  if (type === "textarea") {
    control = document.createElement("textarea");
    control.placeholder = hint;
  } else if (type === "select") {
    control = document.createElement("select");
    hint.split("|").forEach((optionText) => {
      const option = document.createElement("option");
      option.value = optionText;
      option.textContent = optionText;
      control.append(option);
    });
  } else {
    control = document.createElement("input");
    control.placeholder = hint;
  }
  control.id = key;
  control.name = key;
  control.value = state[key] || "";
  const initialValue = state[key] || "";
  control.addEventListener("input", () => {
    state[key] = control.value;
    save();
    renderPreview();
    renderNav();
    updateProgress();
  });
  control.addEventListener("change", () => {
    const value = String(control.value || "").trim();
    if (!value) return;
    if (!state._fieldTouched[key] && !initialValue) {
      state._fieldTouched[key] = true;
      logEvent("idea", "Idea original", label);
    } else if (value !== initialValue) {
      state._fieldTouched[key] = true;
      state._fieldChanged[key] = (state._fieldChanged[key] || 0) + 1;
      logEvent("human-edit", "Modificacion humana", label);
    }
  });
  wrap.append(control);

  if (type !== "select" && hint) {
    const small = document.createElement("small");
    small.textContent = hint;
    wrap.append(small);
  }

  return wrap;
}

function currentTags() {
  ensureTrace();
  const stepId = steps[current].id;
  state._cognitiveTags[stepId] ||= {
    aiFunction: stepId === "ai" ? "Contraste cognitivo" : "Sin IA",
    aiIntervention: stepId === "ai" ? "Moderada" : "Ninguna",
    humanIntervention: "Alta",
    cognitiveValue: "Pensamiento critico",
    decisionMoment: "Sin decision critica",
    decisionWhy: ""
  };
  return state._cognitiveTags[stepId];
}

function renderCognitiveForm() {
  const tags = currentTags();
  cognitiveStepName.textContent = steps[current].title;
  cognitiveForm.innerHTML = "";
  cognitiveControls.forEach(([key, label, options]) => {
    const field = document.createElement("label");
    field.className = "mini-field";
    field.innerHTML = `<span>${label}</span>`;
    const select = document.createElement("select");
    options.split("|").forEach((optionText) => {
      const option = document.createElement("option");
      option.value = optionText;
      option.textContent = optionText;
      select.append(option);
    });
    select.value = tags[key] || "";
    select.addEventListener("change", () => {
      tags[key] = select.value;
      if (key === "decisionMoment" && select.value !== "Sin decision critica") {
        logEvent("decision", select.value, `Paso: ${steps[current].title}`);
      }
      save();
      renderPreview();
    });
    field.append(select);
    cognitiveForm.append(field);
  });

  const why = document.createElement("label");
  why.className = "mini-field wide";
  why.innerHTML = "<span>Por que tomaste esta decision?</span>";
  const textarea = document.createElement("textarea");
  textarea.value = tags.decisionWhy || "";
  textarea.placeholder = "Que parte decidiste cambiar, conservar o rechazar? Por que?";
  textarea.addEventListener("change", () => {
    tags.decisionWhy = textarea.value;
    if (textarea.value.trim()) logEvent("decision", "Justificacion de decision", textarea.value.trim().slice(0, 180));
    save();
    renderPreview();
  });
  why.append(textarea);
  cognitiveForm.append(why);
}

function updateProgress() {
  const percent = Math.round(filledFields() * 100);
  progressBar.style.width = `${percent}%`;
  completionText.textContent = `${percent}% completo`;
  stepCounter.textContent = `Paso ${current + 1} de ${steps.length}`;
}

function render() {
  const step = steps[current];
  const guidance = stepGuidance[step.id] || { time: "Flexible", mode: "Pensar", effort: "Proceso" };
  pilotModeToggle.checked = pilotMode;
  pilotModeNote.hidden = !pilotMode;
  stepKicker.textContent = step.kicker;
  stepTitle.textContent = step.title;
  stepPurpose.textContent = step.purpose;
  stepMeta.innerHTML = `
    <span>${guidance.time}</span>
    <span>${guidance.mode}</span>
    <span>${guidance.effort}</span>
  `;
  stepForm.innerHTML = "";
  step.fields.forEach((field) => stepForm.append(renderField(field)));
  stepForm.className = step.fields.length === 2 ? "field-grid two-column" : "field-grid";
  prevBtn.disabled = current === 0;
  nextBtn.textContent = current === steps.length - 1 ? "Finalizar" : "Siguiente";
  aiBtn.style.visibility = step.ai ? "visible" : "hidden";
  renderCognitiveForm();
  renderNav();
  renderPreview();
  updateProgress();
}

function renderPreview() {
  document.querySelector("#labelWorld").textContent = state.worldName || "Sociedad por definir";
  document.querySelector("#labelObject").textContent = state.objectName || "Artefacto sin nombre";

  const generatedLabel = [
    state.curatorialText,
    state.objectName && state.worldName
      ? `Este artefacto pertenece a ${state.worldName}. Fue utilizado para ${state.declaredPurpose || "regular una practica social aun no descrita"}. Su existencia indica que esta cultura valoraba ${state.values || "ciertos valores dominantes"} por encima de ${state.desirableFuture || "otras formas de vida"}.`
      : ""
  ].find(Boolean);

  document.querySelector("#labelText").textContent = generatedLabel || "La ficha aparecerá cuando escribas el texto curatorial o completes los campos centrales del laboratorio.";
  document.querySelector("#summaryDilemma").textContent = compact(state.ethicalQuestion || state.dilemmaType);
  document.querySelector("#summaryHuman").textContent = compact(state.requiredHuman);
  document.querySelector("#summaryIssue").textContent = compact(state.socialIssue);
  renderJourney();
  renderCoreCompletion();
  renderTrace();
}

function renderJourney() {
  const items = [
    ["Contexto", state.groupName || state.activityName],
    ["Sistema", state.worldName],
    ["Conflicto", state.centralConflict || state.values],
    ["Dilema", state.ethicalQuestion || state.dilemmaType],
    ["Persona", state.requiredHuman],
    ["Artefacto", state.objectName],
    ["Materialidad", state.scale || state.materials || state.materiality],
    ["Etica", state.socialIssue || state.ethicalPosition]
  ];
  const map = document.querySelector("#journeyMap");
  map.innerHTML = items.map(([label, value], index) => `
    <div class="journey-item${String(value || "").trim() ? " filled" : ""}">
      <span>${index + 1}</span>
      <div>
        <strong>${label}</strong>
        <p>${compact(value, "Pendiente")}</p>
      </div>
    </div>
  `).join("");
}

function renderCoreCompletion() {
  const stats = coreCompletionStats();
  document.querySelector("#coreCompletion").textContent = `${stats.filled}/${stats.total}`;
  document.querySelector("#coreBar").style.width = `${stats.percent}%`;
  document.querySelector("#coreMessage").textContent = stats.missing.length
    ? `Faltan ${stats.missing.length} campo(s) clave para fortalecer el reporte.`
    : "Los campos clave estan completos. El reporte tiene una base solida.";
  const list = document.querySelector("#coreMissingList");
  list.innerHTML = stats.missing.slice(0, 5).map((key) => `<li>${fieldLabels[key] || key}</li>`).join("");
}

function traceStats() {
  ensureTrace();
  const fields = steps.flatMap((step) => step.fields.map((field) => field[0]));
  const filled = fields.filter((key) => String(state[key] || "").trim()).length;
  const aiWeight = Math.min(60, (state._meta.aiCounterpoints || 0) * 15 + (String(state.aiObject || "").trim() ? 15 : 0));
  const humanWeight = Math.max(40, 100 - aiWeight);
  const minutes = Math.max(0, Math.round((new Date() - new Date(state._meta.startedAt)) / 60000));
  const tagValues = Object.values(state._cognitiveTags || {});
  const decisionTags = tagValues.filter((tag) => tag.decisionMoment && tag.decisionMoment !== "Sin decision critica").length;
  const aiTags = tagValues.filter((tag) => tag.aiFunction && tag.aiFunction !== "Sin IA").length;
  return {
    filled,
    total: fields.length,
    aiWeight,
    humanWeight,
    minutes,
    iterations: state._timeline.length,
    decisions: state._meta.decisions || 0,
    humanEdits: state._meta.humanModifications || 0,
    decisionTags,
    aiTags
  };
}

function renderTrace() {
  const stats = traceStats();
  document.querySelector("#traceScore").textContent = `${stats.decisions} decisiones`;
  document.querySelector("#humanPercent").textContent = `${stats.humanWeight}%`;
  document.querySelector("#aiPercent").textContent = `${stats.aiWeight}%`;
  document.querySelector("#iterationCount").textContent = String(stats.iterations);

  const list = document.querySelector("#timelineList");
  list.innerHTML = "";
  const events = state._timeline.slice(-5).reverse();
  if (!events.length) {
    const item = document.createElement("li");
    item.innerHTML = "<strong>Sin eventos aun</strong><span>La bitacora aparecera cuando escribas, contrastes o tomes decisiones.</span>";
    list.append(item);
    return;
  }
  events.forEach((event) => {
    const item = document.createElement("li");
    const time = new Date(event.at).toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" });
    item.innerHTML = `<strong>${event.title}</strong><span>${time} - ${event.detail || event.type}</span>`;
    list.append(item);
  });
}

function generateCounterpoint() {
  const world = state.worldName || "esta sociedad";
  const conflict = state.centralConflict || state.ethicalQuestion || "su conflicto central";
  const value = state.values || "seguridad y eficiencia";
  const excluded = state.exclusion || "quienes no se adaptan al sistema";

  state.aiObject = `Objeto contrapunto: Credencial de Ajuste Civico. En ${world}, este documento-portatil clasifica el nivel de compatibilidad de cada persona con ${value}. Parece facilitar acceso a servicios, pero tambien normaliza la exclusion de ${excluded}.`;
  state.aiComparison = `El contrapunto tiende a resolver ${conflict} mediante clasificacion y medicion. Es util porque revela un sesgo frecuente: imaginar el futuro como administracion de datos. La decision humana deberia conservar aquello que resulte mas ambiguo, afectivo o incomodo.`;
  state._meta.aiCounterpoints += 1;
  logEvent("ai", "Contraste IA", `Contrapunto ${state._meta.aiCounterpoints}: ${world}`);
  save();
  render();
}

function loadSampleLab() {
  if (hasStudentWork()) {
    alert("El caso demo no se cargo porque ya hay trabajo guardado. Para proteger el avance del estudiante, abre el demo en un navegador limpio o usa Limpiar laboratorio primero.");
    return;
  }
  if (!confirm("Esto cargara un caso demo completo para probar el reporte. No hay trabajo guardado actualmente.")) return;
  Object.keys(state).forEach((key) => delete state[key]);
  Object.assign(state, sampleLabState, {
    _meta: {
      startedAt: new Date(Date.now() - 42 * 60000).toISOString(),
      lastUpdatedAt: new Date().toISOString(),
      aiCounterpoints: 1,
      humanModifications: 3,
      decisions: 4
    },
    _fieldTouched: {},
    _fieldChanged: {
      humanModification: 1,
      objectName: 1,
      curatorialText: 1
    },
    _cognitiveTags: {
      human: {
        aiFunction: "Sin IA",
        aiIntervention: "Ninguna",
        humanIntervention: "Alta",
        cognitiveValue: "Creatividad",
        decisionMoment: "Eleccion de idea",
        decisionWhy: "Elegimos un objeto cotidiano y amable porque el control mas potente no siempre parece amenaza."
      },
      ai: {
        aiFunction: "Contraste cognitivo",
        aiIntervention: "Baja",
        humanIntervention: "Alta",
        cognitiveValue: "Pensamiento critico",
        decisionMoment: "Rechazo de sugerencia",
        decisionWhy: "Rechazamos la app de puntaje porque era demasiado obvia y menos inquietante."
      },
      ethics: {
        aiFunction: "Sin IA",
        aiIntervention: "Ninguna",
        humanIntervention: "Alta",
        cognitiveValue: "Argumentacion etica",
        decisionMoment: "Sintesis final",
        decisionWhy: "El argumento central es que el cuidado tambien puede volverse disciplina."
      }
    },
    _timeline: [
      { at: new Date(Date.now() - 40 * 60000).toISOString(), step: "human", type: "idea", title: "Idea original", detail: "Brazalete Sereno" },
      { at: new Date(Date.now() - 32 * 60000).toISOString(), step: "ai", type: "ai", title: "Contraste IA", detail: "Credencial de Ajuste Civico" },
      { at: new Date(Date.now() - 25 * 60000).toISOString(), step: "ai", type: "decision", title: "Rechazo de sugerencia", detail: "Se descarto la app de puntaje emocional." },
      { at: new Date(Date.now() - 18 * 60000).toISOString(), step: "storyboard", type: "human-edit", title: "Modificacion humana", detail: "El objeto se volvio amable y disciplinario." },
      { at: new Date(Date.now() - 8 * 60000).toISOString(), step: "curatorial", type: "decision", title: "Sintesis final", detail: "Cuidado como forma de disciplina." }
    ]
  });
  current = 0;
  save();
  render();
}

function buildEvidence() {
  const stats = traceStats();
  const coreStats = coreCompletionStats();
  const payload = {
    title: "StoryQ Studio - Reporte de trazabilidad cognitiva",
    exportedAt: new Date().toISOString(),
    participant: {
      name: state.studentName || "",
      group: state.groupName || "",
      activity: state.activityName || "",
      teacher: state.teacherName || "",
      date: state.sessionDate || ""
    },
    cognitiveProfile: {
      estimatedHumanWork: `${stats.humanWeight}%`,
      estimatedAiAssistedWork: `${stats.aiWeight}%`,
      timeInvestedMinutes: stats.minutes,
      iterations: stats.iterations,
      criticalDecisions: stats.decisions,
      humanModifications: stats.humanEdits,
      aiCounterpoints: state._meta.aiCounterpoints,
      filledFields: `${stats.filled}/${stats.total}`,
      coreFieldsCompleted: `${coreStats.filled}/${coreStats.total}`,
      coreCompletionPercent: `${coreStats.percent}%`,
      missingCoreFields: coreStats.missing.map((key) => fieldLabels[key] || key)
    },
    journey: {
      context: state.groupName || state.activityName || "",
      system: state.worldName || "",
      conflict: state.centralConflict || "",
      dilemma: state.ethicalQuestion || state.dilemmaType || "",
      futureHuman: state.requiredHuman || "",
      artifact: state.objectName || "",
      materiality: state.scale || state.materials || state.materiality || "",
      ethics: state.socialIssue || state.ethicalPosition || ""
    },
    studentFeedback: {
      mostHelpfulQuestion: state.mostHelpfulQuestion || "",
      mostConfusingQuestion: state.mostConfusingQuestion || "",
      ideaShiftMoment: state.ideaShiftMoment || "",
      reportSelfView: state.reportSelfView || "",
      whatToRemove: state.whatToRemove || ""
    },
    cognitiveTags: state._cognitiveTags,
    timeline: state._timeline,
    evidence: state
  };
  return JSON.stringify(payload, null, 2);
}

function buildReadableReportText() {
  const stats = traceStats();
  const coreStats = coreCompletionStats();
  const interpretation = cognitiveInterpretation(stats).map((item) => `- ${item}`).join("\n");
  const timeline = state._timeline.length
    ? state._timeline.map((event, index) => {
        const time = new Date(event.at).toLocaleString("es-MX", {
          day: "2-digit",
          month: "short",
          hour: "2-digit",
          minute: "2-digit"
        });
        return `${index + 1}. ${event.title} (${time}) - ${event.detail || event.type}`;
      }).join("\n")
    : "Sin eventos registrados.";

  return [
    "StoryQ Studio - Reporte de trazabilidad cognitiva",
    "",
    "CONTEXTO",
    `Participante: ${state.studentName || "No registrado"}`,
    `Grupo: ${state.groupName || "No registrado"}`,
    `Actividad: ${state.activityName || "No registrada"}`,
    `Docente: ${state.teacherName || "No registrada"}`,
    "",
    "PERFIL COGNITIVO",
    `Trabajo humano estimado: ${stats.humanWeight}%`,
    `Trabajo asistido por IA: ${stats.aiWeight}%`,
    `Tiempo invertido: ${stats.minutes} min`,
    `Iteraciones: ${stats.iterations}`,
    `Decisiones criticas: ${stats.decisions + stats.decisionTags}`,
    `Contrapuntos IA: ${state._meta.aiCounterpoints}`,
    `Campos clave completos: ${coreStats.filled}/${coreStats.total} (${coreStats.percent}%)`,
    `Campos clave pendientes: ${coreStats.missing.map((key) => fieldLabels[key] || key).join("; ") || "Ninguno"}`,
    "",
    "LECTURA DOCENTE",
    interpretation || "- Sin lectura generada.",
    "",
    "CONTRASTE HUMANO/IA",
    `Modificacion humana: ${state.humanModification || "No registrada"}`,
    `Sugerencia de IA rechazada: ${state.rejectedAiSuggestion || "No registrada"}`,
    `Criterio de rechazo: ${state.rejectionReason || "No registrado"}`,
    "",
    "EXPERIENCIA DEL ESTUDIANTE",
    `Pregunta mas util: ${state.mostHelpfulQuestion || "No registrada"}`,
    `Momento de cambio: ${state.ideaShiftMoment || "No registrado"}`,
    `El reporte representa su proceso: ${state.reportSelfView || "No registrado"}`,
    `Que reduciria: ${state.whatToRemove || "No registrado"}`,
    "",
    "ARTEFACTO",
    `Mundo: ${state.worldName || "No registrado"}`,
    `Artefacto: ${state.objectName || "No registrado"}`,
    `Escala: ${state.scale || "No registrada"}`,
    `Materiales: ${state.materials || "No registrados"}`,
    `Fabricacion: ${state.fabrication || "No registrada"}`,
    `Ensamblaje: ${state.assembly || "No registrado"}`,
    `Dilema: ${state.ethicalQuestion || state.dilemmaType || "No registrado"}`,
    `Problema social: ${state.socialIssue || "No registrado"}`,
    "",
    "LINEA DE TIEMPO",
    timeline
  ].join("\n");
}

function cognitiveInterpretation(stats) {
  const reflections = [];
  if (stats.humanWeight >= 70) {
    reflections.push("Predomina la intervencion humana. La IA aparece como apoyo o contraste, no como sustitucion del proceso.");
  } else {
    reflections.push("Hay una presencia importante de asistencia de IA. Conviene revisar si el estudiante justifico que acepto, modifico o rechazo.");
  }
  if (stats.decisions + stats.decisionTags >= 3) {
    reflections.push("El proceso muestra varios momentos de decision, lo que permite reconstruir cambios de criterio.");
  } else {
    reflections.push("Aun hay pocos momentos de decision registrados. Para investigacion, convendria pedir mas justificaciones breves.");
  }
  if (String(state.rejectedAiSuggestion || "").trim()) {
    reflections.push("Existe evidencia de rechazo critico de una sugerencia de IA.");
  }
  if (String(state.humanModification || "").trim()) {
    reflections.push("Existe evidencia de modificacion humana posterior al contraste.");
  }
  return reflections;
}

function renderReadableReport() {
  const stats = traceStats();
  const coreStats = coreCompletionStats();
  const report = document.querySelector("#readableReport");
  const timeline = state._timeline.length
    ? state._timeline.map((event, index) => {
        const time = new Date(event.at).toLocaleString("es-MX", {
          day: "2-digit",
          month: "short",
          hour: "2-digit",
          minute: "2-digit"
        });
        return `<li><strong>${index + 1}. ${event.title}</strong><span>${time} - ${event.detail || event.type}</span></li>`;
      }).join("")
    : "<li><strong>Sin eventos registrados</strong><span>El reporte crecera cuando el estudiante escriba, contraste o tome decisiones.</span></li>";

  const interpretation = cognitiveInterpretation(stats).map((item) => `<li>${item}</li>`).join("");
  const tagSummary = Object.entries(state._cognitiveTags || {}).map(([stepId, tag]) => {
    const step = steps.find((item) => item.id === stepId);
    return `<li><strong>${step?.title || stepId}</strong><span>${tag.aiFunction}; ${tag.humanIntervention}; ${tag.cognitiveValue}; ${tag.decisionMoment}</span></li>`;
  }).join("") || "<li><strong>Sin etiquetas aun</strong><span>Las etiquetas apareceran al avanzar por los pasos.</span></li>";

  report.innerHTML = `
    <section>
      <h4>Contexto</h4>
      <dl>
        <dt>Participante</dt><dd>${compact(state.studentName, "No registrado")}</dd>
        <dt>Grupo</dt><dd>${compact(state.groupName, "No registrado")}</dd>
        <dt>Actividad</dt><dd>${compact(state.activityName, "No registrada")}</dd>
        <dt>Docente</dt><dd>${compact(state.teacherName, "No registrada")}</dd>
      </dl>
    </section>
    <section>
      <h4>Perfil cognitivo</h4>
      <div class="report-metrics">
        <div><span>Trabajo humano estimado</span><strong>${stats.humanWeight}%</strong></div>
        <div><span>Trabajo asistido por IA</span><strong>${stats.aiWeight}%</strong></div>
        <div><span>Tiempo invertido</span><strong>${stats.minutes} min</strong></div>
        <div><span>Iteraciones</span><strong>${stats.iterations}</strong></div>
        <div><span>Decisiones criticas</span><strong>${stats.decisions + stats.decisionTags}</strong></div>
        <div><span>Contrapuntos IA</span><strong>${state._meta.aiCounterpoints}</strong></div>
        <div><span>Campos clave</span><strong>${coreStats.filled}/${coreStats.total}</strong></div>
      </div>
    </section>
    <section>
      <h4>Lectura docente</h4>
      <ul>${interpretation}</ul>
    </section>
    <section>
      <h4>Experiencia del estudiante</h4>
      <dl>
        <dt>Pregunta mas util</dt><dd>${compact(state.mostHelpfulQuestion, "No registrada")}</dd>
        <dt>Momento de cambio</dt><dd>${compact(state.ideaShiftMoment, "No registrado")}</dd>
        <dt>El reporte representa su proceso</dt><dd>${compact(state.reportSelfView, "No registrado")}</dd>
        <dt>Que reduciria</dt><dd>${compact(state.whatToRemove, "No registrado")}</dd>
      </dl>
    </section>
    <section>
      <h4>Contraste humano/IA</h4>
      <dl>
        <dt>Modificacion humana</dt><dd>${compact(state.humanModification, "No registrada")}</dd>
        <dt>Sugerencia rechazada</dt><dd>${compact(state.rejectedAiSuggestion, "No registrada")}</dd>
        <dt>Criterio de rechazo</dt><dd>${compact(state.rejectionReason, "No registrado")}</dd>
      </dl>
    </section>
    <section>
      <h4>Recorrido global</h4>
      <dl>
        <dt>Sistema</dt><dd>${compact(state.worldName, "No registrado")}</dd>
        <dt>Conflicto</dt><dd>${compact(state.centralConflict, "No registrado")}</dd>
        <dt>Dilema</dt><dd>${compact(state.ethicalQuestion || state.dilemmaType, "No registrado")}</dd>
        <dt>Persona producida</dt><dd>${compact(state.requiredHuman, "No registrada")}</dd>
        <dt>Artefacto</dt><dd>${compact(state.objectName, "No registrado")}</dd>
        <dt>Materialidad</dt><dd>${compact(state.scale || state.materials || state.materiality, "No registrada")}</dd>
        <dt>Etica</dt><dd>${compact(state.socialIssue || state.ethicalPosition, "No registrada")}</dd>
      </dl>
    </section>
    <section>
      <h4>Etiquetas cognitivas</h4>
      <ul class="report-list">${tagSummary}</ul>
    </section>
    <section>
      <h4>Linea de tiempo</h4>
      <ol class="report-timeline">${timeline}</ol>
    </section>
  `;
}

function showEvidence() {
  const panel = document.querySelector("#evidencePanel");
  const text = document.querySelector("#evidenceText");
  panel.hidden = !panel.hidden;
  renderReadableReport();
  text.value = buildEvidence();
}

async function copyEvidence() {
  const text = document.querySelector("#evidenceText");
  const status = document.querySelector("#copyStatus");
  text.value = buildEvidence();
  text.select();
  try {
    await navigator.clipboard.writeText(text.value);
    status.textContent = "Evidencia copiada.";
  } catch {
    document.execCommand("copy");
    status.textContent = "Evidencia seleccionada para copiar.";
  }
}

async function copyReadableReport() {
  const status = document.querySelector("#copyStatus");
  try {
    await navigator.clipboard.writeText(buildReadableReportText());
    status.textContent = "Reporte legible copiado.";
  } catch {
    status.textContent = "No se pudo copiar el texto automaticamente.";
  }
}

prevBtn.addEventListener("click", () => {
  current = Math.max(0, current - 1);
  save();
  render();
});

nextBtn.addEventListener("click", () => {
  if (current < steps.length - 1) {
    current += 1;
    save();
    render();
  } else {
    window.print();
  }
});

aiBtn.addEventListener("click", generateCounterpoint);
document.querySelector("#sampleBtn").addEventListener("click", loadSampleLab);
document.querySelector("#printBtn").addEventListener("click", () => window.print());
document.querySelector("#evidenceBtn").addEventListener("click", showEvidence);
document.querySelector("#copyReadableBtn").addEventListener("click", copyReadableReport);
document.querySelector("#copyEvidenceBtn").addEventListener("click", copyEvidence);
pilotModeToggle.addEventListener("change", () => {
  pilotMode = pilotModeToggle.checked;
  localStorage.setItem("futureArtifactPilotMode", String(pilotMode));
  render();
});
document.querySelector("#resetBtn").addEventListener("click", () => {
  if (!confirm("Esto borrara el laboratorio guardado en este navegador.")) return;
  localStorage.removeItem("futureArtifactLab");
  localStorage.removeItem("futureArtifactStep");
  localStorage.removeItem("futureArtifactPilotMode");
  Object.keys(state).forEach((key) => delete state[key]);
  current = 0;
  pilotMode = false;
  ensureTrace();
  render();
});

render();
