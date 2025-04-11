'use client';

import { MessageIcon } from '@/components/icons/MessageIcon';
import PrimaryButtonComponent from '@/components/primaryButtonComponent/PrimaryButtonComponent';
import TitleComponent from '@/components/titleComponent/TitleComponent';
import useScreenObserver from '@/hooks/useScreenObserver';
import React from 'react';

export default function SecondSection() {
  const { isOnScreen, refCallback } = useScreenObserver();

  const titleStyle = isOnScreen ? 'animate-showTopToCenter' : 'opacity-0';

  return (
    <section className="section_style bg-tertiaryColor">
      <div>
        <header ref={refCallback} className={`${titleStyle}`}>
          <TitleComponent text="Título de prueba" />
        </header>
        <article className="flex flex-col gap-y-2 items-center text-justify">
          <p>
            Bienvenido/a a nuestra página web, un espacio diseñado para
            ofrecerte la mejor información y servicios de calidad. Nos
            enorgullece brindarte contenido relevante, actualizado y adaptado a
            tus necesidades. Aquí encontrarás una gran variedad de recursos para
            explorar y aprovechar.
          </p>

          <p>
            En un mundo en constante evolución, es fundamental contar con
            información precisa y accesible. Nuestro equipo trabaja día a día
            para garantizar que cada artículo, guía y recomendación que
            publicamos sea útil y confiable. Creemos que el conocimiento es una
            herramienta poderosa y queremos que formes parte de esta comunidad
            de aprendizaje.
          </p>

          <p>
            Navegar por nuestro sitio es una experiencia sencilla e intuitiva.
            Hemos diseñado cada sección pensando en tu comodidad, permitiéndote
            encontrar lo que buscas de manera rápida y eficiente. Ya sea que
            estés aquí por curiosidad, necesidad o interés profesional, queremos
            que disfrutes del contenido sin complicaciones.
          </p>

          <p>
            La tecnología nos permite acercarnos a un sinfín de oportunidades.
            Gracias a los avances digitales, podemos compartir información de
            manera instantánea y conectar con personas de todo el mundo. En
            nuestra web, nos esforzamos por aprovechar al máximo estos recursos
            para ofrecerte un entorno enriquecedor y dinámico.
          </p>

          <p>
            Además del contenido informativo, también te ofrecemos herramientas
            interactivas para mejorar tu experiencia. Encuestas, foros y
            secciones de comentarios están disponibles para que puedas
            participar activamente y compartir tus opiniones. Creemos en la
            importancia de la comunidad y en el intercambio de ideas para
            generar un impacto positivo.
          </p>

          <p>
            Sabemos que tu tiempo es valioso y por eso trabajamos constantemente
            en optimizar nuestra plataforma. Nos aseguramos de que cada página
            cargue de manera rápida y que la navegación sea fluida en todos los
            dispositivos. Ya sea desde tu computadora, tablet o teléfono móvil,
            queremos que disfrutes de la mejor experiencia posible.
          </p>

          <p>
            Te invitamos a explorar todas las secciones de nuestro sitio web y a
            descubrir todo lo que tenemos para ofrecerte. Si tienes alguna
            pregunta o sugerencia, no dudes en ponerte en contacto con nosotros.
            Tu opinión es fundamental para seguir mejorando y creciendo juntos.
          </p>

          <p>
            Gracias por visitarnos y ser parte de esta comunidad. Esperamos que
            encuentres en nuestro sitio un lugar útil, interesante y
            enriquecedor. ¡Bienvenido/a y disfruta de la experiencia!
          </p>
        </article>
        <div className="w-full flex flex-row justify-center">
          <PrimaryButtonComponent
            text="Contacta conmigo"
            icon={<MessageIcon size={16} />}
          />
        </div>
      </div>
    </section>
  );
}
