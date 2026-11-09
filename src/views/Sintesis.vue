<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La gestión de la información comprende un conjunto de procesos que permiten recolectar, organizar, procesar, analizar y evaluar datos para transformarlos en información útil. Para ello, es necesario reconocer las fuentes y variables, aplicar técnicas de análisis, valorar la calidad de la información y comunicar los resultados mediante informes y documentos que faciliten su comprensión y apoyen la toma de decisiones en el contexto comercial.    

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Integra los procesos para recolectar, organizar, analizar y evaluar información, así como comunicar resultados para apoyar la toma de decisiones.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
