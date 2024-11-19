<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Verificación de registros y cumplimiento del sistema HACCP',
      titulo: 'Cuestionario',
      introduccion:
        'Analizar el proceso de verificación de registros dentro del sistema HACCP, identificando los puntos críticos de control, límites críticos, acciones preventivas y correctivas.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal de la verificación de registros en HACCP?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Garantizar la implementación de un sistema de calidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comprobar el cumplimiento de los aspectos del sistema HACCP.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mejorar la productividad de la planta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Minimizar el uso de recursos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué se entiende por puntos críticos de control (PCC)?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Áreas donde se deben aplicar medidas para evitar riesgos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Lugares para almacenamiento de productos.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Registros administrativos.', esCorrecta: false },
            { id: 'd', texto: 'Normas de etiquetado.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué deben asegurar los límites críticos en el sistema HACCP?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que los valores no superen los parámetros establecidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La rapidez del proceso de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La disponibilidad de insumos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La correcta administración del personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál de los siguientes es un ejemplo de acción correctiva?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Monitorear la temperatura de los productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Parar el proceso si un límite crítico no se cumple.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mantener registros diarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar auditorías internas mensuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué implica el campo de verificación en HACCP?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evaluar el seguimiento de los puntos críticos de control.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumentar la producción de alimentos.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Reducir costos operativos.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Gestionar los recursos humanos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es la función de las acciones preventivas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Realizar auditorías.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Registrar datos de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar que los riesgos se materialicen.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Supervisar al personal.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿En qué sección se anotan comentarios relevantes sobre las acciones tomadas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Puntos críticos de control.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Límites críticos.', esCorrecta: false },
            { id: 'c', texto: 'Registro de producción.', esCorrecta: false },
            { id: 'd', texto: 'Observaciones.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué debe hacer la empresa si detecta un límite crítico superado?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Continuar con el proceso normal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Implementar una acción correctiva.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Notificar a las autoridades locales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modificar el sistema HACCP.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'El objetivo del sistema HACCP es asegurar la inocuidad de los alimentos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '<em>Las acciones preventivas solo se implementan cuando un riesgo ya se ha materializado</em>.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
