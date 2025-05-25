export interface BlogArticle {
  id: string;
  title: string;
  author: string;
  date: string;
  tags: string[];
  presentationImage: string;
  content: string;
  link: string;
  images?: BlogArticleImage[];
}

export interface BlogArticleImage {
  url: string;
  alt: string;
}

export const BLOG_ARTICLES = [
  {
    id: 'articulo-1',
    title: 'Título de artículo 1',
    author: 'Autor 1',
    date: '10-02-2025',
    tags: ['Experiencia', 'Ayuda', 'Apoyo'],
    presentationImage: 'blog-1-presentation.webp',
    content:
      'Cuando Flor decidió <strong>estudiar Psicología</strong>, sabía que su vocación era ayudar a las personas. Desde pequeña, sentía una profunda empatía por quienes la rodeaban y soñaba con brindar apoyo a quienes enfrentaban dificultades emocionales. Sin embargo, su camino no estuvo exento de desafíos.Al graduarse, Flor se enfrentó a la incertidumbre de los primeros años: construir una reputación, encontrar pacientes y seguir formándose en un campo en constante evolución. Sus primeros trabajos fueron en instituciones con pocos recursos, donde aprendió a desarrollar herramientas creativas para ayudar a sus pacientes. Con el tiempo, decidió especializarse en terapia cognitivo-conductual, una disciplina que le permitió estructurar mejor sus intervenciones y generar cambios significativos en la vida de quienes acudían a ella.Los primeros casos no fueron fáciles. Algunas sesiones la dejaban agotada emocionalmente, pero su compromiso con la salud mental la impulsó a seguir adelante. Poco a poco, sus pacientes comenzaron a recomendarla, y su consulta se llenó de personas que confiaban en su profesionalismo. Además, nunca dejó de estudiar ni de asistir a conferencias para mantenerse actualizada.Hoy, Flor es una psicóloga reconocida, capaz de dar soporte a cualquier persona que necesite ayuda. Su historia es un testimonio de que la perseverancia y la pasión por la profesión pueden llevar al éxito. No se trata solo de conocimientos, sino de la capacidad de escuchar, entender y acompañar en los momentos más difíciles. Con cada paciente que ayuda, Flor reafirma que su elección fue la correcta y que su labor puede marcar la diferencia en muchas vidas.',
    link: '/blog/articulo-1',
    images: [
      {
        url: 'blog-1-presentation.webp',
        alt: 'Imagen 1 de artículo 1',
      },
      {
        url: 'blog-1-presentation.webp',
        alt: 'Imagen 1 de artículo 1',
      },
      {
        url: 'blog-1-presentation.webp',
        alt: 'Imagen 1 de artículo 1',
      },
      {
        url: 'blog-1-presentation.webp',
        alt: 'Imagen 1 de artículo 1',
      },
      {
        url: 'blog-1-presentation.webp',
        alt: 'Imagen 1 de artículo 1',
      },
      {
        url: 'blog-1-presentation.webp',
        alt: 'Imagen 1 de artículo 1',
      },
      {
        url: 'blog-1-presentation.webp',
        alt: 'Imagen 1 de artículo 1',
      },
      {
        url: 'blog-1-presentation.webp',
        alt: 'Imagen 1 de artículo 1',
      },
      {
        url: 'blog-1-presentation.webp',
        alt: 'Imagen 1 de artículo 1',
      },
    ],
  },
  {
    id: 'articulo-2',
    title: 'Título de artículo 2',
    author: 'Autor 1',
    date: '15-02-2025',
    tags: ['Experiencia', 'Ayuda', 'Apoyo'],
    presentationImage: 'blog-2-presentation.webp',
    content:
      'Las rupturas amorosas son uno de los momentos más difíciles de la vida. La sensación de pérdida, la tristeza y la incertidumbre pueden ser abrumadoras, pero es posible superarlas y salir fortalecido de la experiencia. En este artículo, te brindaré algunos consejos para sanar tu corazón y recuperar la alegría de vivir.',
    link: '/blog/articulo-2',
  },
  {
    id: 'articulo-3',
    title: 'Título de artículo 3',
    author: 'Autor 1',
    date: '20-02-2025',
    tags: ['Experiencia', 'Ayuda', 'Apoyo'],
    presentationImage: 'blog-3-presentation.webp',
    content:
      'La autoestima es un pilar fundamental en la vida de una persona. Define la forma en que nos relacionamos con nosotros mismos y con los demás, influyendo en nuestra autoimagen, nuestras decisiones y nuestra felicidad. En este artículo, te contaré por qué es tan importante cultivar una autoestima saludable y cómo puedes hacerlo.',
    link: '/blog/articulo-3',
  },
];
