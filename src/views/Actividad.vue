<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema:
        'Imágenes que Comunican estrategias visuales en campañas publicitarias.',
      titulo: 'Cuestionario',
      introduccion:
        'Lea cada enunciado referente a los temas desarrollados en el componenteformativo y elija una opción según corresponda',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es un logotipo icónico o simbólico?',
          imagen: require('@/assets/curso/actividad/img01.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un logotipo basado únicamente en texto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un símbolo o ícono que representa una marca.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un logotipo que combina texto e imagen.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un logotipo en forma de emblema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es una característica principal de un logotipo tipográfico?',
          imagen: require('@/assets/curso/actividad/img02.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Utiliza únicamente íconos.', esCorrecta: false },
            { id: 'b', texto: 'Combina símbolos y texto.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Se basa exclusivamente en tipografía.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Es ilustrativo y detallado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de logotipo se enfoca en representar la marca de manera detallada y artística?',
          imagen: require('@/assets/curso/actividad/img03.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Ilustrativo.', esCorrecta: true },
            { id: 'b', texto: 'Icónico/Simbólico.', esCorrecta: false },
            { id: 'c', texto: 'Tipográfico.', esCorrecta: false },
            { id: 'd', texto: 'Gráficos/Descriptivos.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué rol juega la psicología del color en el diseño de un logotipo?',
          imagen: require('@/assets/curso/actividad/img04.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Define las proporciones del logotipo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Determina el tipo de fuente a usar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Influye en la percepción y emociones del espectador',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'No tiene ningún rol significativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué es un briefing en el contexto del diseño de un logo?',
          imagen: require('@/assets/curso/actividad/img05.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Un análisis del mercado.', esCorrecta: false },
            {
              id: 'b',
              texto:
                'Un documento que recoge los requisitos y objetivos del diseño.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un resumen visual del logotipo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una propuesta de colores para el logotipo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el primer paso en la representación de una idea creativa?',
          imagen: require('@/assets/curso/actividad/img06.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Seleccionar los colores del logotipo.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Crear un boceto inicial.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Definir los valores de la marca.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar un análisis de mercado',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué es una idea creativa?',
          imagen: require('@/assets/curso/actividad/img01.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Un concepto original.', esCorrecta: true },
            { id: 'b', texto: 'Una técnica de marketing.', esCorrecta: false },
            { id: 'c', texto: 'Un medio publicitario.', esCorrecta: false },
            { id: 'd', texto: 'Un tipo de campaña.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es el objetivo de la estrategia de contenido?',
          imagen: require('@/assets/curso/actividad/img02.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Vender productos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Atraer y retener audiencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mejorar la imagen de marca.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Aumentar la producción.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué implica la representación de una idea creativa?',
          imagen: require('@/assets/curso/actividad/img03.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Crear una historia.', esCorrecta: false },
            { id: 'b', texto: 'Visualizar el mensaje.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Definir el público objetivo.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Elaborar el presupuesto.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Cuál es el objetivo principal de una campaña publicitaria?',
          imagen: require('@/assets/curso/actividad/img04.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Aumentar la producción', esCorrecta: false },
            {
              id: 'b',
              texto: 'Promover un producto o servicio.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Generar contenido.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Establecer relaciones públicas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componenteformativo e intentar nuevamente la actividad didáctica',
    },
  }),
  computed: {},
  methods: {},
}
</script>
