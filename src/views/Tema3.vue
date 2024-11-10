<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Sistema de Análisis de Peligros y de Puntos Críticos de Control (HACCP)
    
    .row.mb-4
      .col-lg-8(data-aos="fade-right")
        .fondo-color-sistema-i.p-4
          p.mb-4 Por sus siglas en inglés, #[em Hazard Analysis and Critical Control Points] (HACCP) es un concepto desarrollado en la década de 1960 por la Administración Nacional de Aeronáutica y del Espacio (NASA) de Estados Unidos, con el propósito de garantizar la inocuidad de los alimentos destinados a los astronautas en el espacio.
          p.mb-0 Este sistema permite identificar peligros específicos y definir acciones para su control, con el objetivo de asegurar la inocuidad de los alimentos. Se basa en fundamentos científicos y adopta un enfoque sistemático.
      .col-lg-4.order-first.order-lg-last.mb-4.mb-lg-0(data-aos="fade-left")
        .fondo-color-secundario.p-2.h-100.align-content-center
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 235px;")
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-top")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/23.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El #[b HACCP] (Análisis de Peligros y Puntos Críticos de Control) es una herramienta fundamental para evaluar riesgos y establecer sistemas de control enfocados en la #[b prevención], en lugar de centrarse únicamente en la inspección del producto final. Este sistema, adaptable y flexible, puede aplicarse en todas las etapas, desde la #[b producción primaria] hasta la obtención del #[b producto terminado]. Su uso se basa en #[b evidencias científicas] relacionadas con los riesgos para la salud humana, garantizando la #[b inocuidad] del producto.
    
    p.mb-0(data-aos="fade") Además, el #[b HACCP] facilita las inspecciones por parte de las autoridades y #[b fomenta el comercio internacional] al aumentar la #[b confianza en la calidad] de los productos. La implementación de este sistema requiere la #[b participación activa] de todos los niveles de la organización, desde la #[b gerencia] hasta el #[b personal operativo], y también involucra la colaboración de un #[b grupo de expertos].

    .titulo-decorativo.my-4(data-aos="fade-right")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Principios del sistema HACCP
    
    p.mb-4(data-aos="fade-right") Este sistema se estructura en siete principios, que se detallan a continuación:

    h3.fondo-color-sistema-l.d-inline-flex.py-1.px-4.borde-20.mb-4(data-aos="fade-left") Realizar un análisis de peligros

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/24.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es necesario identificar los peligros, evaluar su gravedad y la probabilidad de que ocurran en cada etapa de la cadena de producción. Se elabora un diagrama de flujo, en el que se relacionan los riesgos frecuentes asociados con el cultivo, el proceso, el almacenamiento y la distribución. 
    
    p.fw-bold.mb-5(data-aos="fade-bottom") Para analizar los peligros, deben considerarse los siguientes factores:

    .row.justify-content-center.mb-5(data-aos="zoom-in-out")
      .col-lg-8
        .fondo-color-sistema-i.p-4
          .row.align-items-center
            .col-lg-5
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/25.svg",style="max-width: 266px;")
            .col-lg-7.ps-lg-0
              ul.lista-ul.mb-0.pb-0
                li.d-flex.mb-2
                  i.fas.fa-check-circle.c-color-sistema-m.me-3
                  span Probabilidad de ocurrencia y amenaza para la salud.
                li.d-flex
                  i.fas.fa-check-circle.c-color-sistema-m.me-3
                  span Cuantificación y cualificación de la presencia del peligro.
                li.d-flex
                  i.fas.fa-check-circle.c-color-sistema-m.me-3
                  span Resistencia y proliferación de patógenos.
                li.d-flex.mb-0
                  i.fas.fa-check-circle.c-color-sistema-m.me-3
                  span Producción de toxinas en los alimentos.
    
    h3.fondo-color-sistema-l.d-inline-flex.py-1.px-4.borde-20.mb-5(data-aos="fade") Determinar los Puntos Críticos de Control (PCC)

    p.mb-4(data-aos="fade") Son las etapas, procesos o fases de una operación en las que la pérdida de control puede implicar un riesgo significativo para la salud del consumidor. Estos puntos corresponden a los lugares en el proceso donde una medida de control puede eliminar o reducir el peligro a un nivel aceptable.
    
    .fondo-personalizado-1.pos-y-p-1.f2.mb-2
      .fondo-personalizado-1__contenido
        figure.mb-4(data-aos="zoom-in-out")
          img.mx-auto(src="@/assets/curso/temas/26.svg",style="max-width: 817px;")
        
        p.fw-bold.mb-4(data-aos="fade-top") La utilización de un árbol de decisiones facilita la identificación de un PCC. Algunas de las preguntas clave incluyen:

        .row(data-aos="flip-up")
          .col-lg-3.col-md-6.mb-4
            .fondo-color-secundario.p-4.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/27.svg",style="max-width: 105px;")
              p.fw-bolder.text-center ¿Existe algún riesgo en esta etapa del proceso?
          .col-lg-3.col-md-6.mb-4
            .fondo-color-secundario.p-4.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/28.svg",style="max-width: 105px;")
              p.fw-bolder.text-center ¿Existen medidas preventivas para el riesgo identificado?
          .col-lg-3.col-md-6.mb-4
            .fondo-color-secundario.p-4.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/29.svg",style="max-width: 105px;")
              p.fw-bolder.text-center ¿Esta etapa está diseñada específicamente para eliminar o reducir la posibilidad de aparición del riesgo?
          .col-lg-3.col-md-6.mb-4
            .fondo-color-secundario.p-4.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/30.svg",style="max-width: 105px;")
              p.fw-bolder.text-center ¿La contaminación puede alcanzar niveles inaceptables?
    
    p.mb-0(data-aos="fade") Estas preguntas permiten identificar los peligros y riesgos, así como las estrategias para minimizarlos en cada etapa del proceso, lo que facilita la determinación de los puntos críticos de control.

    h3.fondo-color-sistema-l.d-inline-flex.py-1.px-4.borde-20.my-4(data-aos="fade-right") Establecer un límite o límites críticos

    p.mb-4(data-aos="fade-left") Para cada PCC, deben establecerse límites críticos, como temperatura, tiempo y pH, entre otros.

    .fondo-personalizado-1.f4.mb-5(data-aos="fade-up")
      .fondo-personalizado-1__contenido.py-5
        .bg-white.p-4.borde-20
          SlyderA.slider-personalizado-1.pt-lg-3(tipo="b")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Vigilancia de PCC
                p.mb-0 Se debe monitorear los PCC en relación con los límites críticos establecidos. Detecta pérdidas de control y facilita correcciones rápidas.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/32.png",style="max-width: 412px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Medidas correctivas
                p.mb-0 Las medidas aseguran que el PCC recupere el control, incluyendo un protocolo para eliminar el producto afectado. Documentar en el plan HACCP.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/33.png",style="max-width: 412px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Verificación del sistema
                p.mb-0 Utilizar métodos, procedimientos y pruebas, como muestreos aleatorios, para confirmar que el sistema HACCP funciona adecuadamente.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/34.png",style="max-width: 412px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Documentación del sistema
                p.mb-0 Mantener un registro detallado y verificación del plan HACCP para asegurar su correcto funcionamiento.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/35.png",style="max-width: 412px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Ejemplos de documentación
                p.mb-0 Análisis de peligros, identificación de los PCC y establecimiento de los límites críticos.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/36.png",style="max-width: 412px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Ejemplos de registros
                p.mb-0 Actividades de vigilancia de los PCC, desviaciones y medidas correctivas, y modificaciones en el sistema HACCP.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/37.png",style="max-width: 412px;")
    
    p.mb-4(data-aos="fade-left") A continuación, se presenta un diagrama  de una empresa productora de tilapia, donde se aplican los siete principios del sistema HACCP en cada etapa del proceso.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      p.mb-0 #[b Figura 1.] Diagrama de flujo
    
    figure.mb-4(data-aos="flip-up")
      img.mx-auto(src="@/assets/curso/temas/39.svg",alt="La  figura presenta el proceso de manejo y procesamiento de pescado. Comienza con la captura, seguida del transporte, prelavado y recepción. Luego, el pescado pasa por el degolle, corte de abdomen y eviscerado. Posteriormente, se realiza un segundo lavado, seguido de la clasificación por peso y desinfección. El proceso continúa con el empaque, refrigeración y embalaje, para finalmente ser transportado al destino final.")

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      p.mb-0 #[b Tabla 1.] Análisis de riesgos y medidas preventivas en la acuicultura
    
    .tabla-a.color-acento-contenido.mb-3(data-aos="fade")
      table
        thead
          tr
            th Análisis de riesgos etapa del proceso
            th Identifique riesgos potenciales introducidos, controlados o mantenidos en esta etapa
            th ¿Algún riesgo es significativo para la seguridad del alimento? Sí/No
            th Justifique su decisión de la columna tres
            th ¿Qué medidas preventivas pueden ser aplicadas?
            th ¿Es esta etapa un PCC? Sí/No
        tbody
          tr.fondo-color-sistema-o
            td
            td
            td
            td
            td
            td
          tr.fondo-color-sistema-p
            td
            td
            td
            td
            td
            td
          tr.fondo-color-sistema-o
            td
            td
            td
            td
            td
            td

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
