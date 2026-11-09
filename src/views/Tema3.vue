<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Procesamiento de la información

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema3/1.png ')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Comprende las actividades mediante las cuales los datos recolectados se revisan, organizan y preparan para su posterior análisis. Su finalidad es transformar datos dispersos o sin organizar en información estructurada que pueda ser interpretada y utilizada para apoyar la toma de decisiones.  
            br
            br
            p.mb-0 Por ejemplo, si una empresa desea conocer la satisfacción de sus clientes, primero debe establecer qué necesita conocer, seleccionar a quiénes consultará y definir cómo recopilará sus respuestas. Una vez obtenidos los datos, estos deben ser revisados y organizados antes de realizar el análisis.

    p.mb-5(data-aos="fade-left") Antes de iniciar este proceso es necesario tener claridad sobre el propósito de la información, identificar las personas, situaciones o fuentes de las cuales se obtendrán los datos y seleccionar las técnicas e instrumentos adecuados para su recolección.

    .row.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 3.
          | Etapas del procesamiento de la información 
        .bg8.p-lg-5.p-4
          img.img-t.img-a(src='@/assets/curso/tema3/2.png', alt='Secuencia para recolectar, depurar, organizar, analizar e interpretar datos hasta presentar información útil para la toma de decisiones.')

    p.mb-4(data-aos="fade-left") Durante la revisión y depuración se identifican datos incompletos, duplicados, inconsistentes o incorrectos. Posteriormente, la información se clasifica y organiza según las variables definidas y puede registrarse en tablas, hojas de cálculo, bases de datos u otras herramientas TIC.

    p.mb-0(data-aos="fade-right") Un adecuado procesamiento permite disponer de información ordenada, consistente y útil, facilitando el análisis posterior y disminuyendo el riesgo de tomar decisiones basadas en datos incompletos o mal organizados.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
