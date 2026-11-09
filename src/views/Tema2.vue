<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Variables de información

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secund.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema2/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 Una #[b variable] es una característica que puede tomar diferentes valores entre personas, productos, situaciones o periodos de tiempo; las variables permiten organizar la información recopilada y establecer qué aspectos serán analizados o comparados.
            br 
            br 
            p.mb-0 Por ejemplo, al estudiar el comportamiento de los clientes de un establecimiento comercial pueden considerarse variables como la edad, medio de pago, frecuencia de compra, nivel de satisfacción, cantidad de productos adquiridos o valor de la compra. Cada una aporta información diferente y puede requerir una forma particular de registro y análisis.

    p.mb-0 Identificar correctamente las variables es importante porque permite determinar qué datos se necesitan, cómo deben recolectarse, cómo pueden organizarse y qué tipo de análisis es adecuado realizar.


    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Tipos de variables en el análisis de datos

    p.mb-5 De acuerdo con la naturaleza de los datos que representan, las variables pueden clasificarse en cualitativas y cuantitativas.
    
    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema2/ico.svg')")
      h3 Variables cualitativas 
    
    p.mb-4 Representan características, cualidades o categorías que no se expresan principalmente como cantidades numéricas.
    p.mb-4 #[b Por ejemplo:] tipo de cliente, medio de pago, canal de compra o nivel de satisfacción.
    p.mb-5 Variables cualitativas pueden ser:

    .row.justify-content-center.align-items.mb-5
      .col-lg-6.col-md-6.mb-lg-0.mb-md-0.mb-4
        .bg4.p-lg-5.p-4.h-100
          .bg5.p-1.mb-4
            h4.mb-0.text-white.ps-3 Nominales
          p.mb-4 Agrupan la información en categorías sin establecer un orden entre ellas.
          p.mb-0 #[b Ejemplo:] medio de pago: efectivo, tarjeta o transferencia.
      .col-lg-6.col-md-6
        .bg4.p-lg-5.p-4.h-100
          .bg5.p-1.mb-4
            h4.mb-0.text-white.ps-3 Ordinales
          p.mb-4 Utilizan categorías que pueden organizarse siguiendo un orden.
          p.mb-0 #[b Ejemplo:] nivel de satisfacción: bajo, medio o alto.

    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema2/ico.svg')")
      h3 Variables cuantitativas

    p.mb-4 Representan cantidades que pueden expresarse mediante valores numéricos y sobre las cuales es posible realizar operaciones matemáticas. 
    p.mb-4 #[b Por ejemplo:] número de compras, edad, valor de una venta o tiempo de atención.
    p.mb-5 Variables cuantitativas pueden ser:

    .row.justify-content-center.align-items.mb-5
      .col-lg-6.col-md-6.mb-lg-0.mb-md-0.mb-4
        .bg6.p-lg-5.p-4.h-100
          .bg7.p-1.mb-4
            h4.mb-0.text-white.ps-3 Discretas
          p.mb-4 Toman valores que generalmente resultan de un conteo. 
          p.mb-0 #[b Ejemplo:] número de productos comprados: 1, 2, 3 o más.
      .col-lg-6.col-md-6
        .bg6.p-lg-5.p-4.h-100
          .bg7.p-1.mb-4
            h4.mb-0.text-white.ps-3 Continuas
          p.mb-4 Toman valores que generalmente resultan de un conteo. 
          p.mb-0 #[b Ejemplo:] número de productos comprados: 1, 2, 3 o más.

    p.mb-0 Esta clasificación ayuda a determinar la manera más adecuada de registrar, organizar, representar y analizar los datos.


    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Clasificación de las variables según su relación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-4 Cuando el propósito del análisis es estudiar si un factor puede estar relacionado con un determinado resultado, las variables también pueden clasificarse como independientes y dependientes. 
        p.mb-4 La variable independiente corresponde al factor que se considera explicativo o que puede influir sobre otro. Por ejemplo, una empresa desea analizar si el porcentaje de descuento ofrecido en una promoción influye en las ventas.
        p.mb-4 La variable dependiente corresponde al resultado que se analiza para determinar si presenta cambios asociados con la variable independiente. 
        p.mb-0 La relación podría expresarse de manera sencilla así:
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/2.png')

    .row.mb-5
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 2.
          | Relación entre variable independiente y variable dependiente
        .bg8.p-lg-5.p-4
          img.img-t.img-a(src='@/assets/curso/tema2/3.png', alt='Relación en la que el porcentaje de descuento actúa como variable independiente y la cantidad vendida como variable dependiente.')

    p.mb-0 Es importante señalar que encontrar una relación entre dos variables no demuestra automáticamente que una sea la causa de la otra. Para establecer una relación causal se requiere un análisis más riguroso y considerar otros factores que puedan influir en los resultados.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
