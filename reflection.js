// Shared learning protocol. Loaded before app.js; existing route data stays intact.
const reflectionSteps = [
  {
    id: 'learningPitch', kicker: 'Cierre reflexivo', title: 'Pitch · ¿Qué aprendí?',
    purpose: 'Comparte una transformación concreta en 2–3 minutos, con tiempo flexible. Reconocer dudas no resta puntos ni bloquea la entrega. Estas dimensiones son apoyos: elige las pertinentes y no compartas información íntima. Puedes usar una modalidad equivalente a la oral. Elige un reto abordable: si la dificultad impide avanzar, solicita una pista o ajusta la modalidad.',
    fields: [
      ['pitchMode', '¿Cómo compartirás tu reflexión?', 'select', 'Por elegir|Oral en vivo|Audio|Texto|Diagrama comentado|Demostración práctica'],
      ['pitchLearning', 'Mi aprendizaje y mi proceso', 'textarea', 'Antes pensaba o hacía… Ahora comprendo o puedo hacer… Un ejemplo es… ¿Qué me hizo revisar mi idea?'],
      ['pitchSelf', 'Mi autoconocimiento · opcional', 'textarea', '¿Qué descubrí sobre mis estrategias, supuestos, fortalezas o dificultades? Puedes indicar que aún no identificas un cambio.'],
      ['pitchWorld', 'Mi acción en el mundo · según pertinencia', 'textarea', '¿En qué situación nueva utilizaría esto y qué tendría que adaptar?'],
      ['pitchSocial', 'Mi relación con los demás · según pertinencia', 'textarea', '¿Qué cambia en mi forma de escuchar, colaborar o considerar otras perspectivas?'],
      ['pitchAgency', 'La IA y mis decisiones', 'textarea', 'La IA me ayudó a… Yo decidí… porque… También puedes explicar que no utilizaste IA.'],
      ['pitchOpen', 'Lo que todavía no comprendo · sin penalización', 'textarea', 'Una duda o límite que reconozco es… No tienes que inventar una duda ni resolverla para entregar.'],
      ['pitchNext', 'Mi próximo paso · opcional', 'textarea', '¿Qué podría probar, preguntar o contrastar para seguir aprendiendo?']
    ]
  },
  {
    id: 'learningEvidence', kicker: 'Etiqueta de evidencias', title: 'Reflexión y comprensión',
    purpose: 'Registra evidencias de esta actividad, no un diagnóstico de la persona. No se asignan puntos ni se penalizan las dudas. La reflexión y la comprensión se revisan por separado; hablar con soltura no demuestra por sí solo comprensión. La modalidad oral no es obligatoria.',
    fields: [
      ['reviewSource', 'Tipo de revisión', 'select', 'No evaluado|Autovaloración|Revisión entre pares|Revisión docente'],
      ['reviewerName', 'Quién revisó · opcional', 'input', 'Nombre o referencia de quien realizó la revisión.'],
      ['reviewCriterion', 'Criterio de comprensión observado', 'textarea', '¿Qué explicación, aplicación o adaptación se espera en esta actividad?'],
      ['reviewQuestion', 'Una pregunta de seguimiento', 'textarea', 'A partir del pitch: ¿cómo cambiaría tu respuesta si cambiara una condición concreta?'],
      ['reviewResponse', 'Respuesta o descripción de la demostración', 'textarea', 'Sin consultar la respuesta de IA, explica, aplica o modifica. Conserva las ayudas de accesibilidad. Registra lo observado o una referencia a la evidencia.'],
      ['reflectionStatus', 'Reflexión sobre el aprendizaje', 'select', 'No evaluado|Evidencia por ampliar|Evidencia registrada|No aplica'],
      ['understandingStatus', 'Comprensión en esta tarea', 'select', 'No evaluado|Evidencia por ampliar|Demostrada para el criterio|No aplica'],
      ['reviewEvidence', 'Evidencia que sostiene la valoración', 'textarea', 'Describe qué respuesta o acción respalda cada valoración. Reconocer una duda no equivale a fallar. No evalúes intimidad, entusiasmo ni seguridad al hablar.'],
      ['reviewNext', 'Retroalimentación y próximo paso', 'textarea', '¿Qué se logró y qué oportunidad de aprendizaje sigue abierta? La entrega permanece disponible.']
    ]
  }
];

const openActivitySteps = [
  { id: 'context', kicker: 'Cualquier materia', title: 'Configurar mi actividad', purpose: 'Acuerda el propósito y los criterios con tu docente. Este recorrido sirve para distintas materias y productos.', fields: [
    ['studentName', 'Estudiante o equipo', 'input', 'Nombre o referencia'],
    ['activityName', 'Actividad', 'input', '¿En qué estás trabajando?'],
    ['subjectName', 'Materia o contexto', 'input', 'Ciencias, historia, diseño, un proyecto comunitario…'],
    ['learningGoal', '¿Qué quiero aprender o demostrar?', 'textarea', 'Define una capacidad concreta y cómo podría observarse.'],
    ['aiAgreement', 'Acuerdo de uso de IA', 'textarea', '¿Qué puede delegarse y qué debe realizarse autónomamente?']
  ]},
  { id: 'firstThought', kicker: 'Antes de consultar', title: 'Mi punto de partida', purpose: 'Registra tu primer intento. Puede ser una hipótesis, un boceto, una interpretación o un procedimiento.', fields: [
    ['initialIdea', 'Lo que pienso o intento primero', 'textarea', 'Mi propuesta inicial es… Mis razones son…'],
    ['initialQuestion', 'Lo que necesito explorar', 'textarea', '¿Qué pregunta orientará mi trabajo?']
  ]},
  { id: 'collaboration', kicker: 'Colaboración', title: 'Cómo utilicé la IA', purpose: 'Describe el uso real de la herramienta. También puedes realizar la actividad sin IA.', fields: [
    ['aiPurpose', 'Ayuda solicitada', 'textarea', '¿Qué pediste y para qué? O indica que no utilizaste IA.'],
    ['aiContribution', 'Aporte recibido', 'textarea', 'Resume o referencia la propuesta relevante.']
  ]},
  { id: 'contrast', kicker: 'Contraste', title: 'Qué verifiqué', purpose: 'Contrasta lo importante con evidencia pertinente a la materia.', fields: [
    ['verificationMethod', 'Afirmación, fuente o procedimiento contrastado', 'textarea', '¿Qué comprobaste, con qué fuente o prueba y qué encontraste?'],
    ['verificationLimits', 'Límites de la comprobación', 'textarea', '¿Qué sigue siendo incierto? Reconocerlo no resta puntos.']
  ]},
  { id: 'decisions', kicker: 'Agencia', title: 'Mi decisión y mi resultado', purpose: 'Explica el criterio que orientó tu resultado. Aceptar una propuesta con razones también es una decisión.', fields: [
    ['decisionReason', 'Qué acepté, transformé o rechacé, y por qué', 'textarea', 'Relaciona tu decisión con el propósito de la actividad.'],
    ['finalResult', 'Resultado o referencia al producto', 'textarea', 'Describe el resultado o indica dónde se encuentra.']
  ]}
];
