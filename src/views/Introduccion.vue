<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1(data-aos="fade-right") Introducción
  
      p.mb-4 El componente formativo, diseño y creatividad publicitaria, se enfoca en desglosar el proceso que sigue un diseñador o una empresa creativa para desarrollar, propuestas visuales que reflejen la filosofía corporativa de una organización. Bienvenido a este componente formativo: 
  
      figure.mb-5
        .video
          <iframe width="853" height="480" src="https://www.youtube.com/embed/4ghDpL7vTdg?si=7N-RRTiH-Qj6qd3g" title="Gestión de Sistemas Agroecológicos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        figcaption Video: Sena 2014.

      .row.align-items-center.mb-5
        .col-lg-6(data-aos="fade-left")
          p El diseño de un logo, es una tarea compleja que requiere el análisis de la organización, la promesa de valor y las ventajas de los servicios o productos frente a los consumidores. A partir de estos factores se inician bocetos de logos que representen la función y esencia de la compañía teniendo en cuenta la psicología del color. 
          p El diseño digital del boceto elegido exige conocimientos de las técnicas de diseño en 
            i Adobe Ilustrator, 
            | las cuales se aprendieron como proceso estético y tecnológico. Finalmente, al diseñar el logo, es necesario ponerlo a prueba con la opinión pública para lograr modificarlo o mejorarlo para así presentar el logo final al cliente.
          
        .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img.img-t.m-auto(src='@/assets/curso/temas/intro/img01.png', alt='Imagen Decorativa')
        
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
