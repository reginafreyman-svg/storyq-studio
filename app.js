const methodsSteps = [
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

const sharedContextFields = [
  ["studentName", "Nombre del estudiante o equipo", "input", "Ej. Equipo 4 / Ana y Luis"],
  ["groupName", "Grupo", "input", "Ej. Creative Writing — Grupo 301"],
  ["activityName", "Actividad o proyecto", "input", "Ej. Feria de los Oráculos"],
  ["teacherName", "Docente", "input", "Ej. Regina Freyman"],
  ["sessionDate", "Fecha", "input", "Ej. 17 de junio de 2026"],
  ["projectId", "Clave del proyecto", "input", "Ej. CW-301-E04. Usa la misma clave en todas las evidencias."]
];

const writingSteps = [
  { id: "context", kicker: "Contexto", title: "Datos del proyecto", purpose: "Identifica la obra y conserva una clave estable para reunir borradores, pruebas y publicación. La carga horaria se registra como contexto, pero ambos grupos siguen la misma dinámica.", fields: [
    ...sharedContextFields,
    ["weeklyHours", "Horas semanales del grupo", "select", "3 horas|6 horas|Otra carga"],
    ["teachingRole", "Participación docente", "select", "Docente titular|Docencia colaborativa"],
    ["coTeacher", "Maestra acompañante", "input", "Nombre, si corresponde"],
    ["teamRoles", "Integrantes y responsabilidades iniciales", "textarea", "Quién escribe, investiga, diseña, prueba o documenta. Los roles pueden cambiar."]
  ] },
  { id: "genre", kicker: "Oráculo · fundamento", title: "¿De qué tradición narrativa nace el oráculo?", purpose: "Elige la tradición literaria que alimentará sus textos y decide cómo se transformará en una experiencia contemporánea.", fields: [
    ["classicGenre", "Género de partida", "select", "Cuento|Novela|Poesía|Drama|Ensayo|Epístola|Mito o leyenda|Otro"],
    ["genreModel", "Autor, obra o tradición de referencia", "textarea", "Puede provenir del curso, del kit de paper dolls o de otra lectura pertinente."],
    ["classicConvention", "Convención que reconoces", "textarea", "¿Cómo organiza este género la voz, el tiempo, la extensión, el conflicto o la relación con quien lee?"],
    ["formatGenealogy", "Transformación que explorarás", "select", "Cuento → serie antológica|Novela → serie audiovisual|Epístola → correo, chat o blog|Poesía → performance, audio o red social|Drama → video, podcast o experiencia interactiva|Mito → universo transmedia|Ensayo → hipertexto o libro enriquecido|Otra genealogía"],
    ["newFormat", "Formato contemporáneo", "select", "Libro impreso|Serie o episodio|Serie antológica|Correo o blog|Podcast|Cómic|Video breve|Red social|Hipertexto|Experiencia interactiva|Otro"],
    ["transformationRule", "Qué permanece y qué se transforma", "textarea", "Nombra al menos un rasgo que conservarás y uno que cambiará al pasar al nuevo medio."],
    ["hybridGenre", "Cruce o género híbrido resultante", "textarea", "Ej. cuento + archivo; poesía + juego; epístola + blog."],
    ["mediumReason", "Por qué este medio", "textarea", "¿Qué experiencia narrativa permite que el formato anterior no permitía?"]
  ]},
  { id: "observation", kicker: "Oráculo · mundo", title: "¿Qué realidad documenta el oráculo?", purpose: "Reúne el material humano y sensible del que surgirán sus símbolos, preguntas y textos. Practica la documentación SlowU: detente, atiende y registra antes de explicar.", fields: [
    ["observationSource", "Escena o realidad observada", "textarea", "Lugar, situación, persona, objeto u obra. Registra fecha, duración y condiciones de observación."],
    ["sensoryInventory", "Inventario sensorial", "textarea", "Anota detalles concretos: espacio, cuerpos, gestos, objetos, ritmos, voces, sonidos, olores, temperaturas y silencios."],
    ["thickDescription", "Descripción densa", "textarea", "Construye una escena situada: relaciona detalles, contexto, acciones y contradicciones sin convertir todavía el registro en ficción."],
    ["factInference", "Registro e interpretación", "textarea", "Separa dos columnas: ¿qué observaste o escuchaste realmente?, ¿qué estás suponiendo o interpretando?"],
    ["activeListening", "Huella de escucha activa", "textarea", "Conserva una frase, pausa, pregunta o cambio de perspectiva. No incluyas datos personales innecesarios."],
    ["researchNotes", "Preguntas e investigación", "textarea", "¿Qué necesitas verificar? Añade conceptos, obras, autores o fuentes que amplíen la observación."],
    ["identityPosition", "Tu identidad frente a la escena", "textarea", "¿Qué experiencias, pertenencias o límites influyen en tu manera de mirar?"],
    ["othernessPosition", "Otredad, prejuicio y cuidado", "textarea", "¿Qué prejuicio reconoces? ¿Qué no te pertenece contar? ¿Qué autorización, anonimato o distancia requiere la escritura?"],
    ["selectionReason", "Qué conservarás para escribir", "textarea", "Elige detalles significativos y explica por qué; señala también qué dejarás fuera por ahora."],
    ["sourceLinks", "Evidencias del cuaderno de campo", "textarea", "Páginas, notas, fotografías, audios, archivos o enlaces. Indica fecha y versión."]
  ]},
  { id: "design", kicker: "Oráculo · voz", title: "¿Quién habla y cómo organiza sus revelaciones?", purpose: "Define la voz, la focalización, el conflicto y la estructura que sostendrán las respuestas del oráculo.", fields: [
    ["narrativeVoice", "Voz narrativa", "select", "Primera persona protagonista|Primera persona testigo|Segunda persona|Tercera limitada|Tercera omnisciente|Voces múltiples|Voz no humana"],
    ["focalization", "Quién percibe, sabe y calla", "textarea", "Diferencia quién cuenta de la conciencia que filtra la escena. ¿Qué información queda fuera de su alcance?"],
    ["narratorDistance", "Distancia y confiabilidad", "textarea", "¿La voz está cerca o lejos de lo narrado? ¿Debemos creerle por completo? Incluye una contradicción o punto ciego."],
    ["voiceExperiment", "Prueba breve de voces", "textarea", "Narra el mismo acontecimiento en dos voces. Puedes usar dos cartas de la Caja de cuentos. Conserva la versión que descartes."],
    ["voiceDecision", "Voz elegida y criterio", "textarea", "¿Cuál produce el efecto buscado y por qué?"],
    ["storyStructure", "Organización de la historia", "select", "Lineal|Circular|Fragmentaria|Marco narrativo|Camino heroico|Camino de la heroína|Estructura coral|Ramificada o hipertextual|Otra"],
    ["structureEvidence", "Estaciones o movimientos principales", "textarea", "Enumera de 4 a 8 movimientos. Si usaste Jenga, registra las piezas obtenidas y cómo reorganizaste el recorrido."],
    ["timeOrder", "Orden y duración", "textarea", "¿Dónde comienza el relato? ¿Qué resume, repite, anticipa u omite?"],
    ["narrativeConflict", "Deseo, obstáculo y riesgo", "textarea", "¿Qué quiere alguien, qué o quién se lo impide y qué puede perder?"],
    ["turningPoint", "Incidente y punto de giro", "textarea", "¿Qué rompe el equilibrio? Puedes usar Story Dice y justificar qué elemento conservaste o transformaste."],
    ["writingConstraint", "Regla de escritura", "textarea", "Una restricción fértil: cinco escenas, narrador contradictorio, texto sin adjetivos, orden inverso u otra."]
  ]},
  { id: "draft", kicker: "Oráculo · corpus", title: "Primer corpus escrito por el equipo", purpose: "Escribe las primeras respuestas, fragmentos o revelaciones sin asistencia automática. Esta versión conserva el origen humano del oráculo.", fields: [
    ["corpusUnit", "Unidad mínima del oráculo", "textarea", "Define qué contiene cada pieza: símbolo, título, fragmento, pregunta, instrucción, presagio, consejo, acción u otra combinación."],
    ["corpusPlan", "Familias de respuestas", "textarea", "Diseña de 3 a 5 familias para evitar repeticiones. Ej. memoria, pérdida, deseo, elección y transformación."],
    ["humanDraft", "Corpus humano inicial", "textarea", "Escribe entre 8 y 12 unidades breves para poder combinarlas y hacer una primera prueba."],
    ["corpusVariation", "Variedad y coherencia", "textarea", "Señala qué unidades consuelan, inquietan, contradicen, abren preguntas o invitan a actuar. ¿Qué voz las mantiene unidas?"],
    ["draftIntent", "Efecto buscado en quien consulta", "textarea", "¿Qué quieres hacer sentir, pensar, recordar o cuestionar?"],
    ["initialChoices", "Tres decisiones de escritura", "textarea", "Nombra elecciones de voz, imagen, ritmo, extensión, ambigüedad o silencio y explica su función."],
    ["discardedFragment", "Una pieza descartada o reescrita", "textarea", "Conserva el antes y el después; explica por qué la primera versión no servía al oráculo."],
    ["draftEvidence", "Evidencia de la primera versión", "textarea", "Enlace, archivo, fotografía o versión con fecha."]
  ]},
  { id: "oracle", kicker: "Oráculo · interacción", title: "¿Cómo se consulta e interpreta?", purpose: "Convierte el corpus en una experiencia de lectura e interpretación para la Feria de los Oráculos.", fields: [
    ["oracleName", "Nombre del oráculo", "input", "Ej. Oráculo de las Voces Perdidas"],
    ["oraclePromise", "Promesa de la experiencia", "textarea", "Completa: «Este oráculo no predice el futuro; ayuda a…». Define su alcance y evita afirmaciones engañosas."],
    ["oracleMechanism", "Mecanismo de consulta", "select", "Cartas o tarot|Story Dice|Paper dolls y personajes|Aromas u objetos sensoriales|Bloques o Jenga|Libro o caja de cuentos|Recorrido espacial|Hipertexto o pantalla|Sistema híbrido|Otro"],
    ["oracleSymbolSystem", "Sistema de símbolos y correspondencias", "textarea", "¿Qué significa cada familia de cartas, dados, personajes, aromas, objetos o caminos?"],
    ["oracleQuestion", "Entrada de quien consulta", "textarea", "¿Formula una pregunta, elige un tema, cuenta una situación o entrega una palabra? Incluye una alternativa para quien no quiera compartir algo personal."],
    ["chanceRule", "Azar, elección y combinación", "textarea", "¿Qué elige la persona?, ¿qué se sortea?, ¿cuántas piezas aparecen y en qué orden se relacionan?"],
    ["interpretationGrammar", "Gramática de interpretación", "textarea", "Escribe reglas que permitan combinar símbolo, texto y contexto sin dar respuestas genéricas ni dictar decisiones."],
    ["oracleProcedure", "Guion completo de la consulta", "textarea", "Describe en 5 a 7 acciones: bienvenida, pregunta, selección, lectura, diálogo, entrega o registro y cierre."],
    ["mediatorRole", "Papel del mediador o la mediadora", "textarea", "¿Qué puede preguntar, interpretar o explicar? ¿Qué debe evitar?"],
    ["oracleText", "Corpus vinculado al mecanismo", "textarea", "Indica cómo se distribuyen las unidades escritas entre las piezas y qué combinaciones son posibles."],
    ["careProtocol", "Cuidado y límites", "textarea", "Cómo se protege la privacidad, se evita diagnosticar o sentenciar y se permite detener la experiencia."],
    ["oraclePrototype", "Prototipo mínimo para probar", "textarea", "Materiales y versión reducida que permita realizar al menos tres consultas."]
  ]},
  { id: "media", kicker: "Oráculo · cuerpo", title: "¿En qué soporte existe?", purpose: "Decide cómo la materialidad impresa, electrónica o híbrida modifica la consulta y el sentido del oráculo.", fields: [
    ["publicationMedium", "Forma principal", "select", "Mazo de cartas|Libro o cuadernillo|Caja u objeto editorial|Dados y tablero|Instalación sensorial|Blog o red social|Twine o hipertexto|Podcast o audio|Video|Libro enriquecido|Instalación híbrida|Otra"],
    ["physicalComponents", "Piezas del oráculo", "textarea", "Enumera cartas, dados, figuras, recipientes, textiles, aromas, instructivo, registro, pantalla u otros componentes."],
    ["materialDecisions", "Materialidad impresa y relación con el cuerpo", "textarea", "Tamaño, papel, textura, encuadernación, tipografía, color, manipulación, distancia de lectura y forma de guardarlo."],
    ["digitalDecisions", "Capa electrónica, si existe", "textarea", "Navegación, enlaces, sonido, interacción, dispositivo y funcionamiento sin conexión. Si no se usa, explica por qué."],
    ["fairStation", "Estación para la feria", "textarea", "Espacio requerido, mesa o recorrido, iluminación, sonido, asientos, señalización, duración y número de personas por consulta."],
    ["accessibility", "Accesibilidad y alternativas", "textarea", "Lectura clara, contraste, volumen, subtítulos, descripción, manipulación, idioma y opción no sensorial o no digital."],
    ["takeaway", "Huella que conserva quien consulta", "textarea", "Tarjeta, fragmento, fotografía, audio, enlace, marca en una bitácora o solo una experiencia efímera. Justifica."],
    ["platformMeaning", "Qué aporta el soporte al sentido", "textarea", "¿Qué sería imposible o diferente si el mismo corpus apareciera en otro medio?"],
    ["productionPlan", "Plan mínimo de producción", "textarea", "Materiales disponibles, responsables, costos aproximados, tiempo de montaje y prueba técnica."],
    ["publicationLink", "Evidencia del prototipo", "textarea", "Fotografías, video, plano, archivo, URL, QR o versión con fecha."]
  ]},
  { id: "ai", kicker: "Oráculo · contrapunto", title: "¿Qué aporta o amenaza la IA?", purpose: "Si se utiliza IA, documenta una intervención concreta en el oráculo: qué pediste, qué obtuviste y qué decisión humana tomaste.", fields: [
    ["aiPurpose", "Para qué se usó IA", "select", "No se usó|Explorar opciones|Contrastar una decisión|Editar estilo|Investigar|Generar imagen o audio|Programar interacción|Otro"],
    ["noAiReason", "Si no se usó, ¿por qué?", "textarea", "La decisión puede ser estética, ética, pedagógica, técnica o de privacidad. No usar IA no reduce el valor del proyecto."],
    ["aiToolVersion", "Herramienta y versión aproximada", "input", "Ej. ChatGPT, modelo y fecha; Canva; generador de audio; asistente de código."],
    ["aiInputBoundary", "Qué información recibió y qué quedó fuera", "textarea", "No incluyas datos personales de quienes fueron observados o consultaron el oráculo."],
    ["aiPrompt", "Instrucción utilizada", "textarea", "Copia la instrucción relevante y señala su versión."],
    ["aiOutput", "Resultado recibido", "textarea", "Conserva el fragmento necesario para entender la decisión."],
    ["aiComparison", "Lectura crítica", "textarea", "¿Qué simplifica, repite, inventa o vuelve predecible?"],
    ["humanModification", "Transformación humana", "textarea", "¿Qué cambiaste y con qué criterio?"],
    ["rejectedAiSuggestion", "Sugerencia rechazada", "textarea", "¿Qué decidiste no usar?"],
    ["rejectionReason", "Razón del rechazo", "textarea", "Criterio narrativo, ético, factual o estético."],
    ["verificationMethod", "Verificación", "textarea", "¿Qué dato, referencia, cita, imagen o funcionamiento necesitaba comprobarse y cómo se comprobó?"],
    ["aiFinalUse", "Qué permanece en la versión final", "textarea", "Señala con precisión el fragmento, imagen, código o idea asistida que conserva el oráculo."],
    ["aiObject", "Contrapunto conservado", "textarea", "Solo si ayuda a comparar versiones."]
  ], ai: true },
  { id: "testing", kicker: "Oráculo · prueba", title: "¿Cómo responde quien consulta?", purpose: "Prueba el oráculo con otras personas y registra interpretaciones, confusiones y hallazgos, no solo aprobación.", fields: [
    ["testQuestion", "Qué necesitas descubrir", "textarea", "Formula una pregunta de prueba: claridad de las reglas, riqueza de interpretación, ritmo, accesibilidad, cuidado u otra."],
    ["testProtocol", "Protocolo de tres consultas", "textarea", "Usa el mismo inicio y cierre; cambia las combinaciones. Registra duración, dudas, decisiones y momentos significativos."],
    ["testAudience", "Quiénes probaron el oráculo", "textarea", "Número y perfiles generales. Evita datos personales innecesarios y aclara que es una experiencia literaria."],
    ["testObservations", "Qué hicieron, dijeron o interpretaron", "textarea", "Registra acciones y frases breves antes de explicar lo que crees que significan. Incluye silencios y recorridos inesperados."],
    ["testCriteria", "Lectura de la prueba", "textarea", "Valora: comprensión, participación, potencia narrativa, posibilidad de interpretación, duración, materialidad y accesibilidad."],
    ["unexpectedReading", "Interpretación inesperada", "textarea", "¿Qué lectura no había previsto el equipo? ¿Revela riqueza, ambigüedad productiva o un problema?"],
    ["biasReview", "Prejuicios, exclusiones o riesgos detectados", "textarea", "¿A quién representa, expone, diagnostica, caricaturiza o deja fuera? ¿Alguna respuesta parece sentencia?"],
    ["revisionDecision", "Decisión de revisión", "textarea", "Indica qué cambiarás, qué conservarás y qué nueva prueba necesitas. Justifica cada decisión."],
    ["versionEvidence", "Antes, después y evidencia", "textarea", "Enlaces, fotografías o archivos de ambas versiones, con fecha. No publiques rostros o testimonios sin autorización."]
  ]},
  { id: "final", kicker: "Oráculo · encuentro", title: "Presentación en la Feria de los Oráculos", purpose: "Reúne la experiencia final, su montaje público y la reflexión del equipo. La antología conserva una pieza literaria derivada del oráculo.", fields: [
    ["finalTitle", "Título final", "input", "Título de la pieza o experiencia."],
    ["finalSynopsis", "Texto de entrada para el público", "textarea", "En 50 a 80 palabras: qué encontrará, cómo participa y qué clase de experiencia es. No reveles toda la interpretación."],
    ["fairPlan", "Recorrido de la estación", "textarea", "Llegada, espera, bienvenida, consulta, interpretación, cierre y salida. Incluye duración y capacidad."],
    ["mediationScript", "Guion breve de mediación", "textarea", "Escribe la bienvenida, dos preguntas abiertas, el recordatorio de límites y la frase de cierre."],
    ["fairRole", "Turnos y responsabilidades", "textarea", "Quién monta, recibe, media, repone materiales, cuida el espacio, documenta y desmonta."],
    ["fairChecklist", "Lista de apertura", "textarea", "Oráculo completo, instructivo, señalización, accesibilidad, materiales de reposición, pruebas técnicas y plan alternativo."],
    ["fairEvidence", "Documentación de la feria", "textarea", "Fotografías del montaje, número aproximado de consultas, observaciones, incidencias y enlaces. Protege la identidad del público."],
    ["publicLearning", "Qué reveló el encuentro público", "textarea", "Una lectura inesperada, una dificultad y una decisión que tomarías para la siguiente versión."],
    ["anthologyPiece", "Memoria literaria para la antología", "textarea", "Selecciona o adapta una pieza nacida del oráculo; no es un proyecto diferente. Incluye el texto final o su enlace."],
    ["anthologyContext", "Nota para la antología", "textarea", "En 80 a 120 palabras, explica de qué oráculo nació la pieza y cómo funcionó en la feria."],
    ["authorshipStatement", "Declaración de autoría y tecnologías", "textarea", "Aportes propios, colaboración, fuentes y herramientas empleadas."],
    ["ideaShiftMoment", "Cómo cambió la obra", "textarea", "El giro más importante y la evidencia que lo demuestra."],
    ["finalDelivery", "Carpeta o entrega final", "textarea", "Enlace a corpus, instrucciones, registro de versiones, evidencias de prueba, fotografías autorizadas y pieza de antología."],
    ["reportSelfView", "El reporte representa tu proceso", "select", "Sí|Parcialmente|No|No estoy seguro/a"]
  ]}
];

const writingStepsEnglish = [
  {
    id: "context",
    kicker: "Overview",
    title: "Project Identity",
    purpose: "Create an independent project record for the Oracle Fair. The weekly schedule is context only; both groups follow the same creative process.",
    fields: [
      ["studentName", "Student or team name", "input", "Names of the project authors"],
      ["groupName", "Course group", "input", "Creative Writing — group"],
      ["weeklyHours", "Weekly class time", "select", "3 hours|6 hours|Other"],
      ["teachingRole", "Teaching context", "select", "Lead instructor|Collaborative teaching"],
      ["coTeacher", "Accompanying teacher", "input", "Name, when applicable"],
      ["projectId", "Project code", "input", "Example: CW-301-T04"],
      ["oracleName", "Oracle name", "input", "A distinctive working title"],
      ["teamRoles", "Team members and responsibilities", "textarea", "Writing, research, design, testing, documentation and mediation."]
    ]
  },
  {
    id: "genre",
    kicker: "Module 1 · Literary roots",
    title: "Literary Roots, Genres & Transformation",
    purpose: "Ground the oracle in literary tradition, then transform that tradition into a hybrid or emerging form.",
    fields: [
      ["classicGenre", "Classic genre of departure", "select", "Short story|Novel|Poetry|Drama|Essay|Epistle|Myth or legend|Other"],
      ["genreModel", "Author, work or tradition", "textarea", "Identify the literary reference and the feature you want to understand."],
      ["classicConvention", "Genre conventions", "textarea", "Voice, time, length, conflict, rhythm and reader relationship."],
      ["formatGenealogy", "Transformation pathway", "select", "Short story → anthology series|Novel → audiovisual series|Epistle → email, chat or blog|Poetry → performance, audio or social media|Drama → podcast or interactive experience|Myth → transmedia world|Essay → hypertext or enriched book|Other"],
      ["newFormat", "Contemporary form", "select", "Printed book|Series episode|Anthology episode|Email or blog|Podcast|Comic|Short video|Social network|Hypertext|Interactive experience|Other"],
      ["transformationRule", "What remains and what changes?", "textarea", "Preserve one meaningful convention and transform another."],
      ["hybridGenre", "Resulting hybrid genre", "textarea", "Example: short story + archive; poetry + game; epistle + blog."],
      ["mediumReason", "Why this medium?", "textarea", "What narrative experience becomes possible in this form?"]
    ]
  },
  {
    id: "observation",
    kicker: "Module 2 · Documentation",
    title: "Observation, Listening & Otherness",
    purpose: "Use SlowU documentation: pause, attend and record before interpreting. Build the human material of the oracle ethically.",
    fields: [
      ["observationSource", "Observed reality", "textarea", "Scene, person, place, object or artwork; include date and conditions."],
      ["sensoryInventory", "Sensory inventory", "textarea", "Space, bodies, gestures, objects, voices, sounds, smells, temperature and silence."],
      ["thickDescription", "Thick description", "textarea", "Write a situated record connecting details, context, actions and contradictions."],
      ["factInference", "Observation vs. inference", "textarea", "Separate what you actually observed from what you assume or interpret."],
      ["activeListening", "Active-listening trace", "textarea", "Record a phrase, pause, question or shift in perspective without unnecessary personal data."],
      ["researchNotes", "Research questions and sources", "textarea", "What must be verified or expanded?"],
      ["identityPosition", "Your position in the scene", "textarea", "How do your identity, experience and limits shape your gaze?"],
      ["othernessPosition", "Otherness, prejudice and care", "textarea", "What bias do you recognize? What is not yours to tell? What requires consent or anonymity?"],
      ["sourceLinks", "Field-note evidence", "textarea", "Notebook pages, files, photographs or links with dates."]
    ]
  },
  {
    id: "world",
    kicker: "Module 3 · Oracle world",
    title: "Oracle World & Ethical Boundaries",
    purpose: "Translate historical research and observation into a coherent symbolic world without presenting the oracle as diagnosis or prediction.",
    fields: [
      ["historicalOracle", "Historical oracle or divination practice", "textarea", "Primary sources, myths, rituals, symbols and social function."],
      ["worldName", "Oracle world or designation", "input", "Name of the symbolic world"],
      ["worldDescription", "Origin story", "textarea", "How and why does this oracle exist?"],
      ["sacredSpace", "Sacred or consultation space", "textarea", "Physical, digital or hybrid environment."],
      ["oracleSymbolSystem", "Symbolic system", "textarea", "Families of symbols and their correspondences."],
      ["systemRules", "System rules", "textarea", "What can and cannot happen during a consultation?"],
      ["oraclePromise", "Ethical promise", "textarea", "Complete: This oracle does not predict the future; it helps people to…"],
      ["careProtocol", "Boundaries and care", "textarea", "Privacy, agency, accessibility and the right to stop."]
    ]
  },
  {
    id: "logic",
    kicker: "Module 4 · Narrative system",
    title: "Voice, Structure & Oracle Grammar",
    purpose: "Design the narrative pathway that turns a stimulus into a literary response.",
    fields: [
      ["narrativeVoice", "Narrative voice", "select", "First-person protagonist|First-person witness|Second person|Limited third person|Omniscient third person|Multiple voices|Non-human voice"],
      ["focalization", "Who perceives, knows and remains silent?", "textarea", "Distinguish narrator from focal consciousness."],
      ["voiceExperiment", "Two-voice experiment", "textarea", "Write the same event in two voices and preserve the rejected version."],
      ["voiceDecision", "Selected voice and criterion", "textarea", "Why does it create the intended effect?"],
      ["storyStructure", "Narrative structure", "select", "Linear|Circular|Fragmentary|Frame narrative|Heroic journey|Heroine's journey|Choral|Branching hypertext|Other"],
      ["narrativeConflict", "Desire, obstacle and risk", "textarea", "What is wanted, what prevents it and what may be lost?"],
      ["chanceRule", "Choice, chance and combination", "textarea", "What does the visitor choose, what is drawn and how are pieces combined?"],
      ["interpretationGrammar", "Interpretation grammar", "textarea", "Rules connecting stimulus, symbol, context and literary response without prescribing decisions."],
      ["oracleProcedure", "Consultation sequence", "textarea", "Welcome, question, selection, reading, dialogue, trace and closure."]
    ]
  },
  {
    id: "corpus",
    kicker: "Module 5 · Human first",
    title: "Human Corpus",
    purpose: "Write the oracle's first literary corpus before using any generative system.",
    fields: [
      ["corpusUnit", "Minimum oracle unit", "textarea", "Symbol, title, fragment, question, instruction, prophecy or action."],
      ["corpusPlan", "Response families", "textarea", "Create three to five families that prevent repetition."],
      ["humanDraft", "Initial human corpus", "textarea", "Write eight to twelve short units for the first test."],
      ["corpusVariation", "Variety and coherence", "textarea", "Which units comfort, disturb, contradict, question or invite action?"],
      ["draftIntent", "Intended reader experience", "textarea", "What should the consultation make someone feel, notice or reconsider?"],
      ["initialChoices", "Three writing decisions", "textarea", "Voice, image, rhythm, length, ambiguity or silence."],
      ["discardedFragment", "Discarded or rewritten unit", "textarea", "Keep before and after; explain the revision."],
      ["draftEvidence", "Dated first version", "textarea", "File, photograph or link."]
    ]
  },
  {
    id: "ai",
    kicker: "Module 6 · Optional counterpoint",
    title: "AI Counterpoint — Optional",
    purpose: "Not using AI is a valid decision. If AI is used, document one specific intervention and the human decision that followed.",
    fields: [
      ["aiPurpose", "Purpose of AI use", "select", "Not used|Explore options|Challenge a decision|Style editing|Research|Image or audio|Interactive code|Other"],
      ["noAiReason", "Reason for not using AI", "textarea", "Aesthetic, ethical, pedagogical, technical or privacy-based."],
      ["aiToolVersion", "Tool, version and date", "input", "Record the approximate system used."],
      ["aiInputBoundary", "Data provided and protected", "textarea", "Do not enter personal observation or consultation data."],
      ["aiPrompt", "Relevant instruction", "textarea", "Preserve the exact version used."],
      ["aiOutput", "Relevant output", "textarea", "Keep only what is necessary to understand the decision."],
      ["aiComparison", "Critical reading", "textarea", "What did it simplify, repeat, fabricate or make predictable?"],
      ["humanModification", "Human transformation", "textarea", "What changed and according to which narrative or ethical criterion?"],
      ["rejectedAiSuggestion", "Rejected suggestion", "textarea", "What was deliberately excluded?"],
      ["rejectionReason", "Reason for rejection", "textarea", "Narrative, factual, ethical or aesthetic criterion."],
      ["verificationMethod", "Verification", "textarea", "How were facts, references, images or functionality checked?"],
      ["aiFinalUse", "What remains in the final oracle", "textarea", "Identify the assisted element precisely."]
    ],
    ai: true
  },
  {
    id: "archive",
    kicker: "Module 7 · Process evidence",
    title: "Process Archive & Cognitive Trace",
    purpose: "Preserve literary outputs and reconstruct decisions without reducing authorship to a percentage.",
    fields: [
      ["oracleText", "Current oracle corpus", "textarea", "Microfiction, poetry, dialogue, ethical warning, future narrative or hybrid units."],
      ["archiveTags", "Genre and theme tags", "textarea", "Track variety across the corpus."],
      ["initialHypothesis", "What did we imagine initially?", "textarea", "Human starting point."],
      ["aiObject", "What did AI suggest?", "textarea", "Only when AI was used."],
      ["criticalDecision", "What did we reject or preserve?", "textarea", "Name the decisive choice."],
      ["humanModification", "What did we transform?", "textarea", "Show before and after."],
      ["authorshipStatement", "What remains distinctly ours?", "textarea", "Team contributions, sources, tools and responsibilities."],
      ["versionEvidence", "Version evidence", "textarea", "Dated files, images or links."]
    ]
  },
  {
    id: "fair",
    kicker: "Module 8 · Public encounter",
    title: "Prototype, Testing & Oracle Fair",
    purpose: "Test the oracle before the fair, revise it from evidence and design an accessible public encounter.",
    fields: [
      ["oracleMechanism", "Consultation mechanism", "select", "Cards or tarot|Story Dice|Paper dolls|Scents or sensory objects|Blocks or Jenga|Story box|Spatial path|Hypertext or screen|Hybrid|Other"],
      ["publicationMedium", "Physical or electronic form", "select", "Card deck|Booklet|Editorial object|Dice and board|Sensory installation|Blog or social network|Twine or hypertext|Podcast or audio|Video|Enriched book|Hybrid installation|Other"],
      ["physicalComponents", "Components and materiality", "textarea", "Scale, paper, texture, typography, sound, objects and storage."],
      ["fairStation", "Fair station", "textarea", "Space, lighting, acoustics, seating, signage, duration and capacity."],
      ["accessibility", "Accessibility alternatives", "textarea", "Contrast, legibility, captions, description, manipulation, language and non-sensory alternatives."],
      ["testProtocol", "Three-consultation test", "textarea", "Use the same opening and closure; record duration, questions and decisions."],
      ["testObservations", "Observed responses", "textarea", "Actions, phrases, silence, confusion and unexpected readings."],
      ["biasReview", "Biases, exclusions and risks", "textarea", "Does any response diagnose, sentence, caricature or expose someone?"],
      ["revisionDecision", "Revision decision", "textarea", "What changed, what remained and why?"],
      ["mediationScript", "Mediation script", "textarea", "Welcome, open questions, limits and closing phrase."],
      ["fairRole", "Team roles and setup list", "textarea", "Installation, welcome, mediation, documentation, care and dismantling."],
      ["fairEvidence", "Fair evidence", "textarea", "Dated photographs, observations and approximate number of consultations; protect visitor identity."]
    ]
  },
  {
    id: "final",
    kicker: "Module 9 · Publication and agency",
    title: "Anthology Booklet & Manifesto",
    purpose: "Publish one literary trace born from the oracle and defend the team's position on narrative agency and technology.",
    fields: [
      ["finalTitle", "Final title", "input", "Title of the oracle and public experience"],
      ["finalSynopsis", "Public introduction", "textarea", "In 50–80 words: what visitors encounter and how they participate."],
      ["anthologyPiece", "Anthology piece", "textarea", "Select or adapt one literary work born from the oracle; this is not a second project."],
      ["anthologyContext", "Booklet note", "textarea", "In 80–120 words, explain the oracle, genre transformation and fair context."],
      ["publicLearning", "What did the public encounter reveal?", "textarea", "One unexpected reading, one difficulty and one future revision."],
      ["manifestoValues", "What human values shaped the oracle?", "textarea", "Agency, responsibility, uncertainty, plurality and care."],
      ["manifestoAi", "What is the ethical role of AI?", "textarea", "Define its limits or explain why it was excluded."],
      ["authorshipStatement", "Human authorship statement", "textarea", "Contributions, collaborations, sources and technologies."],
      ["manifestoText", "Final manifesto", "textarea", "Defend the team's position on literary creation, interpretation and possible futures."],
      ["finalDelivery", "Final evidence folder", "textarea", "Corpus, instructions, versions, tests, authorized fair evidence and anthology piece."],
      ["reportSelfView", "Does this trace represent the process?", "select", "Yes|Partly|No|Not sure"]
    ]
  }
];

const routes = {
  methods: {
    title: "Laboratorio de Futuros",
    short: "Métodos Creativos",
    mark: "./assets/future-lab-mark.svg",
    markAlt: "Emblema de Métodos Creativos",
    tagline: "Historias que piensan. Futuros que elegimos.",
    previewTitle: "Ficha curatorial",
    labelType: "Objeto especulativo",
    ribbons: ["Crear sentido", "Transformar futuros", "Diseñar artefactos"],
    steps: methodsSteps,
    core: ["studentName", "groupName", "worldName", "centralConflict", "values", "dilemmaType", "ethicalQuestion", "humanObjectOne", "aiComparison", "humanModification", "rejectedAiSuggestion", "rejectionReason", "requiredHuman", "objectName", "scale", "materials", "fabrication", "assembly", "reveals", "socialIssue", "ethicalPosition", "curatorialText"],
    summaryLabels: ["Dilema", "Persona producida", "Problema social"]
  },
  writing: {
    title: "Oracle & Prophecy Design",
    short: "Creative Writing",
    mark: "./assets/oracle-prophecy-mark.svg",
    markAlt: "Oracle and Prophecy Design emblem",
    tagline: "Observe. Write. Design interpretation.",
    previewTitle: "Oracle Project Trace",
    labelType: "Literary oracle",
    ribbons: ["Ground the oracle", "Write the corpus", "Design the encounter"],
    steps: writingStepsEnglish,
    core: ["studentName", "groupName", "projectId", "classicGenre", "classicConvention", "formatGenealogy", "newFormat", "transformationRule", "mediumReason", "sensoryInventory", "thickDescription", "factInference", "activeListening", "identityPosition", "othernessPosition", "selectionReason", "narrativeVoice", "focalization", "voiceExperiment", "voiceDecision", "storyStructure", "structureEvidence", "narrativeConflict", "turningPoint", "writingConstraint", "corpusUnit", "corpusPlan", "humanDraft", "corpusVariation", "draftIntent", "discardedFragment", "oracleName", "oraclePromise", "oracleMechanism", "oracleSymbolSystem", "oracleQuestion", "chanceRule", "interpretationGrammar", "oracleProcedure", "mediatorRole", "oracleText", "careProtocol", "oraclePrototype", "publicationMedium", "physicalComponents", "materialDecisions", "fairStation", "accessibility", "takeaway", "platformMeaning", "productionPlan", "aiPurpose", "aiInputBoundary", "aiComparison", "humanModification", "rejectedAiSuggestion", "rejectionReason", "verificationMethod", "aiFinalUse", "testQuestion", "testProtocol", "testObservations", "testCriteria", "unexpectedReading", "biasReview", "revisionDecision", "versionEvidence", "finalTitle", "finalSynopsis", "fairPlan", "mediationScript", "fairRole", "fairEvidence", "publicLearning", "anthologyPiece", "anthologyContext", "authorshipStatement", "ideaShiftMoment", "finalDelivery"],
    summaryLabels: ["Genre & form", "Voice & structure", "Final oracle"]
  }
};

const interfaceCopy = {
  methods: {
    progress: (current, total) => `Paso ${current} de ${total}`,
    complete: (percent) => `${percent}% completo`,
    pilot: "Modo piloto: mostrar solo campos clave",
    pilotNote: "Recorrido reducido activo. Los campos de apoyo están ocultos, pero no se borran.",
    previous: "Anterior",
    next: "Siguiente",
    finish: "Finalizar y guardar PDF",
    counterpoint: "Generar contrapunto",
    report: "Ver reporte StoryQ",
    reset: "Limpiar laboratorio",
    journeyEyebrow: "Vista global",
    journeyTitle: "Recorrido del pensamiento",
    coreEyebrow: "Campos clave",
    coreTitle: "Base del reporte",
    traceEyebrow: "Trazabilidad",
    traceTitle: "Proceso de pensamiento",
    human: "Humano",
    ai: "IA",
    iterations: "Iteraciones"
  },
  writing: {
    progress: (current, total) => `Step ${current} of ${total}`,
    complete: (percent) => `${percent}% complete`,
    pilot: "Pilot mode: show core fields only",
    pilotNote: "Reduced route active. Supporting fields are hidden, not deleted.",
    previous: "Previous",
    next: "Next",
    finish: "Finish and save PDF",
    counterpoint: "Generate counterpoint",
    report: "View StoryQ report",
    reset: "Clear this project",
    journeyEyebrow: "Whole journey",
    journeyTitle: "Path of thought",
    coreEyebrow: "Core fields",
    coreTitle: "Report foundation",
    traceEyebrow: "Traceability",
    traceTitle: "Thinking process",
    human: "Human",
    ai: "AI",
    iterations: "Iterations"
  }
};

let activeRoute = localStorage.getItem("storyqActiveRoute") || "methods";
if (!routes[activeRoute]) activeRoute = "methods";
let steps = routes[activeRoute].steps;
const legacyMethods = JSON.parse(localStorage.getItem("futureArtifactLab") || "{}");
const routeStore = JSON.parse(localStorage.getItem("storyqRouteStore") || "{}");
if (!routeStore.methods && Object.keys(legacyMethods).length) routeStore.methods = legacyMethods;
let state = routeStore[activeRoute] || {};
let current = Number(localStorage.getItem(`storyqStep:${activeRoute}`) || (activeRoute === "methods" ? localStorage.getItem("futureArtifactStep") : 0) || 0);
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

Object.assign(stepGuidance, {
  genre: { time: "12 min", mode: "Relacionar", effort: "Tradición + medio" },
  observation: { time: "20 min", mode: "Documentar", effort: "Descripción densa" },
  design: { time: "15 min", mode: "Construir", effort: "Voz + estructura" },
  draft: { time: "25 min", mode: "Escribir", effort: "Humano primero" },
  oracle: { time: "20 min", mode: "Diseñar", effort: "Feria" },
  media: { time: "15 min", mode: "Publicar", effort: "Materialidad" },
  testing: { time: "15 min", mode: "Escuchar", effort: "Prueba + revisión" },
  final: { time: "15 min", mode: "Integrar", effort: "Feria + antología" },
  question: { time: "10 min", mode: "Enlazar", effort: "Pregunta común" },
  methodsLink: { time: "10 min", mode: "Recuperar", effort: "Métodos Creativos" },
  writingLink: { time: "10 min", mode: "Recuperar", effort: "Creative Writing" },
  bridge: { time: "15 min", mode: "Relacionar", effort: "Transferencia" },
  decisions: { time: "15 min", mode: "Documentar", effort: "Iteraciones" },
  public: { time: "12 min", mode: "Observar", effort: "Respuesta pública" },
  synthesis: { time: "15 min", mode: "Reflexionar", effort: "Aprendizaje integrado" }
});

let coreFields = new Set(routes[activeRoute].core);

let fieldLabels = Object.fromEntries(
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
  routeStore[activeRoute] = state;
  localStorage.setItem("storyqRouteStore", JSON.stringify(routeStore));
  localStorage.setItem(`storyqStep:${activeRoute}`, String(current));
  localStorage.setItem("storyqActiveRoute", activeRoute);
  if (activeRoute === "methods") {
    localStorage.setItem("futureArtifactLab", JSON.stringify(state));
    localStorage.setItem("futureArtifactStep", String(current));
  }
}

function switchRoute(routeId) {
  if (!routes[routeId] || routeId === activeRoute) return;
  save();
  activeRoute = routeId;
  steps = routes[activeRoute].steps;
  state = routeStore[activeRoute] || {};
  routeStore[activeRoute] = state;
  current = Number(localStorage.getItem(`storyqStep:${activeRoute}`) || 0);
  if (!steps[current]) current = 0;
  coreFields = new Set(routes[activeRoute].core);
  fieldLabels = Object.fromEntries(steps.flatMap((step) => step.fields.map(([key, label]) => [key, label])));
  ensureTrace();
  save();
  document.querySelector("#evidencePanel").hidden = true;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
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
  const copy = interfaceCopy[activeRoute];
  const percent = Math.round(filledFields() * 100);
  progressBar.style.width = `${percent}%`;
  completionText.textContent = copy.complete(percent);
  stepCounter.textContent = copy.progress(current + 1, steps.length);
}

function render() {
  if (!steps[current]) current = 0;
  const step = steps[current];
  const route = routes[activeRoute];
  const copy = interfaceCopy[activeRoute];
  const guidance = stepGuidance[step.id] || { time: "Flexible", mode: "Pensar", effort: "Proceso" };
  document.body.dataset.route = activeRoute;
  document.documentElement.lang = activeRoute === "writing" ? "en" : "es";
  const routeMark = document.querySelector("#routeMark");
  routeMark.src = route.mark;
  routeMark.alt = route.markAlt;
  document.querySelector("#routeTitle").textContent = route.title;
  document.querySelector("#routeTagline").textContent = route.tagline;
  document.querySelector("#previewTitle").textContent = route.previewTitle;
  document.querySelector("#labelType").textContent = route.labelType;
  document.querySelector("#studioRibbon").innerHTML = route.ribbons.map((item) => `<span>${item}</span>`).join("");
  document.querySelector("#pilotToggleLabel").textContent = copy.pilot;
  document.querySelector("#pilotModeNote").textContent = copy.pilotNote;
  document.querySelector("#prevBtn").textContent = copy.previous;
  document.querySelector("#nextBtn").textContent = current === steps.length - 1 ? copy.finish : copy.next;
  document.querySelector("#aiBtn").textContent = copy.counterpoint;
  document.querySelector("#evidenceBtn").textContent = copy.report;
  document.querySelector("#resetBtn").textContent = copy.reset;
  document.querySelector("#journeyEyebrow").textContent = copy.journeyEyebrow;
  document.querySelector("#journeyTitle").textContent = copy.journeyTitle;
  document.querySelector("#coreEyebrow").textContent = copy.coreEyebrow;
  document.querySelector("#coreTitle").textContent = copy.coreTitle;
  document.querySelector("#traceEyebrow").textContent = copy.traceEyebrow;
  document.querySelector("#traceTitle").textContent = copy.traceTitle;
  document.querySelector("#humanMetricLabel").textContent = copy.human;
  document.querySelector("#aiMetricLabel").textContent = copy.ai;
  document.querySelector("#iterationMetricLabel").textContent = copy.iterations;
  route.summaryLabels.forEach((label, index) => {
    document.querySelector(`#summaryLabel${["One", "Two", "Three"][index]}`).textContent = label;
  });
  document.querySelectorAll("[data-route]").forEach((button) => {
    const selected = button.dataset.route === activeRoute;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  document.querySelector("#sampleBtn").hidden = activeRoute !== "methods";
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
  const route = routes[activeRoute];
  const preview = activeRoute === "writing"
    ? {
        meta: state.classicGenre || state.newFormat || "Género por definir",
        title: state.finalTitle || state.oracleName || "Obra sin título",
        text: state.finalSynopsis || state.transformationRule || "La bitácora crecerá cuando definas la obra, el oráculo y su medio.",
        summaries: [state.transformationRule || state.newFormat, `${state.narrativeVoice || ""} ${state.storyStructure || ""}`.trim(), state.oracleName || state.oracleProcedure]
      }
    : {
          meta: state.worldName || "Sociedad por definir",
          title: state.objectName || "Artefacto sin nombre",
          text: [
            state.curatorialText,
            state.objectName && state.worldName
              ? `Este artefacto pertenece a ${state.worldName}. Fue utilizado para ${state.declaredPurpose || "regular una práctica social aún no descrita"}. Su existencia indica que esta cultura valoraba ${state.values || "ciertos valores dominantes"} por encima de ${state.desirableFuture || "otras formas de vida"}.`
              : ""
          ].find(Boolean) || "La ficha aparecerá cuando completes los campos centrales del laboratorio.",
          summaries: [state.ethicalQuestion || state.dilemmaType, state.requiredHuman, state.socialIssue]
        };

  document.querySelector("#labelWorld").textContent = preview.meta;
  document.querySelector("#labelObject").textContent = preview.title;
  document.querySelector("#labelText").textContent = preview.text;
  document.querySelector("#summaryDilemma").textContent = compact(preview.summaries[0]);
  document.querySelector("#summaryHuman").textContent = compact(preview.summaries[1]);
  document.querySelector("#summaryIssue").textContent = compact(preview.summaries[2]);
  renderJourney();
  renderCoreCompletion();
  renderTrace();
}

function renderJourney() {
  const routeJourneys = {
    methods: [
      ["Contexto", state.groupName || state.activityName], ["Sistema", state.worldName], ["Conflicto", state.centralConflict || state.values],
      ["Dilema", state.ethicalQuestion || state.dilemmaType], ["Persona", state.requiredHuman], ["Artefacto", state.objectName],
      ["Materialidad", state.scale || state.materials || state.materiality], ["Ética", state.socialIssue || state.ethicalPosition]
    ],
    writing: [
      ["Contexto", state.groupName || state.projectId], ["Género", state.classicGenre || state.hybridGenre], ["Documentación", state.thickDescription || state.observationSource],
      ["Voz", state.narrativeVoice], ["Estructura", state.storyStructure || state.narrativeConflict], ["Oráculo", state.oracleName || state.oracleSymbolSystem],
      ["Medio", state.publicationMedium || state.platformMeaning], ["Publicación", state.finalTitle || state.anthologyPiece]
    ]
  };
  const items = routeJourneys[activeRoute];
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
  if (activeRoute === "writing") {
    const voice = state.narrativeVoice || "la voz elegida";
    const structure = state.storyStructure || "la estructura propuesta";
    const oracle = state.oracleName || "el oráculo";
    state.aiObject = `Contrapunto: narrar ${oracle} con una voz externa que contradiga ${voice} y reorganizar una escena fuera de ${structure}.`;
    state.aiComparison = "Este contrapunto no es una solución: sirve para detectar qué decisiones de voz y estructura son esenciales y cuáles pueden transformarse.";
    state._meta.aiCounterpoints += 1;
    logEvent("ai", "Contraste IA", `Contrapunto narrativo ${state._meta.aiCounterpoints}`);
    render();
    return;
  }
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
    title: `StoryQ Studio — ${routes[activeRoute].short}`,
    route: activeRoute,
    projectId: state.projectId || "",
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
    journey: activeRoute === "writing"
      ? {
          context: state.groupName || state.projectId || "",
          tradition: state.classicGenre || state.formatGenealogy || "",
          documentation: state.thickDescription || state.observationSource || "",
          voiceAndStructure: [state.narrativeVoice, state.storyStructure].filter(Boolean).join(" — "),
          humanCorpus: state.humanDraft || "",
          oracle: state.oracleName || state.oracleMechanism || "",
          materiality: state.publicationMedium || state.platformMeaning || "",
          testing: state.revisionDecision || "",
          fairAndAnthology: state.finalTitle || state.anthologyPiece || ""
        }
      : {
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

function writingReportSections() {
  return [
    {
      title: "Identidad del proyecto",
      items: [
        ["Clave", state.projectId], ["Equipo", state.studentName], ["Grupo", state.groupName],
        ["Carga y docencia", [state.weeklyHours, state.teachingRole, state.coTeacher].filter(Boolean).join(" · ")],
        ["Oráculo", state.oracleName], ["Promesa", state.oraclePromise]
      ]
    },
    {
      title: "Tradición y transformación",
      items: [
        ["Género de partida", state.classicGenre], ["Referencia", state.genreModel],
        ["Convención reconocida", state.classicConvention], ["Genealogía", state.formatGenealogy],
        ["Formato contemporáneo", state.newFormat], ["Decisión de transformación", state.transformationRule],
        ["Aporte del medio", state.mediumReason]
      ]
    },
    {
      title: "Documentación y posición ética",
      items: [
        ["Realidad observada", state.observationSource], ["Descripción densa", state.thickDescription],
        ["Observación e inferencia", state.factInference], ["Escucha activa", state.activeListening],
        ["Identidad de quien observa", state.identityPosition], ["Otredad, prejuicio y cuidado", state.othernessPosition],
        ["Evidencia de campo", state.sourceLinks]
      ]
    },
    {
      title: "Voz, estructura y corpus",
      items: [
        ["Voz y focalización", [state.narrativeVoice, state.focalization].filter(Boolean).join(" — ")],
        ["Decisión de voz", state.voiceDecision], ["Estructura", state.storyStructure],
        ["Conflicto y giro", [state.narrativeConflict, state.turningPoint].filter(Boolean).join(" — ")],
        ["Unidad y familias", [state.corpusUnit, state.corpusPlan].filter(Boolean).join(" — ")],
        ["Corpus humano inicial", state.humanDraft], ["Reescritura demostrada", state.discardedFragment]
      ]
    },
    {
      title: "Sistema de consulta",
      items: [
        ["Mecanismo", state.oracleMechanism], ["Símbolos", state.oracleSymbolSystem],
        ["Entrada y azar", [state.oracleQuestion, state.chanceRule].filter(Boolean).join(" — ")],
        ["Gramática de interpretación", state.interpretationGrammar], ["Guion", state.oracleProcedure],
        ["Mediación", state.mediatorRole], ["Cuidado", state.careProtocol]
      ]
    },
    {
      title: "Materialidad, plataforma e IA",
      items: [
        ["Soporte", state.publicationMedium], ["Piezas y materialidad", [state.physicalComponents, state.materialDecisions].filter(Boolean).join(" — ")],
        ["Estación y accesibilidad", [state.fairStation, state.accessibility].filter(Boolean).join(" — ")],
        ["Aporte de la plataforma", state.platformMeaning], ["Uso de IA", state.aiPurpose],
        ["Decisión humana", state.humanModification || state.noAiReason], ["Verificación y uso final", [state.verificationMethod, state.aiFinalUse].filter(Boolean).join(" — ")]
      ]
    },
    {
      title: "Prueba y revisión",
      items: [
        ["Pregunta de prueba", state.testQuestion], ["Protocolo", state.testProtocol],
        ["Observaciones", state.testObservations], ["Interpretación inesperada", state.unexpectedReading],
        ["Riesgos detectados", state.biasReview], ["Revisión decidida", state.revisionDecision],
        ["Evidencia antes/después", state.versionEvidence]
      ]
    },
    {
      title: "Feria y antología",
      items: [
        ["Texto para el público", state.finalSynopsis], ["Recorrido y mediación", [state.fairPlan, state.mediationScript].filter(Boolean).join(" — ")],
        ["Responsabilidades", state.fairRole], ["Registro de la feria", state.fairEvidence],
        ["Aprendizaje público", state.publicLearning], ["Memoria literaria", state.anthologyPiece],
        ["Nota de contexto", state.anthologyContext], ["Autoría y tecnologías", state.authorshipStatement],
        ["Entrega final", state.finalDelivery]
      ]
    }
  ];
}

function buildReadableReportText() {
  const stats = traceStats();
  const coreStats = coreCompletionStats();
  if (activeRoute === "writing") {
    const sections = writingReportSections().map((section) => [
      section.title.toUpperCase(),
      ...section.items.map(([label, value]) => `${label}: ${value || "No registrado"}`)
    ].join("\n")).join("\n\n");
    const timeline = state._timeline.length
      ? state._timeline.map((event, index) => `${index + 1}. ${event.title} — ${event.detail || event.type}`).join("\n")
      : "Sin eventos registrados.";
    return [
      "StoryQ Studio — Feria de los Oráculos",
      `Campos clave: ${coreStats.filled}/${coreStats.total}`,
      `Decisiones registradas: ${stats.decisions + stats.decisionTags}`,
      `Iteraciones: ${stats.iterations}`,
      "",
      sections,
      "",
      "BITÁCORA DE DECISIONES",
      timeline
    ].join("\n");
  }
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
  if (activeRoute === "writing") {
    const summary = `
      <section>
        <h4>Resumen de trazabilidad</h4>
        <div class="report-metrics">
          <div><span>Campos clave</span><strong>${coreStats.filled}/${coreStats.total}</strong></div>
          <div><span>Decisiones</span><strong>${stats.decisions + stats.decisionTags}</strong></div>
          <div><span>Iteraciones</span><strong>${stats.iterations}</strong></div>
          <div><span>Contrapuntos IA</span><strong>${state._meta.aiCounterpoints || 0}</strong></div>
        </div>
      </section>
    `;
    const sections = writingReportSections().map((section) => {
      const answers = section.items.map(([label, value]) => `
        <dt>${label}</dt><dd>${compact(value, "No registrado")}</dd>
      `).join("");
      return `<section><h4>${section.title}</h4><dl>${answers}</dl></section>`;
    }).join("");
    const timeline = state._timeline.length
      ? state._timeline.map((event) => `<li><strong>${event.title}</strong><span>${compact(event.detail, event.type)}</span></li>`).join("")
      : "<li><strong>Sin eventos registrados</strong><span>La bitácora crecerá con decisiones e iteraciones.</span></li>";
    report.innerHTML = `${summary}${sections}<section><h4>Bitácora de decisiones</h4><ol class="report-timeline">${timeline}</ol></section>`;
    return;
  }
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
document.querySelectorAll("[data-route]").forEach((button) => {
  button.addEventListener("click", () => switchRoute(button.dataset.route));
});
pilotModeToggle.addEventListener("change", () => {
  pilotMode = pilotModeToggle.checked;
  localStorage.setItem("futureArtifactPilotMode", String(pilotMode));
  render();
});
document.querySelector("#resetBtn").addEventListener("click", () => {
  if (!confirm(`Esto borrará únicamente el recorrido “${routes[activeRoute].title}” guardado en este navegador.`)) return;
  delete routeStore[activeRoute];
  localStorage.setItem("storyqRouteStore", JSON.stringify(routeStore));
  localStorage.removeItem(`storyqStep:${activeRoute}`);
  if (activeRoute === "methods") {
    localStorage.removeItem("futureArtifactLab");
    localStorage.removeItem("futureArtifactStep");
  }
  Object.keys(state).forEach((key) => delete state[key]);
  current = 0;
  pilotMode = false;
  ensureTrace();
  render();
});

render();
