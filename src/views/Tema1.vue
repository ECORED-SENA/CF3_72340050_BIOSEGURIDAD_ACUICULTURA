<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Examen de puntos críticos en el programa de bioseguridad
    
    p.mb-4(data-aos="fade-right") Es fundamental identificar los puntos de control y los puntos críticos de control en un programa de bioseguridad.

    .row.justify-content-center(data-aos="fade-up")
      .col-lg-3.pe-lg-0.align-content-center
        figure
          img.mx-auto(src="@/assets/curso/temas/4.png",style="max-width: 300px;")
      .col-lg-5.ps-lg-0
        .fondo-color-sistema-i.h-100.align-content-center.p-4
          p.mb-4.fw-bold Puntos de control
          p.mb-0 Estos corresponden a los peligros que se pueden detectar antes de que el sistema entre en funcionamiento o antes de iniciar la producción. También incluyen aspectos externos al proceso, como las instalaciones, la presencia de otras explotaciones cercanas y los vectores de transmisión de patógenos.

    .titulo-decorativo.my-4(data-aos="fade-right")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Puntos críticos de control
    
    p.mb-0(data-aos="fade-left") Se centran en la detección de peligros mientras el proceso está en desarrollo, es decir, cuando la explotación está en funcionamiento. Los puntos críticos de control de bioseguridad en una explotación acuícola incluyen:

    .fondo-personalizado-1.f2
      .fondo-personalizado-1__contenido.pt-5
        .row.justify-content-center.pb-2(data-aos="flip-up")
          .col-sm-6.col-md-4.col-perso-lg.mb-4
            .fondo-color-sistema-j.h-100
              figure
                img.mx-auto(src="@/assets/curso/temas/5.png")
              p.mb-0.fw-bolder.text-center.p-4 Calidad del agua
          .col-sm-6.col-md-4.col-perso-lg.mb-4
            .fondo-color-sistema-j.h-100
              figure
                img.mx-auto(src="@/assets/curso/temas/6.png")
              p.mb-0.fw-bolder.text-center.p-4 Alimento balanceado
          .col-sm-6.col-md-4.col-perso-lg.mb-4
            .fondo-color-sistema-j.h-100
              figure
                img.mx-auto(src="@/assets/curso/temas/7.png")
              p.mb-0.fw-bolder.text-center.p-4 Control de plagas y vectores
          .col-sm-6.col-md-4.col-perso-lg.mb-4
            .fondo-color-sistema-j.h-100
              figure
                img.mx-auto(src="@/assets/curso/temas/8.png")
              p.mb-0.fw-bolder.text-center.p-4 Manejo de visitantes
          .col-sm-6.col-md-4.col-perso-lg.mb-4
            .fondo-color-sistema-j.h-100
              figure
                img.mx-auto(src="@/assets/curso/temas/9.png")
              p.mb-0.fw-bolder.text-center.p-4 Entrada y salida de organismos acuáticos
        
        p.mb-4.fw-bold(data-aos="fade") Otros puntos son:

        .row.justify-content-center(data-aos="zoom-in-out")
          .col-lg-4.col-xl-3.col-md-6.mb-4
            .fondo-color-secundario.p-4.pt-3.h-100
              figure.mb-3
                img.mx-auto(src="@/assets/curso/temas/10.svg",style="max-width: 105px;")
              p.text-center.mb-0.fw-bolder Equipos utilizados
          .col-lg-4.col-xl-3.col-md-6.mb-4
            .fondo-color-secundario.p-4.pt-3.h-100
              figure.mb-3
                img.mx-auto(src="@/assets/curso/temas/11.svg",style="max-width: 105px;")
              p.text-center.mb-0.fw-bolder Medicamentos veterinarios
          .col-lg-4.col-xl-3.col-md-6.mb-4
            .fondo-color-secundario.p-4.pt-3.h-100
              figure.mb-3
                img.mx-auto(src="@/assets/curso/temas/12.svg",style="max-width: 105px;")
              p.text-center.mb-0.fw-bolder Limpieza y desinfección general
          .col-lg-4.col-xl-3.col-md-6.mb-4
            .fondo-color-secundario.p-4.pt-3.h-100
              figure.mb-3
                img.mx-auto(src="@/assets/curso/temas/13.svg",style="max-width: 105px;")
              p.text-center.mb-0.fw-bolder Manejo de residuos
          .col-lg-4.col-xl-3.col-md-6.mb-4
            .fondo-color-secundario.p-4.pt-3.h-100
              figure.mb-3
                img.mx-auto(src="@/assets/curso/temas/14.svg",style="max-width: 105px;")
              p.text-center.mb-0.fw-bolder Eliminación de la mortalidad
          .col-lg-4.col-xl-3.col-md-6.mb-4
            .fondo-color-secundario.p-4.pt-3.h-100
              figure.mb-3
                img.mx-auto(src="@/assets/curso/temas/15.svg",style="max-width: 105px;")
              p.text-center.mb-0.fw-bolder Personal o recurso humano


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass">
.col-perso-lg
  @media (min-width: 992px)
    flex: 0 0 20%
    max-width: 20%
</style>
