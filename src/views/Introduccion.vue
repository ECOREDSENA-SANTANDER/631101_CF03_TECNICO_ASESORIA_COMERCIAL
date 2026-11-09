<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6
        img(src='@/assets/curso/intro/1.svg')
      .col-lg-6
        .bg1.p-lg-5.p-4.cen
          p.mb-0 La información constituye un recurso fundamental para el desarrollo de los procesos comerciales y la toma de decisiones, ya que permite interpretar situaciones, identificar necesidades y reducir la incertidumbre. En este componente se abordarán los conceptos de datos, información y conocimiento, su importancia y fuentes, así como las técnicas para su recolección. También se estudiarán las variables, sus tipos y clasificación como elementos necesarios para organizar y comprender la información.

    p.mb-5(data-aos="fade-left") Asimismo, se desarrollarán aspectos relacionados con el procesamiento y análisis de datos, considerando sus antecedentes, tipos y principales técnicas de análisis. Estos conocimientos se complementarán con técnicas de evaluación y con la elaboración de informes y documentos, de manera que la información recopilada y procesada pueda presentarse de forma organizada, pertinente y útil para apoyar la toma de decisiones en el contexto comercial.

    .row.justify-content-center.align-items-center(data-aos="fade-right")       
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


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
