<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se describe una visión general sobre los aspectos clave de la producción de imágenes digitales. Comienza con el diseño de logos abarca varios tipos: icónico/simbólico, tipográfico, ilustrativo, gráficos/descriptivos y emblemas. Cada uno sigue principios esenciales que garantizan su efectividad, como la simplicidad y representatividad. También es crucial que un logo refleje la identidad de la marca y aplique correctamente la psicología del color para influir en la percepción. Además, el proceso de creación incluye un 
      i briefing 
      | que define objetivos y un 
      i briefing 
      | creativo que guía la idea original. Igualmente, el diseño de una estrategia de contenido y una codificación del mensaje publicitario que atraiga al público y a las empresas.
    p Finalmente, es importante que el logo evoque fielmente la representación de la idea creativa y se difunda de manera efectiva al público por los diferentes medios publicitarios.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
