<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 La información
      
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema1/1.png ')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En la actualidad, la información es un recurso esencial para las personas y las organizaciones. Las decisiones relacionadas con clientes, productos, ventas, mercados y servicios requieren información pertinente y confiable. 
            br
            br
            p.mb-0 El crecimiento de internet, las redes sociales, las plataformas digitales y las herramientas tecnológicas ha incrementado considerablemente la cantidad de información disponible y la velocidad con la que esta se genera y comparte.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/2.png')
      .col-lg-7
        p.mb-4 Sin embargo, disponer de grandes cantidades de información no significa necesariamente estar mejor informado. En los entornos digitales circulan contenidos confiables junto con información desactualizada, imprecisa, sesgada o falsa. Por esta razón, además de acceder a la información, es necesario desarrollar la capacidad para seleccionarla, verificarla, organizarla, procesarla y analizarla antes de utilizarla para tomar decisiones.
        p.mb-0 Por ejemplo, conocer las preferencias de los clientes, el comportamiento de las ventas, las características de la competencia o las tendencias del mercado puede contribuir a identificar oportunidades y anticipar posibles riesgos. Para comprender cómo se obtiene este conocimiento, es necesario diferenciar inicialmente los conceptos de dato, información y conocimiento.


    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Datos, información y conocimiento

    p.mb-5(data-aos="fade-left") Aunque los términos dato, información y conocimiento suelen utilizarse como si fueran equivalentes, representan diferentes niveles dentro del proceso de gestión de la información. Un dato es una representación básica de un hecho, característica o situación. Puede expresarse mediante números, palabras, fechas, categorías o registros. Por sí solo, un dato puede tener un significado limitado.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-0.d-none.d-lg-block.pe-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/tema1/3.png')
      .col-lg-7.ps-lg-0(data-aos="fade-left")
        .bg2.mb-0.p-4.cen
          img.img-t.mb-4.mx-lg-2(src='@/assets/curso/tema1/4.svg')
          p.mb-4.mx-lg-2 Por ejemplo, registrar que durante una jornada se vendieron 35 unidades de un producto constituye un dato.
          p.mb-0.mx-lg-2 La información se obtiene cuando los datos se organizan, relacionan y contextualizan para adquirir significado. Si se establece que las 35 unidades vendidas representan un aumento frente a las 20 unidades comercializadas el día anterior, los datos permiten comprender mejor lo ocurrido.

    p.mb-5(data-aos="fade-left") El conocimiento surge cuando la información se interpreta y se utiliza para comprender una situación o fundamentar una decisión. Siguiendo el ejemplo anterior, identificar que el incremento de las ventas coincidió con una promoción puede aportar conocimiento para evaluar la efectividad de esa estrategia comercial.

    .row.mb-0(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 1.
          | Proceso de transformación de datos en conocimiento para la toma de decisiones
        img(src='@/assets/curso/tema1/5.svg', alt='Secuencia que transforma datos en información y conocimiento mediante su procesamiento, análisis e interpretación para tomar decisiones.')


    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Importancia de la información

    .row.mb-5
      .col-lg-12(data-aos="fade-right")
        img(src='@/assets/curso/tema1/6.png')

    p.mb-4(data-aos="fade-right") La información permite comprender situaciones, identificar problemas, reconocer oportunidades y reducir la incertidumbre al momento de tomar decisiones. Su utilidad depende de características como la pertinencia, confiabilidad, actualidad, claridad y oportunidad.

    p.mb-5(data-aos="fade-left") Contar con información adecuada facilita conocer las necesidades y expectativas de los clientes, analizar el comportamiento de las ventas, identificar cambios en el mercado, evaluar resultados y orientar acciones comerciales. 
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .bg3.p-lg-5.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-4
              img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema1/7.svg')
            .col-lg-8
              p.mb-4 Por ejemplo, analizar las consultas y compras realizadas por los clientes puede ayudar a determinar cuáles productos tienen mayor demanda y cuáles requieren nuevas estrategias de promoción.
              p.mb-0 Por esta razón, no se trata solamente de recopilar información, sino de determinar qué información se necesita, dónde obtenerla y cómo utilizarla de manera responsable.


    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Fuentes de información

    p.mb-0(data-aos="fade-left") Una fuente de información es cualquier recurso del cual pueden obtenerse datos o conocimientos necesarios para responder una necesidad específica. Estas fuentes pueden ser personas, documentos, bases de datos, sistemas de información, publicaciones, sitios web, registros empresariales, estudios o plataformas digitales.
    p.mb-5 De acuerdo con el origen de la información, pueden distinguirse principalmente:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6.col-md-10.mb-lg-0.mb-4
        img(src='@/assets/curso/tema1/8.png')
        .bg4.p-4
          p.mb-4 #[b Fuentes primarias]
          p.mb-0 Proporcionan información obtenida directamente de personas, situaciones o hechos relacionados con el propósito del estudio. Algunos ejemplos son las encuestas, entrevistas, observaciones, formularios, grupos focales y registros obtenidos directamente de clientes.
      .col-lg-6.col-md-10
        img(src='@/assets/curso/tema1/9.png')
        .bg4.p-4
          p.mb-4 #[b Fuentes secundarias]
          p.mb-0 Contienen información que ya ha sido recopilada, organizada, analizada o publicada previamente. Entre ellas se encuentran informes, artículos, libros, estadísticas oficiales, bases de datos, estudios de mercado y documentos institucionales.
    
    p.mb-0(data-aos="fade-left") Antes de utilizar una fuente es importante valorar aspectos como su autoría, actualidad, propósito, pertinencia y confiabilidad. Esta verificación adquiere especial importancia cuando la información procede de internet o de redes sociales.


    separador
    #t_1_4.titulo-segundo.mb-5
      h2 1.4 Técnicas de recolección de información

    .row.mb-5
      .col-lg-12(data-aos="fade-right")
        img(src='@/assets/curso/tema1/10.png')
    
    p.mb-4(data-aos="fade-left") La recolección de información consiste en obtener de manera organizada los datos necesarios para responder a un propósito previamente establecido; la técnica utilizada dependerá del tipo de información requerida, las características de la población y los recursos disponibles.

    p.mb-5(data-aos="fade-right") Para recolectar información se pueden utilizar diferentes técnicas, cuya elección depende del propósito y del tipo de datos que se necesitan obtener. Las principales son:
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b2.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                .caja-img.mb-0
                  img(src='@/assets/curso/tema1/11.svg')
            h4.mb-4.text-center Observación
            p.mb-0.text-center Consiste en registrar hechos, situaciones o comportamientos tal como ocurren.
          .tarjeta.tarjeta--slyder.b2.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                .caja-img.mb-0
                  img(src='@/assets/curso/tema1/12.svg')
            h4.mb-4.text-center Entrevista
            p.mb-0.text-center Permite obtener información mediante una conversación orientada por preguntas.
          .tarjeta.tarjeta--slyder.b2.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                .caja-img.mb-0
                  img(src='@/assets/curso/tema1/13.svg')
            h4.mb-4.text-center Encuesta
            p.mb-0.text-center Recopila información de varias personas mediante un conjunto de preguntas previamente definidas.
          .tarjeta.tarjeta--slyder.b2.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                .caja-img.mb-0
                  img(src='@/assets/curso/tema1/14.svg')
            h4.mb-4.text-center Grupo focal
            p.mb-0.text-center Reúne a varias personas para conocer y analizar sus opiniones, experiencias o percepciones sobre un tema.
          .tarjeta.tarjeta--slyder.b2.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                .caja-img.mb-0
                  img(src='@/assets/curso/tema1/15.svg')
            h4.mb-4.text-center Revisión documental
            p.mb-0.text-center Permite recopilar información existente en documentos, informes, registros, bases de datos y otras fuentes disponibles.
    
    p.mb-4(data-aos="fade-right") Actualmente, estas técnicas también pueden apoyarse en herramientas TIC como formularios digitales, hojas de cálculo, sistemas de gestión de clientes (CRM), plataformas de comercio electrónico y otras aplicaciones para registrar y organizar información.

    p.mb-0(data-aos="fade-left") La técnica seleccionada debe permitir obtener datos pertinentes, suficientes y confiables, procurando además respetar la privacidad y el tratamiento adecuado de la información recopilada.
    
    
    separador
    #t_1_5.titulo-segundo.mb-2
      h2 1.5 Análisis de la información

    .row.fd1.fon.mb-0(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-8
            .row.justify-content-center.align-items-center.mb-4
              .col-lg-2
                img.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/17.svg')
              .col-lg-10.ps-lg-0
                p.mb-0 Una vez recopilados y organizados los datos, es necesario analizarlos para identificar patrones, relaciones, diferencias o tendencias que permitan comprender una situación y obtener conclusiones útiles. El tipo de análisis dependerá de las características de la información y del propósito establecido.
            p.mb-4 El análisis cualitativo trabaja principalmente con información expresada mediante palabras, opiniones, experiencias, percepciones o comportamientos. Busca comprender significados, razones y características de una situación. Por ejemplo, analizar los comentarios de los clientes para identificar las principales razones de satisfacción o inconformidad con un servicio.
            p.mb-4 El análisis cuantitativo, por su parte, utiliza datos numéricos y procedimientos estadísticos para medir, comparar e identificar tendencias. Por ejemplo, calcular el porcentaje de clientes satisfechos, comparar las ventas mensuales o determinar cuáles productos presentan mayor participación en las ventas.
            p.mb-0 Ambos enfoques pueden complementarse. Mientras los datos cuantitativos permiten establecer cuánto, con qué frecuencia o en qué proporción ocurre algo, la información cualitativa contribuye a comprender cómo y por qué ocurre. Su adecuada utilización facilita transformar los datos recopilados en información útil para la toma de decisiones comerciales.
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/tema1/16.png')


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
