<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Técnicas de evaluación de la información

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema5/1.png ')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Una vez recolectada, organizada y analizada la información, es necesario evaluarla antes de utilizarla o comunicar sus resultados. La evaluación permite determinar si la información reúne las condiciones necesarias para responder al propósito establecido y servir de apoyo a una decisión. 
            br
            br
            p.mb-0 Evaluar la información implica revisar tanto la calidad de los datos como la confiabilidad de las fuentes y la coherencia de los resultados obtenidos. Una información abundante no necesariamente es útil; debe ser pertinente, comprensible, actual y suficientemente confiable para el contexto en el que será utilizada.

    p.mb-4 Para realizar esta evaluación pueden considerarse los siguientes criterios:

    ul.lista-ul.mb-5
      li.d-flex.mb-2
        i.fas.fa-user
        p.mb-0 #[b Pertinencia:] determina si la información está relacionada directamente con el propósito o necesidad establecida.
      li.d-flex.mb-2
        i.fas.fa-user
        p.mb-0 #[b Confiabilidad:] permite establecer si la información procede de fuentes reconocidas o verificables y si fue obtenida mediante procedimientos adecuados.
      li.d-flex.mb-2
        i.fas.fa-user
        p.mb-0 #[b Actualidad:] comprueba si la fecha o periodo de la información es apropiado para el análisis que se realiza.
      li.d-flex.mb-2
        i.fas.fa-user
        p.mb-0 #[b Exactitud:] permite revisar si los datos son correctos y están libres de errores que puedan afectar su interpretación.
      li.d-flex.mb-2
        i.fas.fa-user
        p.mb-0 #[b Suficiencia:] establece si la cantidad y el nivel de detalle de la información permiten responder a la necesidad planteada.
      li.d-flex.mb-2
        i.fas.fa-user
        p.mb-0 #[b Coherencia:] verifica que los datos y resultados mantengan una relación lógica y que no existan contradicciones sin explicación.
      li.d-flex.mb-0
        i.fas.fa-user
        p.mb-0 #[b Objetividad:] permite identificar si la información presenta los hechos de manera equilibrada o si existen intereses, opiniones o sesgos que puedan influir en su contenido.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bg10.p-lg-5.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-4
              img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema5/2.svg')
            .col-lg-8
              p.mb-0 Por ejemplo, si un asesor desea conocer las preferencias de los clientes, no sería suficiente utilizar comentarios publicados hace varios años o información procedente de una fuente desconocida. Será necesario comprobar que los datos sean actuales, pertinentes y confiables antes de utilizarlos para orientar una estrategia comercial.

    p.mb-0 La evaluación también permite detectar datos duplicados, incompletos, inconsistentes o poco confiables, los cuales deben revisarse antes de elaborar conclusiones. De esta manera, se disminuye el riesgo de tomar decisiones basadas en información de baja calidad.


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
