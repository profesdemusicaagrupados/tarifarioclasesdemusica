export default {
  blocks: [
    {
      component: "hero",
      content: {
        title: ["TARIFARIO", "CLASES de MÚSICA", "CABA y AMBA"],
      },
    },
    {
      component: "table",
      content: {
        title: "Clase individual de 1 hora",
        table: [
          {
            seniority: "Hasta 5 años",
            rate: "$11.002,67",
          },
          {
            seniority: "De 5 a 15 años",
            rate: "$16.504,00",
          },
          {
            seniority: "Más de 15 años",
            rate: "$22.005,34",
          },
        ],
        text: "<p>Estos valores no contemplan los gastos extra que requieran las clases a domicilio.<br />Última actualización: 15 de abril de 2025.<br />Fuente de referencia: canasta básica total tipo 2 (según INDEC).</p>",
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
        text: "<ul><li><a href='https://docs.google.com/spreadsheets/d/1HkUYR9tmLMmpNHlZRvEdVhx62bGCAawayEy774Ph_es/edit#gid=0' target='_blank'>Tarifario de A.P.M. (Sindicato de Personas Músicas de La Plata, Berisso, Ensenada y Magdalena)</a></li><li><a href='https://sindicatomusicoscordoba.org.ar/tarifarios/' target='_blank'>Tarifario del Sindicato de Músicos de Córdoba</a></li></ul>",
      },
    },
    {
      component: "footer",
    },
  ],
};
