<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Informes y documentos

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-0
      .col-lg-12
        .bloque-texto-g.color-secund.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema6/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 Después de recolectar, procesar, analizar y evaluar la información, los resultados deben comunicarse de manera organizada. Los informes y documentos permiten registrar y presentar los principales hallazgos de un proceso, facilitando su consulta, comprensión y utilización por parte de las personas interesadas.
            br 
            br 
            p.mb-0 Estos documentos pueden utilizarse para comunicar resultados de ventas, comportamiento de clientes, cumplimiento de metas, niveles de satisfacción, novedades del servicio, inventarios o resultados de estudios de mercado. Su contenido y extensión dependerán del propósito, del destinatario y del tipo de información que deba comunicarse.


    separador
    #t_6_1.titulo-segundo.mb-5
      h2 6.1 Informe

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-0.d-none.d-lg-block.pe-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/tema6/2.png')
      .col-lg-7.ps-lg-0(data-aos="fade-left")
        .bg11.mb-0.p-4.cen
          img.img-t.mb-4.mx-lg-2(src='@/assets/curso/tema6/3.svg')
          p.mb-4.mx-lg-2 Es un documento que presenta de manera organizada información relacionada con una actividad, situación, problema o proceso. Su finalidad puede ser informar, describir resultados, analizar una situación, sustentar conclusiones o apoyar la toma de decisiones.
          p.mb-0.mx-lg-2 Para que un informe cumpla adecuadamente su propósito debe reunir algunas características.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 1.
          | Comparación de los enfoques para cálculo de caudal ambiental
        .tabla-a.tab1.mb-0
          table
            thead
              tr
                th Característica
                th Descripción
            tbody
              tr
                td Claridad
                td Utiliza un lenguaje comprensible y adecuado para el destinatario.
              tr
                td Coherencia
                td Organiza las ideas y los datos siguiendo una secuencia lógica.
              tr
                td Confiabilidad
                td Emplea datos y fuentes que pueden ser comprobados.
              tr
                td Objetividad
                td Fundamenta las afirmaciones en datos, hechos y evidencias verificables.
              tr
                td Pertinencia
                td Incluye información relacionada directamente con el propósito del informe.
              tr
                td Precisión
                td Presenta la información necesaria y evita ambigüedades o datos irrelevantes.
              tr
                td Presentación adecuada
                td Organiza el contenido y emplea tablas, gráficos u otros recursos cuando facilitan su comprensión.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7
        p.mb-4 La estructura puede variar según su finalidad. No obstante, un informe generalmente incluye:
        ol.lista-ol--cuadro.lista-ol--separador.mb-0
          li.d-flex
            .lista-ol--cuadro__vineta
              span a
            | Identificación o título.
          li.d-flex
            .lista-ol--cuadro__vineta
              span b
            | Introducción o propósito.
          li.d-flex
            .lista-ol--cuadro__vineta
              span c
            | Desarrollo o presentación de resultados.
          li.d-flex
            .lista-ol--cuadro__vineta
              span d
            | Conclusiones.
          li.d-flex
            .lista-ol--cuadro__vineta
              span e
            | Recomendaciones (cuando corresponda).
          li.d-flex
            .lista-ol--cuadro__vineta
              span f
            | Fuentes consultadas.
          .br
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema6/4.png')

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .bg3.p-lg-5.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-4
              img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema6/5.svg')
            .col-lg-8
              p.mb-0 Por ejemplo, un informe sobre satisfacción del cliente podría explicar el propósito de la medición, presentar los resultados obtenidos mediante una encuesta, analizar los principales hallazgos y finalizar con conclusiones y recomendaciones para mejorar el servicio.


    separador
    #t_6_2.titulo-segundo.mb-5
      h2 6.2 Tipos de informes

    p.mb-4(data-aos="fade-right") Los informes pueden clasificarse según su finalidad y el tipo de información que comunican. En el ámbito administrativo y comercial son frecuentes los siguientes:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                .caja-img.mb-0
                  img(src='@/assets/curso/tema6/6.svg')
            h4.mb-4.text-center Informe descriptivo
            p.mb-0.text-center Presenta hechos, características o resultados de una situación sin profundizar necesariamente en sus causas. Ejemplo: informe mensual de ventas.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                .caja-img.mb-0
                  img(src='@/assets/curso/tema6/7.svg')
            h4.mb-4.text-center Informe analítico
            p.mb-0.text-center Además de presentar información, establece relaciones, interpreta resultados e identifica posibles causas o implicaciones. Ejemplo: análisis de la disminución de ventas durante un periodo.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                .caja-img.mb-0
                  img(src='@/assets/curso/tema6/8.svg')
            h4.mb-4.text-center Informe técnico
            p.mb-0.text-center Comunica procedimientos, resultados o hallazgos relacionados con una actividad específica utilizando información especializada.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                .caja-img.mb-0
                  img(src='@/assets/curso/tema6/9.svg')
            h4.mb-4.text-center Informe ejecutivo
            p.mb-0.text-center Sintetiza los aspectos más relevantes de un análisis para facilitar una lectura rápida y apoyar la toma de decisiones.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                .caja-img.mb-0
                  img(src='@/assets/curso/tema6/10.svg')
            h4.mb-4.text-center Informe de gestión
            p.mb-0.text-center Presenta las actividades desarrolladas, resultados obtenidos, cumplimiento de metas y aspectos que requieren seguimiento.
    
    p.mb-4(data-aos="fade-right") La elección del tipo de informe dependerá principalmente de qué se desea comunicar, quién recibirá la información y para qué será utilizada.

    p.mb-0(data-aos="fade-left") En todos los casos, la calidad del informe depende de la calidad de la información que lo sustenta. Por ello, los datos deben haber sido previamente recolectados, procesados, analizados y evaluados. Un informe bien elaborado convierte los resultados del análisis en información comprensible y útil para orientar las acciones y la toma de decisiones de una organización.


</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
