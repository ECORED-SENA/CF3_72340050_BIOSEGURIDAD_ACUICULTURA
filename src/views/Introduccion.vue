<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-4.pb-md-4
  
    .titulo-principal.color-acento-contenido.mb-3(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.pt-3.pb-5
        .row.align-items-center.mb-4
          .col(data-aos="fade-right")
            p.mb-0 La verificación de las condiciones de #[b bioseguridad] es esencial para evaluar la efectividad del plan estructurado y la implementación de nuevas medidas, adaptadas a las condiciones cambiantes dentro de la #[b explotación acuícola]. Este proceso abarca desde el inicio del ciclo de producción hasta su finalización, incluyendo la posible transformación del producto.
          .col-md-auto.order-first.order-md-last(data-aos="fade-left")
            figure.mb-4.mb-md-0
              img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 190px;")
        
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/2.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 Durante la verificación, es necesario utilizar una #[b lista de verificación] que esté alineada con el proceso de producción, considerando la inocuidad alimentaria, la seguridad del personal y el cuidado del medio ambiente, entre otros aspectos. 
        
        p.mb-3(data-aos="fade-right") Cabe destacar que la verificación puede ser autogestionada o realizarse a través de un tercero que garantice imparcialidad en el proceso.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
