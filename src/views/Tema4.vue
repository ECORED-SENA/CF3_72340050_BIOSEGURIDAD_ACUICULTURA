<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Verificación
    
    .row.mb-5
      .col-lg-8(data-aos="fade-right")
        .fondo-color-sistema-i.p-4.h-100.align-content-center
          p.mb-0 La verificación es el procedimiento mediante el cual se comprueba la veracidad de algo. En términos generales, verificamos información, datos y procesos de manera cotidiana. Sin embargo, cuando la verificación se realiza desde una perspectiva científica, requiere mayor rigurosidad, ya que se necesita certeza y claridad sobre cualquier fenómeno.
      .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/40.png",style="max-width: 400px;")
    
    .row.justify-content-center.mb-4
      .col-lg-6
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.mb-0 #[b Tabla 2.] Ejemplo 1 verificación de registros
        
        .tabla-a.vari-p-1.color-acento-contenido.mb-3(data-aos="fade")
          table
            thead
              tr
                th Campo
                th Cumple
                th No cumple
            tbody
              tr.fondo-color-sistema-o
                td Fecha
                td
                td
              tr.fondo-color-sistema-p
                td Análisis de laboratorio
                td
                td
              tr.fondo-color-sistema-o
                td Calibración de equipos
                td
                td
              tr.fondo-color-sistema-p
                td Mantenimiento
                td
                td
              tr.fondo-color-sistema-o
                td Monitoreo PCC
                td
                td
              tr.fondo-color-sistema-p
                td Limpieza y desinfección
                td
                td
              tr.fondo-color-sistema-o
                td Capacitación
                td
                td
              tr.fondo-color-sistema-p
                td Quejas y reclamos
                td
                td
              tr.fondo-color-sistema-o
                td Control de proveedores
                td
                td
    
    p.fw-bold.mb-4(data-aos="fade") Otro formato es: 

    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Tabla 3.] Ejemplo 2 verificación de registros
        
        .tabla-a.vari-p-1.color-acento-contenido.mb-3(data-aos="fade")
          table
            thead
              tr
                th Campo
                th Cumple
                th No cumple
            tbody
              tr.fondo-color-sistema-o
                td Fecha
                td
                td
              tr.fondo-color-sistema-p
                td Puntos críticos de control
                td
                td
              tr.fondo-color-sistema-o
                td Límites críticos
                td
                td
              tr.fondo-color-sistema-p
                td Monitorización
                td
                td
              tr.fondo-color-sistema-o
                td Acciones preventivas
                td
                td
              tr.fondo-color-sistema-p
                td Acciones correctivas
                td
                td
    
    p.mb-4(data-aos="fade-up") A continuación, se describen los aspectos de verificación y los hallazgos que pueden evaluarse dentro de una explotación acuícola, considerando que cada empresa es diferente, aunque comparten algunas características que pueden ser objeto de verificación:

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
