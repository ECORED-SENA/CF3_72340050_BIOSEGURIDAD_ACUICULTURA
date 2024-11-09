<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Mapa de riesgos
    
    p.mb-4(data-aos="fade") El mapa de riesgos es una herramienta que facilita la organización de la información sobre los riesgos en las empresas, permitiendo comprender su importancia con el objetivo de diseñar estrategias adecuadas para su gestión.

    .row.mb-4
      .col-lg-7(data-aos="fade-right")
        .fondo-color-sistema-k.p-4
          p.mb-0 Generalmente, los mapas de riesgos se representan mediante gráficos o datos que permiten calificar los riesgos y sus variables, evaluándolos según el método utilizado por cada empresa. Estos datos se agrupan en tablas que contienen información sobre su calificación, evaluación, controles y otros elementos necesarios para exponer el estado de la empresa y sus procesos frente a los riesgos que la pueden afectar, lo que facilita la implementación de medidas de tratamiento.
      .col-lg-5.order-first.order-lg-last.mb-4.mb-lg-0(data-aos="fade-left")
        .fondo-color-secundario.h-100.p-3.align-content-center
          figure
            img.mx-auto(src="@/assets/curso/temas/16.svg",style="max-width: 464px;")
    
    p.mb-5.fw-bold(data-aos="fade-right") Las ventajas del mapa de riesgos son:

    .fondo-personalizado-1.f3.mb-3(data-aos="zoom-in-out")
      .fondo-personalizado-1__contenido.py-5
        .bg-white.p-4.borde-20
          PasosB.pasos-personalizado-1
            .row.align-items-center.justify-content-center.pt-lg-3(titulo="Comprensión de riesgos")
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Comprensión de riesgos
                p.mb-0 Facilita una mejor comprensión de los posibles riesgos y de los procesos involucrados en la explotación.
              .col-lg-4
                figure
                  img.mx-auto(src="@/assets/curso/temas/18.png",style="max-width: 295px;")
            .row.align-items-center.justify-content-center.pt-lg-3(titulo="Motivar administraciones")
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Motivar administraciones
                p.mb-0 La información de los mapas de riesgos puede motivar a desarrollar planes de contención e invertir en control y capacitación.
              .col-lg-4
                figure
                  img.mx-auto(src="@/assets/curso/temas/19.png",style="max-width: 295px;")
            .row.align-items-center.justify-content-center.pt-lg-3(titulo="Fomentar trabajo equipo")
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Fomentar trabajo equipo
                p.mb-0 Fomenta el trabajo en equipo durante el diseño e implementación de los mapas de riesgos, mejorando la comprensión de procedimientos.
              .col-lg-4
                figure
                  img.mx-auto(src="@/assets/curso/temas/20.png",style="max-width: 295px;")
            .row.align-items-center.justify-content-center.pt-lg-3(titulo="Evaluaciones anuales")
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Evaluaciones anuales
                p.mb-0 Contribuye a la administración al facilitar evaluaciones anuales de los riesgos y el impacto de las acciones.
              .col-lg-4
                figure
                  img.mx-auto(src="@/assets/curso/temas/21.png",style="max-width: 295px;")

</template>

<script>
export default {
  name: 'Tema2',
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
