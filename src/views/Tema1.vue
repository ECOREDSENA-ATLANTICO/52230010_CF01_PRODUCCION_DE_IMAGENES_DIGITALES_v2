<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Tipos de logos
      
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img01.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El logo o logotipo es un signo gráfico que representa una organización, un servicio o un producto en el mercado. En la actualidad existen muchos tipos de logos para identificar comercialmente una entidad, sin embargo, estos se pueden clasificar en cinco tipologías diferentes, de la siguiente manera:
  
      .tarjeta.bg01.p-4.mb-5
        .tarjeta.p-5
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-6.mb-4.mb-md-0
                p 
                  strong Icónico/Simbólico
                p Estos logos se basan en gráficos simplificados y simbólicos que reflejan de manera literal o abstracta la filosofía o idea de la organización. Usualmente, el concepto detrás del diseño de un logo icónico o simbólico, es complejo dado que es necesario transmitir valores y funciones por medio de figuras abstractas, de lo contrario, serán similares a figuras tomadas de 
                  i clipart.  
                p No son recomendables los desvanecidos u otros efectos en el diseño de logos icónicos o simbólicos. Este tipo de logos, generan un posicionamiento en la mente del consumidor con mayor rapidez debido a su naturaleza simple y simbólica.  Por ejemplo, Nike ©, Playboy ©, Shell Global S.A, entre otros.
  
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema1/img03.svg', alt='Imagen Decorativa')
                  figcaption Nota. Playboy, 2014
            
            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-8.mb-4.mb-md-0
                p 
                  strong Gráficos/Descriptivos
                p Este tipo de logo usa imágenes que reflejan la esencia de un atributo de la organización, sin los detalles de un logo completamente ilustrativo. Su construcción se basa en retratar de una forma realista el tema, naturaleza o concepto de la organización por medio de una marca pictórica. A diferencia de los logos completamente ilustrativos, estos no buscan incluir todos los detalles, sino, que se centran en capturar la esencia o un concepto clave de la marca. De este modo, logran transmitir el mensaje de manera directa y comprensible, sin sobrecargar la imagen con elementos innecesarios.
                p La construcción de estos logos se realiza a partir, de una representación realista que refleja la naturaleza o la idea principal de la organización. Este enfoque permite que el logo sea fácilmente identificable y que los espectadores puedan asociarlo rápidamente con el propósito de la empresa. Al ser pictóricos, estos logos combinan elementos gráficos con un nivel de detalle que equilibra claridad y simplicidad.
  
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/img04.svg', alt='Imagen Decorativa')
                  figcaption Nota. NBA, 2014
  
            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-4.mb-4.mb-md-0
                p 
                  strong Emblema
                p El diseño de un logo basado en un emblema se basa en la comunicación visual de un escudo con la tipografía al interior del escudo. Estos tipos de logos poseen tipografía personalizada en su diseño. Por ejemplo, UPS ©, NHL ©, Ford ©, entre otros.
  
              .col-md-8
                figure
                  img(src='@/assets/curso/temas/tema1/img05.svg', alt='Imagen Decorativa')
                  figcaption Nota. UPS, 2014
  
            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-8.mb-4.mb-md-0
                p 
                  strong Ilustrativo 
                p Los logos con ilustraciones son altamente figurativos o pictóricos porque representan la naturaleza de la organización.  Estos logos son los más detallados e incorporan dibujos, personajes o mascotas relacionados a la marca. Su enfoque es capturar y comunicar la naturaleza y los valores de la marca de manera detallada y pictórica. Este tipo de logos, no se limita a formas abstractas o simples, sino, que integra dibujos, personajes o mascotas que están estrechamente relacionados con la identidad de la empresa. 
                p La riqueza de detalles en estos logos ayuda a crear una conexión emocional con el público, facilitando que la marca sea reconocida y recordada. Al ser tan específicos, estos logos pueden transmitir la historia o el propósito de la organización de un solo vistazo. Además, suelen ser usados por empresas que desean destacar su personalidad única o crear una imagen amigable y accesible. Sin embargo, por su complejidad, es esencial que estos logos se diseñen con cuidado, asegurándose de que se mantengan efectivos en diferentes tamaños y aplicaciones.
  
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/img06.svg', alt='Imagen Decorativa')
                  figcaption Nota. (Douglas, 2011)
  
            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-8.mb-4.mb-md-0
                p 
                  strong Tipográfico  
                p El diseño de este tipo de logo, está basado en el tratamiento de la letra. En este caso se diseña el nombre de la marca con una fuente única, un juego de fuentes o una tipografía personalizada o en la combinación de diferentes fuentes para dar vida al nombre de la organización. Es un logo fácil de recordar porque involucra directamente el nombre de la marca, ya que coloca el nombre en el centro de la identidad visual, sin embargo, difícilmente transmite la idea o función de la organización, servicio o producto. 
                p Esta simplicidad también puede ser una limitación, ya que el logo en sí, no comunica directamente la función, idea o propósito del producto o servicio que representa. A pesar, de su aparente simplicidad, diseñar un logo basado en la tipografía requiere una gran habilidad para seleccionar o crear una fuente que no solo sea distintiva, sino, que también refuerce los valores y la personalidad de la marca.
                p Además, estos logos son memorables y efectivos en su simplicidad, pero dependen en gran medida del reconocimiento previo de la marca para transmitir un mensaje más profundo. 
  
  
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/img07.png', alt='Imagen Decorativa')
                  figcaption Nota. Google, 2014
          
      figure.d-flex.align-items-center.mb-4
        img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/temas/tema1/img08.png', alt='Imagen Decorativa')
        h2.mb-0 Principios en el diseño de un logo
      
      
      .row.mb-5
        .col-md-9
          p Un logotipo efectivo es aquel que es reconocido al instante, genera recordación de marca y es capaz de adaptarse fácilmente en diferentes medios. Esta inmediatez en el reconocimiento es clave para una fuerte identidad de marca.
          p Además, un buen logotipo genera recordación, es decir, deja una impresión duradera en la mente de los consumidores. Esta capacidad de permanecer en la memoria es crucial para construir y mantener la presencia de la marca a lo largo del tiempo.
          p Por último, un logotipo efectivo debe ser adaptable. Esto significa que debe funcionar bien en diferentes medios y tamaños, desde grandes carteles hasta pequeños íconos digitales, manteniendo siempre su integridad y mensaje visual.
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema1/img10.png', alt='Imagen Decorativa')
  
  
      h3.mb-3.blue_icon Caracteristicas
      p El logotipo debe de ser:
      .row.mb-5
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema1/img09.png', alt='Imagen Decorativa')
        .col-md-8
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
            div(titulo="Simple")
              p La simplicidad en el diseño es la clave para que se reconozca fácilmente, logrando recordación y versatilidad por medio del tiempo. 
            
            div(titulo="Memorable")
              p Para construir una marca duradera, el logo debe transmitir emociones y valores positivos al consumidor. 
            
            div(titulo="Atemporal")
              p El diseño del logo se debe centrar en una construcción del concepto organizacional y mantenerse alejado de tendencias, ya que estas desaparecen. Un logotipo atemporal permite a su cliente disfrutar de su longevidad al posicionarse en la mente del consumidor para un largo plazo.
  
            div(titulo="Versátil")
              p Los logos son gráficos que representan una marca comercial, por ende, las organizaciones comercializan sus productos o servicios haciendo uso de varios medios. Por ejemplo, en anuncios televisivos, tarjetas de presentación o en vallas. Por ello, el logo debe adaptarse a cualquier medio digital o impreso, en blanco o negro sin perder su calidad o concepto. 
            
            div(titulo="Pertinencia")
              p En el diseño de un logo este debe reflejar la identidad, filosofía o idea de la organización. Es importante que el logo sea relevante para la industria a la cual pertenece. Debe transmitir un concepto claro al público objetivo. 
           
      h3.mb-4.blue_icon Psicología del Color
      p Cada color tiene un significado y este genera una percepción en el ser humano la cual afecta su conducta. Los colores transmiten emociones, ideas y personalidad. 
      p De acuerdo con David Gómez (2013) los colores generan ciertos efectos sobre la psique humana, los cuales son aplicados también en el 
        i marketing 
        | y la publicidad. Esto significa que no solo deja una impresión duradera en la mente de los consumidores, sino que también mantiene su integridad visual y su mensaje, independientemente del medio o tamaño en el que se utilice, tal como se indica en la siguiente tabla:
  
      .row.mb-5
        .col-md-10.mx-auto
          .titulo_sexto.mb-4(data-aos="fade-right")
            h5.mb-0 Tabla 1. 
              span Efectos que generan los colores
  
          .tabla-a
            table
              caption Nota. (Gómez 2013)
              thead
                tr
                  th Color
                  th Personalidad - Emociones
                  th 
                    i Marketing 
                    | y Publicidad 
              tbody
                tr
                  td  
                    img.img-t.mx-auto(src='@/assets/curso/temas/tema1/img11.png', alt='Imagen Decorativa')
                  td 
                    ul.bullets
                      li Evoca emociones fuertes.
                      li Estimula el apetito.
                      li Incrementa la pasión y la intensidad.
  
                  td 
                    ul.bullets
                      li Incrementa el ritmo cardíaco.
                      li Usado por restaurantes para estimular el apetito.
                      li Crea sentido de urgencia, visto con frecuencia en anuncios promocionales
                      li Usado para compras por impulso.
  
                tr
                  td 
                    img.img-t.mx-auto(src='@/assets/curso/temas/tema1/img12.png', alt='Imagen Decorativa')
                  td 
                    ul.bullets
                      li Incrementa la alegría y el afecto.
                      li Causa fatiga y tensión en los ojos.
                      li Estimula procesos mentales y el sistema nervioso.
                      li Incentiva la comunicación.
                  td 
                    ul.bullets
                      li Representa optimismo y juventud.
                      li Usado para llamar la atención en las vitrinas.
                      li Muestra claridad.
  
                tr
                  td 
                    img.img-t.mx-auto(src='@/assets/curso/temas/tema1/img13.png', alt='Imagen Decorativa')
                  td 
                    ul.bullets
                      li Asociado con agua y paz.
                      li Más preferido por los hombres.
                      li Representa calma y serenidad.
                      li Disminuye el apetito.
                      li Conocido como un color ‘frío’.
                      li Percibido como constante en la vida humana por ser los colores del cielo y el mar.
                      li Incrementa la productividad.
  
                  td 
                    ul.bullets
                      li Es el color más usado en las empresas por ser productivo y no invasivo.
                      li Crea sensación de seguridad y confianza en una marca.
  
                tr
                  td 
                    img.img-t.mx-auto(src='@/assets/curso/temas/tema1/img14.png', alt='Imagen Decorativa')
                  td 
                    ul.bullets
                      li Refleja emoción y entusiasmo.
                      li Muestra calidez.
                      li Símbolo de precaución.
  
                  td 
                    ul.bullets
                      li Significa agresión.
                      li Crea un llamado a la acción: Compre, Venda, Suscríbase.
                      li Presente en compradores impulsivos.
                      li Representa una marca amigable, alegre y confiable.
  
                tr
                  td 
                    img.img-t.mx-auto(src='@/assets/curso/temas/tema1/img15.png', alt='Imagen Decorativa')
                  td 
                    ul.bullets
                      li Asociado con salud y tranquilidad.
                      li Simboliza el dinero.
                      li Denota naturaleza.
                      li Alivia la depresión.
                      li Es utilizado en gafas de visión nocturna porque el ojo humano es más sensible y capaz de discernir los contrastes y las sombras.
                      li Representa un nuevo crecimiento.
  
                  td 
                    ul.bullets
                      li Usado para relajación.
                      li Asociado con riqueza.
                      li Símbolo de fertilidad.
  
                tr
                  td 
                    img.img-t.mx-auto(src='@/assets/curso/temas/tema1/img16.png', alt='Imagen Decorativa')
                  td 
                    ul.bullets
                      li Asociado con realeza, riqueza, éxito y sabiduría.
                      li Usado en los trajes de los reyes.
  
                  td 
                    ul.bullets
                      li Usado con frecuencia en productos de belleza o salud.
                      li Usado para calmar y apaciguar.
                      li Representa una marca creativa, imaginativa y sabia.
      
      h3.mb-4.blue_icon Diseño de logos
      p Con el fin de iniciar el diseño de un logo, primero se debe realizar un 
        i briefing, 
        | el cual consiste en enviarle al cliente un 
        i brief 
        | o documento con preguntas con el fin de obtener información sobre la organización y la misión que esta persigue, entre otros valores que ostenta; estos son los insumos necesarios para que el publicista cree el logo. 
      p Los siguientes pasos conllevan a la creación del logo: 
  
      .row.mb-5
        .col-md-4
          figure
            img.img-t.mx-auto(src='@/assets/curso/temas/tema1/img17.svg', alt='Imagen Decorativa')
        .col-md-8
          SlyderF(columnas="col-lg-6 col-xl-6")
            .tarjeta.tarjeta--grisclaro.p-4 
              h2.big 01
              p.text-center Desarrollo del 
                i brief, 
                | el cual contiene la Información básica sobre la organización, el público objetivo y las ventajas de los productos o servicios frente la competencia.
  
            .tarjeta.tarjeta--grisclaro.p-4
              h2.big 02
              p.text-center Comprensión de la información de la organización por medio del 
                i brief 
                | como paso previo para iniciar a realizar al menos treinta bocetos a mano con figuras, símbolos o ilustraciones que manifiesten la naturaleza del cliente.  
  
            .tarjeta.tarjeta--grisclaro.p-4
              h2.big 03
              p.text-center Convertir el logo dibujado a mano en vectores en Adobe Ilustrador. Para profundizar consulte el video Diseño de Logotipo | Tutorial Adobe Ilustrador, disponible en: 
                a(:href="('https://www.youtube.com/watch?v=NDBLrmJ6XrU')" target="_blank") https://www.youtube.com/watch?v=NDBLrmJ6XrU
  
            .tarjeta.tarjeta--grisclaro.p-4
              h2.big 04
              p.text-center Comprensión de la información de la organización por medio del 
                i brief 
                | como paso previo para iniciar a realizar al menos treinta bocetos a mano con figuras, símbolos o ilustraciones que manifiesten la naturaleza del cliente.  
  
            .tarjeta.tarjeta--grisclaro.p-4
              h2.big 05
              p.text-center Al elegir los colores se debe poner el logo a prueba por medio de la opinión pública. 
  
            .tarjeta.tarjeta--grisclaro.p-4
              h2.big 06
              p.text-center Realizar las modificaciones al logo para lograr su resultado final.
  
      .row.mb-5
        .col-12.col-lg-7.mx-auto.bg02
          p.mb-0
            strong Modelo del 
              i brief.  
              | A partir del modelo que a continuación se expone, se consulta la información básica que debe contener el 
              i brief, 
              | tal como se indica en la siguiente tabla:
  
      .row.mb-5
        .col-md-7.mx-auto
          .titulo_sexto.mb-4(data-aos="fade-right")
            h5.mb-0 Tabla 2. 
              span 
                i Brief
  
          .tabla-a
            table
              caption Nota. (Gómez 2013)
              thead
                tr
                  th.white
                  th Preguntas
              tbody
                tr
                  td.numbers
                   p 1.
                  td 
                   p ¿Cuál es el objetivo de comunicación del diseño?
  
                tr
                  td.numbers
                    p 2.
                  td 
                    p ¿Cuál es la esencia de su organización?
  
                tr
                  td.numbers
                   p 3.
                  td 
                   p ¿Cuál es la promesa de valor de su producto o servicio?
  
                tr
                  td.numbers
                    p 4.
                  td 
                    p ¿Cómo se diferencia su producto o servicio del mercado?
  
                tr
                  td.numbers
                   p 5.
                  td 
                   p ¿Cuál es el perfil del público objetivo?
  
                tr
                  td.numbers
                    p 6.
                  td 
                    p ¿Cuáles son sus ventajas contra la competencia?
  
                tr
                  td.numbers
                   p 7.
                  td 
                   p ¿Qué tipo de experiencias emocionales o sociales puede generar el logo?
  
                tr
                  td.numbers
                    p 8.
                  td 
                    p ¿Qué colores identifican su organización y por qué?
  
      .row
        .mx-auto.col-xs-12.col-md-10
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img.img-t.m-auto(src='@/assets/curso/temas/tema1/img21.svg', alt='Imagen Decorativa')
            .tarjeta.color-primario.row.align-items-center.bg03
              .col-md-9.mb-3.mb-sm-0
                p.p-2.d-block.d-lg-none
                p.mb-0
                  b.text-white Para profundizar en esta temática observe el siguiente video: Diseño de Logo - Los Diferentes Logos Que Existen
              .col-md-2.mb-3.mb-sm-0.p-2
                a.boton.color-acento-botones(href="http://repositorio.unicauca.edu.co:8080/bitstream/handle/123456789/892/ANEXO%20C.pdf?sequence=2&isAllowed=y" target="_blank")
                  span Enlace
                  i.fas.fa-link
  
  
      .row.mb-5
        p Una estrategia de comunicación se basa en la dirección ideológica que se plantea para lograr el objetivo de comunicación. Define el “cómo” persuadir al público objetivo por medio de un mensaje publicitario. Para lograr el desarrollo de la estrategia de comunicación, se debe conseguir la ejecución de la estrategia creativa y la estrategia de medios.  
        p Los contenidos, tanto de la estrategia creativa como de la estrategia de medios, se pueden consultar en la siguiente figura: 
  
      .row.mb-5
        .col-md-10.mx-auto
          .titulo_sexto.mb-4(data-aos="fade-right")
            h5.mb-0 Figura 1. 
              span Estrategia de comunicación
  
          figure
            img(src='@/assets/curso/temas/tema1/img23.svg', alt='Imagen Decorativa')
            figcaption Nota. Sena, 2014
  
  </template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
