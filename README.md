# StoryQIA Studio — revisión formativa

Versión local de trabajo, 30 de septiembre de 2026. Abrir index.html o servir esta carpeta con un servidor estático.

## Cambios

- Recorrido abierto a cualquier materia, además de Métodos Creativos y Creative Writing.
- Pitch «¿Qué aprendí?» en los tres recorridos: aprendizaje, autoconocimiento, aplicación y relación social.
- Modalidad oral, audio, texto, diagrama o demostración. La selección de audio documenta la modalidad; no graba audio.
- Las dudas y dimensiones personales son opcionales, no afectan el avance y no bloquean exportación.
- Reflexión y comprensión se registran por separado, con criterio, evidencia y tipo de revisión declarado.
- Se eliminaron los porcentajes inferidos de trabajo humano e IA. Los porcentajes restantes indican campos clave registrados.
- Reporte completo con respuestas sin truncar, datos JSON e impresión. Los datos permanecen en el navegador.
- Se mantienen las claves de almacenamiento de los recorridos anteriores. La copia local tiene un origen distinto del sitio publicado y no recibe automáticamente sus datos.

## Alcance

Es un instrumento formativo en piloto, no una prueba validada ni un diagnóstico clínico. No autentica al revisor ni certifica autoría. Los contrapuntos existentes son ejemplos locales, no respuestas de un servicio de IA.

## Verificación

Comprobados en navegador: carga del recorrido abierto, registro y persistencia de una duda y modalidad al recargar, continuación sin penalización, estados iniciales «No evaluado» y presencia de la duda en el reporte completo. La impresión prepara ese reporte; queda pendiente revisar la paginación en PDF. No se ha publicado esta revisión.

## Guardado y entrega — 5 de octubre de 2026

Las respuestas se guardan automáticamente en el navegador y dispositivo actuales. La cabecera muestra confirmación con hora o un aviso de fallo. No existe envío automático al docente ni sincronización entre equipos.

1. Escribir y comprobar el aviso «Guardado en este navegador».
2. Descargar una copia JSON para continuar en otro equipo o mantener respaldo.
3. Recuperar esa copia mediante el selector de archivo. Se pide confirmación antes de reemplazar respuestas existentes del recorrido.
4. Descargar el reporte de texto para entregar, o imprimir el reporte como PDF.

El almacenamiento bloqueado, una cuota agotada o un registro ilegible ya no interrumpen silenciosamente la aplicación. Los registros ilegibles se preservan y los nuevos datos se guardan en una clave de recuperación. La navegación privada y las políticas de limpieza del dispositivo pueden borrar datos locales; el respaldo descargado es independiente.

Verificado: persistencia tras recargar en navegador, descarga real de copia y contenido del archivo. Las pruebas automatizadas cubren almacenamiento bloqueado, cuota agotada, registro corrupto, recuperación de copia y rechazo de JSON inválido sin alterar respuestas. Ejecutar `node tests/storage.test.cjs`. La prueba del selector de recuperación en navegador fue interrumpida; la recuperación se comprobó en la prueba de integración.
