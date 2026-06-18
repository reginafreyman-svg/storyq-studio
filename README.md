# Laboratorio de Artefactos de Futuro

Prototipo funcional de una app educativa para guiar a estudiantes desde el analisis de un mundo especulativo hasta una ficha curatorial de artefacto futuro.

## Como abrirlo

Desde la portada del proyecto, abre `../index.html`.

Tambien puedes abrir directamente este archivo: `index.html`.

## Que incluye

- Flujo guiado de 13 pasos con fases finales reducidas para evitar repeticion.
- Orientacion por paso: tiempo sugerido, modo de pensamiento y tipo de esfuerzo.
- Campos marcados como `Clave` y `Apoyo` para priorizar durante pilotos.
- Modo piloto para mostrar solo campos `Clave`.
- Indicador de campos clave completos y pendientes.
- Caso demo protegido para probar el reporte sin borrar accidentalmente un trabajo existente.
- Datos de participante: nombre o equipo, grupo, actividad, docente y fecha.
- Mapa del mundo especulativo.
- Dilema etico.
- Fase de imaginacion humana antes de IA.
- Contrapunto generado de forma local como ejemplo.
- Etiqueta cognitiva StoryQ visible durante el recorrido.
- Registro automatico de ideas originales, modificaciones humanas, decisiones y contrapuntos.
- Linea de tiempo del proceso de pensamiento.
- Reporte de trazabilidad cognitiva con porcentaje estimado de trabajo humano y asistido por IA.
- Storyboard del artefacto.
- Preguntas de escala, materiales, fabricacion y ensamblaje para fortalecer el objeto fisico.
- Capa narrativa: antes, despues, resistencia y conflicto.
- Vista global del recorrido: contexto, sistema, dilema, persona, artefacto, materialidad y etica.
- Evaluacion etica.
- Ficha curatorial.
- Guardado automatico en el navegador.
- Reporte StoryQ legible para copiar como texto.
- Datos StoryQ en JSON para copiar a la matriz docente.
- Opcion de imprimir o guardar como PDF.
- Reflexion de salida para detectar preguntas utiles, fricciones y sugerencias de reduccion.

## Nota

Esta primera version no usa una API real de inteligencia artificial. El boton "Generar contrapunto" produce una propuesta local basada en los campos que la persona ya escribio. En una segunda version se puede conectar a un modelo de IA para generar contrastes mas ricos.

La evidencia se muestra dentro de la app para evitar permisos de descarga del navegador. Ahora funciona como reporte StoryQ: incluye contexto del participante, respuestas, etiquetas cognitivas, metadatos, bitacora del proceso y retroalimentacion de salida.

## Matriz docente

Para analizar varios reportes, abre `../storyq-teacher-matrix/index.html`.

Uso:

0. Para probar sin datos reales, pulsa "Cargar ejemplo" en la matriz docente.
1. Cada estudiante abre "Ver reporte StoryQ".
2. Usa "Copiar texto" si necesita entregar un reporte legible.
3. Usa "Copiar datos" si la docente lo pegara en la matriz.
4. La docente pega varios reportes en la matriz docente.
5. La matriz genera metricas, hallazgos iniciales y una tabla exportable como CSV.

Para probar el ciclo completo desde la app del estudiante:

1. Pulsa `Cargar caso demo` en el laboratorio cuando no haya trabajo guardado.
2. Abre `Ver reporte StoryQ`.
3. Usa `Copiar datos`.
4. Pega esos datos en la matriz docente.

## Piloto

Para probar la app con estudiantes, usa `../storyq-pilot-kit.md`.

Incluye:

- protocolo de sesion;
- checklist de observacion docente;
- preguntas de salida para estudiantes;
- rubrica inicial de trazabilidad cognitiva;
- indicadores para investigacion.
