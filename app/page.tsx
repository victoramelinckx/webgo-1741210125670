
"use client";

import { Hero } from "./components/Hero";
import { How } from "./components/How";
import { Aboutus } from "./components/Aboutus";
import { BeforeAndAfter } from "./components/BeforeAndAfter";
import { Faq } from "./components/Faq";
import { BookAppointment } from "./components/BookAppointment";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

            <Hero
              headline="<b>¡Transforma Tu Negocio con Webgo!</b>"
              subheadline="Hacemos sitios web optimizados para generar más ventas y fortalecer tu presencia digital."
              cta1="Descubre Nuestros Servicios"
              cta2="Comienza Ahora"
            />

            <How
              step1Title="Consulta"
              step1Desc="Primero, organizaremos una consulta para discutir tus necesidades y objetivos de negocio. Analizaremos tu industria, audiencia objetivo y competidores para entender mejor cómo podemos diseñar tu sitio web para generar más ventas."
              step2Title="Diseño y Optimización"
              step2Desc="A continuación, nuestro equipo de expertos en diseño web creará un sitio web atractivo y fácil de usar, optimizado para atraer y retener a los visitantes. También nos aseguraremos de que tu sitio esté optimizado para los motores de búsqueda, lo que aumenta tu visibilidad y potencial de ventas."
              step3Title="Lanzamiento y Seguimiento"
              step3Desc="Una vez que tu sitio web esté listo, lo lanzaremos y seguiremos de cerca su rendimiento. Utilizamos análisis y seguimiento para hacer ajustes y mejoras continuas, asegurando que tu sitio web sigue generando más ventas a largo plazo."
            />

            <Aboutus
              step1Title="Acerca de nosotros"
              step1Desc="Descripción"
              step2Title="Beneficio 1"
              step2Desc="Descripción beneficio 1"
              step3Title="Beneficio 2"
              step3Desc="Descripción beneficio 2"
            />
<Services />
<BeforeAndAfter />

            <Faq
              faqs={[{"pregunta":"¿Qué es Webgo?","respuesta":"Webgo es una empresa dedicada a la creación de sitios web optimizados para ayudar a las empresas a incrementar sus ventas."},{"pregunta":"¿Cómo pueden las páginas web de Webgo generar más ventas?","respuesta":"Nuestros sitios web están diseñados y optimizados con estrategias de marketing digital para mejorar la visibilidad, atraer más tráfico y convertir visitantes en clientes potenciales."},{"pregunta":"¿Ofrece Webgo servicios de mantenimiento para los sitios web creados?","respuesta":"Sí, ofrecemos servicios de mantenimiento para asegurarnos de que tu sitio web se mantiene actualizado y funcional."},{"pregunta":"¿Puedo ver algunos de los sitios web que Webgo ha creado?","respuesta":"Sí, puedes visitar nuestra página de 'Proyectos' para ver algunos de los sitios web que hemos creado para nuestros clientes."},{"pregunta":"¿Cuánto tiempo tardará Webgo en crear mi sitio web?","respuesta":"El tiempo que lleva crear un sitio web puede variar dependiendo de la complejidad y las especificaciones del proyecto. Sin embargo, nos esforzamos por entregar todos los proyectos de manera oportuna sin comprometer la calidad."}]}
            />

            <BookAppointment
              heading="Formulario de Contacto"
              description="En Webgo, nos especializamos en la creación de sitios web optimizados para maximizar las ventas. Si estás interesado en nuestros servicios, por favor, rellena el siguiente formulario y nos pondremos en contacto contigo lo antes posible."
              services={[{"name":"Diseño de sitios web"},{"name":"Optimización de sitios web"},{"name":"Generación de ventas"}]}
            />
<Footer />
    </main>
  );
}
    