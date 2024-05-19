export default {
  blocks: [
    {
      component: "hero",
      content: {
        title: "Tarifario clases de música",
      },
    },
    {
      component: "table",
      content: {
        title: "Clase individual de 1 hora",
        table: [
          {
            seniority: "< 5 años",
            rate: "$8.300",
          },
          {
            seniority: "5 - 15 años",
            rate: "$12.450",
          },
          {
            seniority: "> 15 años",
            rate: "$16.600",
          },
        ],
        text: "<p>*estos valores corresponden a clases en el espacio propio del profesor, no a domicilio.</p><p>Última actualización: Junio 2024<br />Fuente de referencia: canasta básica total tipo 2 (según INDEC).</p>",
      },
    },
    {
      component: "separator",
    },
    {
      component: "text",
      content: {
        title: "¿Cómo usar el tarifario?",
        text: "<p>Esta herramienta es una orientación para saber cuánto cobrar por las clases particulares de música. Las tarifas del cuadro son referencias de lo que consideramos como valores mínimos por nuestro trabajo.</p>",
      },
    },
    {
      component: "separator",
    },
    {
      component: "text",
      content: {
        title: "¿Quiénes somos?",
        text: "<p>Somos músiques y docentes, nos desempeñamos como profesores particulares y formamos parte de un colectivo de músiques de CABA llamado TRAMA (Trabajadores Músiques en Acción). Elaboramos esta herramienta colectiva con el objetivo de construir bases dignas para nuestra actividad. Invitamos a utilizar el tarifario como referencia y difundirlo entre nuestros colegas.</p>",
      },
    },
    {
      component: "separator",
    },
    {
      component: "newsletter",
      content: {
        title: "¿Querés recibir novedades del tarifario?",
        text: "Dejanos tu mail para recibir una notificación por correo cada vez que actualicemos el tarifario y para próximas actividades.",
        cta: "Suscribirme",
      },
    },
    {
      component: "separator",
    },
    {
      component: "text",
      content: {
        title: "Links a tarifarios de otras regiones del país",
        text: "<a href='https://docs.google.com/spreadsheets/d/1HkUYR9tmLMmpNHlZRvEdVhx62bGCAawayEy774Ph_es/edit#gid=0' target='_blank'>Tarifario de A.P.M. (Sindicato de Personas Músicas de La Plata, Berisso, Ensenada y Magdalena)</a><a href='https://sindicatomusicoscordoba.org.ar/tarifarios/' target='_blank'>Tarifario del Sindicato de Músicos de Córdoba</a>",
      },
    },
    {
      component: "footer",
    },
  ],
};
