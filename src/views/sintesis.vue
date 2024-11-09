<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        .fondo-color-sistema-h.py-4.py-lg-5.borde-20
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis presenta el proceso de verificación de registros en HACCP, que se divide en verificación de registros y HACCP. La verificación de registros incluye la comprobación de aspectos dentro del sistema HACCP y los campos de verificación, abarcando puntos críticos de control, límites críticos, monitorización, acciones preventivas y acciones correctivas. Por otro lado, HACCP se enfoca en el código de verificación y observaciones, incluyendo el registro de cumplimiento del sistema y un espacio para comentarios relevantes sobre las acciones y resultados de la verificación.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
