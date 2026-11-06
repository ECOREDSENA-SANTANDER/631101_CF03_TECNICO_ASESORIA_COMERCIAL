<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Información que orienta decisiones.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la apropiación de conocimientos relacionados con la recolección, organización, procesamiento, análisis e interpretación de información para apoyar la toma de decisiones comerciales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué criterio permite verificar la confiabilidad de una fuente de información comercial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que presente datos sin indicar su procedencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que identifique su autor, origen y fecha de publicación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Que utilice únicamente opiniones de vendedores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que contenga la mayor cantidad posible de páginas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia una adecuada comprensión del manejo de la información y su aplicación en la toma de decisiones comerciales.',
          mensaje_incorrecto:
            'La respuesta no es correcta. Le recomendamos revisar nuevamente los contenidos del componente formativo Tecnologías de la Información y la Comunicación (TIC).',
        },
        {
          id: 2,
          texto:
            '¿Para qué se utiliza la información histórica de ventas en una organización?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para eliminar los registros de periodos anteriores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para sustituir la información actual del mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para identificar tendencias y apoyar decisiones comerciales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Para evitar la comparación entre periodos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia una adecuada comprensión del manejo de la información y su aplicación en la toma de decisiones comerciales.',
          mensaje_incorrecto:
            'La respuesta no es correcta. Le recomendamos revisar nuevamente los contenidos del componente formativo Tecnologías de la Información y la Comunicación (TIC).',
        },
        {
          id: 3,
          texto:
            '¿Cuál es una ventaja de organizar los datos antes de analizarlos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Facilita su clasificación, comparación e interpretación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Impide detectar relaciones entre las variables.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elimina la necesidad de validar la información.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Convierte todos los datos en información cualitativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia una adecuada comprensión del manejo de la información y su aplicación en la toma de decisiones comerciales.',
          mensaje_incorrecto:
            'La respuesta no es correcta. Le recomendamos revisar nuevamente los contenidos del componente formativo Tecnologías de la Información y la Comunicación (TIC).',
        },
        {
          id: 4,
          texto:
            '¿Qué técnica permite obtener información detallada mediante preguntas directas a una persona?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Observación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Entrevista.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tabulación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Codificación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia una adecuada comprensión del manejo de la información y su aplicación en la toma de decisiones comerciales.',
          mensaje_incorrecto:
            'La respuesta no es correcta. Le recomendamos revisar nuevamente los contenidos del componente formativo Tecnologías de la Información y la Comunicación (TIC).',
        },
        {
          id: 5,
          texto:
            '¿Qué aspecto debe definirse antes de recolectar información del mercado?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El diseño final del informe.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La conclusión que se desea obtener.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El objetivo y la información que se necesita.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El resultado esperado de cada encuestado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia una adecuada comprensión del manejo de la información y su aplicación en la toma de decisiones comerciales.',
          mensaje_incorrecto:
            'La respuesta no es correcta. Le recomendamos revisar nuevamente los contenidos del componente formativo Tecnologías de la Información y la Comunicación (TIC).',
        },
        {
          id: 6,
          texto:
            '¿Cuál situación corresponde al uso de información interna de una empresa?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Consultar un informe sectorial de una entidad externa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Analizar el registro mensual de ventas de la organización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Revisar un artículo científico sobre consumidores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Consultar estadísticas publicadas por una asociación gremial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia una adecuada comprensión del manejo de la información y su aplicación en la toma de decisiones comerciales.',
          mensaje_incorrecto:
            'La respuesta no es correcta. Le recomendamos revisar nuevamente los contenidos del componente formativo Tecnologías de la Información y la Comunicación (TIC).',
        },
        {
          id: 7,
          texto: '¿Cuál situación corresponde al uso de información externa?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Revisar el historial de facturación de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Analizar las devoluciones registradas en el sistema interno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Consultar estadísticas oficiales sobre el comportamiento del sector.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Examinar el inventario disponible en la bodega.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia una adecuada comprensión del manejo de la información y su aplicación en la toma de decisiones comerciales.',
          mensaje_incorrecto:
            'La respuesta no es correcta. Le recomendamos revisar nuevamente los contenidos del componente formativo Tecnologías de la Información y la Comunicación (TIC).',
        },
        {
          id: 8,
          texto:
            '¿Qué acción contribuye a mejorar la calidad de los datos recolectados?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar información sin comprobar su consistencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Validar que los datos estén completos y sean coherentes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar los datos que contradigan una expectativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modificar las respuestas para facilitar el análisis.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia una adecuada comprensión del manejo de la información y su aplicación en la toma de decisiones comerciales.',
          mensaje_incorrecto:
            'La respuesta no es correcta. Le recomendamos revisar nuevamente los contenidos del componente formativo Tecnologías de la Información y la Comunicación (TIC).',
        },
        {
          id: 9,
          texto:
            '¿Qué permite la tabulación de los datos obtenidos en una encuesta?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar las respuestas para facilitar su análisis.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar la aplicación del instrumento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Definir automáticamente las conclusiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Convertir las opiniones en fuentes secundarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia una adecuada comprensión del manejo de la información y su aplicación en la toma de decisiones comerciales.',
          mensaje_incorrecto:
            'La respuesta no es correcta. Le recomendamos revisar nuevamente los contenidos del componente formativo Tecnologías de la Información y la Comunicación (TIC).',
        },
        {
          id: 10,
          texto:
            '¿Cuál de las siguientes corresponde a una variable cualitativa expresada mediante categorías?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Número de compras realizadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Valor total de las ventas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nivel de satisfacción del cliente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cantidad de productos devueltos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia una adecuada comprensión del manejo de la información y su aplicación en la toma de decisiones comerciales.',
          mensaje_incorrecto:
            'La respuesta no es correcta. Le recomendamos revisar nuevamente los contenidos del componente formativo Tecnologías de la Información y la Comunicación (TIC).',
        },
        {
          id: 11,
          texto: '¿Cuál variable comercial es cuantitativa?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Canal de compra preferido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Motivo de devolución.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Número de unidades vendidas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tipo de cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia una adecuada comprensión del manejo de la información y su aplicación en la toma de decisiones comerciales.',
          mensaje_incorrecto:
            'La respuesta no es correcta. Le recomendamos revisar nuevamente los contenidos del componente formativo Tecnologías de la Información y la Comunicación (TIC).',
        },
        {
          id: 12,
          texto: '¿Qué busca el análisis comparativo de información comercial?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contrastar datos entre periodos, segmentos o categorías.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar las diferencias encontradas en los datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar la información cuantitativa por opiniones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Presentar resultados sin establecer referentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia una adecuada comprensión del manejo de la información y su aplicación en la toma de decisiones comerciales.',
          mensaje_incorrecto:
            'La respuesta no es correcta. Le recomendamos revisar nuevamente los contenidos del componente formativo Tecnologías de la Información y la Comunicación (TIC).',
        },
        {
          id: 13,
          texto:
            '¿Qué pregunta responde principalmente un análisis descriptivo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                '¿Qué ocurrió con las ventas durante el periodo analizado?',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '¿Qué ocurrirá con certeza el próximo año?',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '¿Qué decisión debe adoptar obligatoriamente la empresa?',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '¿Qué datos deben eliminarse antes de recolectarlos?',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia una adecuada comprensión del manejo de la información y su aplicación en la toma de decisiones comerciales.',
          mensaje_incorrecto:
            'La respuesta no es correcta. Le recomendamos revisar nuevamente los contenidos del componente formativo Tecnologías de la Información y la Comunicación (TIC).',
        },
        {
          id: 14,
          texto:
            '¿Para qué sirve identificar tendencias en los datos comerciales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para reconocer patrones de comportamiento a lo largo del tiempo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Para garantizar que todos los periodos tengan iguales resultados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para evitar la comparación de información histórica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para reemplazar la interpretación de los resultados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia una adecuada comprensión del manejo de la información y su aplicación en la toma de decisiones comerciales.',
          mensaje_incorrecto:
            'La respuesta no es correcta. Le recomendamos revisar nuevamente los contenidos del componente formativo Tecnologías de la Información y la Comunicación (TIC).',
        },
        {
          id: 15,
          texto:
            '¿Qué representación es adecuada para comparar cantidades entre varias categorías?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un gráfico de barras.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un contrato comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una guía de entrevista.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un formulario de registro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia una adecuada comprensión del manejo de la información y su aplicación en la toma de decisiones comerciales.',
          mensaje_incorrecto:
            'La respuesta no es correcta. Le recomendamos revisar nuevamente los contenidos del componente formativo Tecnologías de la Información y la Comunicación (TIC).',
        },
        {
          id: 16,
          texto:
            '¿Qué debe hacerse cuando se detecta un dato inconsistente durante el procesamiento?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantenerlo sin revisión para conservar el registro original.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verificar su origen y corregirlo cuando exista soporte.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Duplicarlo para equilibrar los resultados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituirlo por un valor estimado sin justificación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia una adecuada comprensión del manejo de la información y su aplicación en la toma de decisiones comerciales.',
          mensaje_incorrecto:
            'La respuesta no es correcta. Le recomendamos revisar nuevamente los contenidos del componente formativo Tecnologías de la Información y la Comunicación (TIC).',
        },
        {
          id: 17,
          texto:
            '¿Cuál es la finalidad de interpretar los resultados de un análisis?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Transformar los hallazgos en información útil para la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumentar la cantidad de registros almacenados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de presentar conclusiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Repetir los datos sin relacionarlos con el objetivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia una adecuada comprensión del manejo de la información y su aplicación en la toma de decisiones comerciales.',
          mensaje_incorrecto:
            'La respuesta no es correcta. Le recomendamos revisar nuevamente los contenidos del componente formativo Tecnologías de la Información y la Comunicación (TIC).',
        },
        {
          id: 18,
          texto:
            '¿Qué característica debe tener una conclusión basada en información comercial?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Derivarse de los resultados obtenidos en el análisis.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incluir datos que no fueron considerados en el estudio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Responder únicamente a opiniones personales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contradecir el objetivo definido para la recolección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia una adecuada comprensión del manejo de la información y su aplicación en la toma de decisiones comerciales.',
          mensaje_incorrecto:
            'La respuesta no es correcta. Le recomendamos revisar nuevamente los contenidos del componente formativo Tecnologías de la Información y la Comunicación (TIC).',
        },
        {
          id: 19,
          texto:
            '¿Qué elemento facilita la comprensión de un informe de resultados?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presentar datos sin títulos ni unidades de medida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar los hallazgos con tablas o gráficos pertinentes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incluir únicamente los datos que favorecen una decisión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Omitir la fuente de la información utilizada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia una adecuada comprensión del manejo de la información y su aplicación en la toma de decisiones comerciales.',
          mensaje_incorrecto:
            'La respuesta no es correcta. Le recomendamos revisar nuevamente los contenidos del componente formativo Tecnologías de la Información y la Comunicación (TIC).',
        },
        {
          id: 20,
          texto:
            '¿Cómo contribuye el manejo de la información a reducir la incertidumbre comercial?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite tomar decisiones sustentadas en datos analizados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Garantiza que todas las decisiones produzcan ventas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elimina los cambios del mercado y la competencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evita que sea necesario actualizar la información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia una adecuada comprensión del manejo de la información y su aplicación en la toma de decisiones comerciales.',
          mensaje_incorrecto:
            'La respuesta no es correcta. Le recomendamos revisar nuevamente los contenidos del componente formativo Tecnologías de la Información y la Comunicación (TIC).',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra una adecuada apropiación de los contenidos sobre Tecnologías de la Información y la Comunicación (TIC).',
      mensaje_final_reprobado:
        'Aún no ha superado la actividad. Le recomendamos revisar nuevamente el componente formativo e intentar de nuevo la actividad didáctica.',
    },
  }),
}
</script>
