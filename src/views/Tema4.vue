<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Análisis de datos

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secund.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema4/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 Es el proceso de examinar, organizar, comparar e interpretar datos con el propósito de obtener información útil para comprender una situación y apoyar la toma de decisiones. Una vez que los datos han sido recolectados, revisados y organizados, es posible identificar comportamientos, tendencias, diferencias, relaciones o situaciones que requieren atención.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-7
        p.mb-3 En el contexto comercial, el análisis de datos permite responder preguntas como: 
        ul.lista-ul.mb-3
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 ¿qué productos tienen mayor demanda?
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 ¿qué características tienen los clientes?
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 ¿cómo se comportan las ventas?
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 ¿cuáles son las principales causas de insatisfacción?
          li.d-flex.mb-0
            i.fas.fa-user
            p.mb-0 ¿qué acciones podrían contribuir a mejorar los resultados? 
        p.mb-0 Para responderlas pueden utilizarse procedimientos estadísticos, herramientas digitales y diferentes técnicas de análisis, según el tipo y la cantidad de datos disponibles.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema4/2.png')


    separador
    #t_4_1.titulo-segundo.mb-5
      h2 4.1 Antecedentes del análisis de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-0.d-none.d-lg-block.pe-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/tema4/3.png')
      .col-lg-7.ps-lg-0(data-aos="fade-left")
        .bg9.mb-0.p-4.cen
          img.img-t.mb-4.mx-lg-2(src='@/assets/curso/tema4/5.svg')
          p.mb-4.mx-lg-2 Corresponden a información, estudios, informes, registros o análisis realizados previamente sobre un tema relacionado con la situación que se desea estudiar. Su consulta permite conocer qué información existe, identificar resultados anteriores y disponer de elementos que ayuden a orientar el análisis actual.
          p.mb-0.mx-lg-2 Por ejemplo, antes de analizar la disminución de las ventas de un producto, pueden consultarse informes comerciales de periodos anteriores, registros de ventas, estudios de mercado, reportes de satisfacción del cliente o información sobre el comportamiento del sector.

    p.mb-4 Al revisar los antecedentes es conveniente identificar:
    ul.lista-ul.mb-4
      li.d-flex.mb-2
        i.fas.fa-user
        p.mb-0 #[b Autor o entidad responsable:] permite reconocer quién elaboró la información.
      li.d-flex.mb-2
        i.fas.fa-user
        p.mb-0 #[b Propósito:] indica qué situación o problema fue estudiado.
      li.d-flex.mb-2
        i.fas.fa-user
        p.mb-0 #[b Periodo y contexto:] permite establecer cuándo y dónde se obtuvo la información.
      li.d-flex.mb-2
        i.fas.fa-user
        p.mb-0 #[b Datos y fuentes utilizadas:] ayudan a determinar de dónde procede la información.
      li.d-flex.mb-2
        i.fas.fa-user
        p.mb-0 #[b Metodología:] explica cómo se recopilaron y analizaron los datos.
      li.d-flex.mb-2
        i.fas.fa-user
        p.mb-0 #[b Principales resultados:] permiten identificar hallazgos relacionados con el análisis que se está realizando.
      li.d-flex.mb-0
        i.fas.fa-user
        p.mb-0 #[b Pertinencia y actualidad:] ayudan a determinar si la información continúa siendo útil para el propósito establecido.

    p.mb-0 La revisión de antecedentes evita comenzar el análisis sin información previa y proporciona un punto de referencia para comparar los nuevos resultados.


    separador
    #t_4_2.titulo-segundo.mb-5
      h2 4.2 Tipos de análisis de datos

    p.mb-4 El tipo de análisis se selecciona de acuerdo con el propósito y las preguntas que se desean responder. Entre los principales se encuentran el descriptivo, diagnóstico, predictivo y prescriptivo.

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="Análisis descriptivo: ¿qué ocurrió?")
            .col-lg-12
              p.mb-0 Permite organizar y resumir los datos para conocer las características de una situación. Puede utilizar cantidades, porcentajes, promedios, tablas o gráficos. Por ejemplo, determinar cuáles fueron los productos más vendidos durante el último mes.
          .row.align-items-center(titulo="Análisis diagnóstico: ¿por qué ocurrió?")
            .col-lg-12
              p.mb-0 Busca identificar posibles factores asociados con un resultado o comportamiento. Para ello se comparan variables, periodos, segmentos u otras características. Por ejemplo, analizar si una disminución en las ventas coincide con cambios en el precio, disponibilidad del producto o comportamiento de los clientes.
          .row.align-items-center(titulo="Análisis predictivo: ¿qué podría ocurrir?")
            .col-lg-12
              p.mb-0 Utiliza datos históricos y patrones identificados para estimar posibles comportamientos futuros. Por ejemplo, utilizar las ventas de periodos anteriores para estimar la demanda de un producto durante una próxima temporada. Las predicciones representan estimaciones y no garantizan que un resultado ocurra.
          .row.align-items-center(titulo="Análisis prescriptivo: ¿qué se podría hacer?")
            .col-lg-12
              p.mb-0 Utiliza los resultados obtenidos para comparar alternativas y orientar acciones que permitan alcanzar un objetivo. Por ejemplo, analizar diferentes estrategias de promoción para determinar cuál podría contribuir mejor al incremento de las ventas.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema4/6.png')

    p.mb-0 De esta manera, el análisis de datos no se limita a describir resultados, sino que puede avanzar hacia la comprensión de una situación y la selección de alternativas para la toma de decisiones.
    

    separador
    #t_4_3.titulo-segundo.mb-5
      h2 4.3 Técnicas de análisis de datos

    p.mb-4 Son procedimientos utilizados para organizar, explorar, comparar e interpretar los datos con el propósito de obtener información relevante. La técnica seleccionada dependerá del objetivo del análisis, del tipo de variables y de la cantidad y calidad de los datos disponibles.
    p.mb-5 Entre las técnicas que pueden aplicarse se encuentran:

    ul.lista-ul.mb-4
      li.d-flex.mb-2
        i.fas.fa-user
        p.mb-0 #[b Tabulación:] organiza los datos en tablas para facilitar su lectura y comparación.
      li.d-flex.mb-2
        i.fas.fa-user
        p.mb-0 #[b Distribución de frecuencias:] permite establecer cuántas veces aparece determinado valor o categoría.
      li.d-flex.mb-2
        i.fas.fa-user
        p.mb-0 #[b Porcentajes y proporciones:] facilitan la comparación entre categorías o grupos.
      li.d-flex.mb-2
        i.fas.fa-user
        p.mb-0 #[b Medidas de tendencia central:] la media, mediana y moda permiten identificar valores representativos de un conjunto de datos.
      li.d-flex.mb-2
        i.fas.fa-user
        p.mb-0 #[b Medidas de dispersión:] permiten determinar qué tanto varían los datos respecto a un valor central.
      li.d-flex.mb-2
        i.fas.fa-user
        p.mb-0 #[b Análisis comparativo:] permite identificar semejanzas, diferencias o cambios entre periodos, productos, clientes u otras categorías.
      li.d-flex.mb-2
        i.fas.fa-user
        p.mb-0 #[b Análisis de tendencias:] ayuda a identificar patrones de crecimiento, disminución o estabilidad a través del tiempo.
      li.d-flex.mb-0
        i.fas.fa-user
        p.mb-0 #[b Cruce de variables:] permite explorar posibles relaciones entre dos o más características, por ejemplo, entre edad del cliente y canal de compra preferido.

    p.mb-5 Actualmente, las herramientas TIC facilitan estas actividades mediante hojas de cálculo, bases de datos, sistemas de gestión de clientes (CRM), herramientas de inteligencia de negocios y aplicaciones para la representación y análisis de información.

    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema2/ico.svg')")
      h3 #[em Big data] y minería de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bg8.p-lg-5.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8.mb-lg-0.mb-4
              p.mb-4 Cuando las organizaciones manejan grandes cantidades de información también pueden emplearse conceptos y técnicas más avanzadas, como #[em big data] y minería de datos (#[em data mining]). Aunque están relacionados, no significan lo mismo.
              p.mb-0 El #[em big data] hace referencia a conjuntos de datos cuyo volumen, variedad o velocidad de generación pueden requerir tecnologías especializadas para su almacenamiento, procesamiento y análisis. Estos datos pueden proceder, por ejemplo, de transacciones comerciales, plataformas digitales, dispositivos, aplicaciones o interacciones de los clientes. 
            .col-lg-4
              img.img-t.img-a(src='@/assets/curso/tema4/7.svg')

    p.mb-5 La minería de datos, por su parte, comprende técnicas orientadas a explorar conjuntos de datos para descubrir patrones, relaciones o tendencias que pueden no ser evidentes inicialmente. Por ejemplo, una empresa podría analizar sus registros de compra para identificar productos que suelen adquirirse conjuntamente o determinados comportamientos de sus clientes.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema4/8.png')
      .col-lg-7
        p.mb-4 Por tanto, una diferencia sencilla es que #[em big data] se relaciona principalmente con las características y gestión de grandes conjuntos de datos, mientras que la minería de datos se orienta a descubrir información y patrones útiles contenidos en los datos.
        p.mb-4 En ambos casos, la tecnología facilita el procesamiento y análisis, pero la calidad de los resultados continúa dependiendo de aspectos fundamentales como la calidad de los datos, la técnica seleccionada y la adecuada interpretación de los resultados.
        p.mb-0 Para ampliar la comprensión sobre el uso de las TIC en la gestión de la información, se invita a consultar el pódcast, en el que se presenta, mediante una situación del contexto comercial, cómo los datos pueden transformarse en información útil para apoyar la toma de decisiones.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema4/9.svg')
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.color-primario.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.p-lg-5.h-100
                TarjetaAudio.color-acento-botones.mb-0(
                texto="Del dato a la decisión: el poder de la información en las ventas"
                :audio="require_src('@/assets/actividad/audio/end-game-success.mp3')"
              ).mb-0
                p.mb-0 


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
