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
            rate: "$11.106,24",
          },
          {
            seniority: "De 5 a 15 años",
            rate: "$16.659,35",
          },
          {
            seniority: "Más de 15 años",
            rate: "$22.212,47",
          },
        ],
        text: "<p>Estos valores no contemplan los gastos extra que requieran las clases a domicilio.<br />Última actualización: 17 de junio de 2025.<br />Fuente de referencia: canasta básica total tipo 2 (según INDEC).</p>",
      },
    },
    {
      component: "separator",
    },
    {
      component: "text",
      content: {
        title: "¿Cómo usar el tarifario?",
        text: "<p>Esta herramienta es una orientación para saber cuánto cobrar por las clases particulares de música. Las tarifas del cuadro son referencias de lo que consideramos como valores mínimos por nuestro trabajo.</p><p>Al tratarse de un trabajo autónomo, dependemos exclusivamente de nuestras horas de trabajo para percibir ingresos. Por lo tanto, no contamos con vacaciones pagas, licencias por enfermedad o maternidad ni aguinaldo. La tarifa debería contemplar esta situación de informalidad y, además de la hora de clase, cubrir los gastos de herramientas de trabajo, tareas administrativas, alquiler del espacio y mantenimiento, servicios, impuestos, aportes jubilatorios, obra social, entre otros.</p>",
      },
    },
    {
      component: "separator",
    },
    {
      component: "threeColumnsTable",
      content: {
        title: "Modalidades de trabajo y cobro",
        text: "<p>En el siguiente cuadro te mostramos las modalidades de trabajo más usuales: clases regulares semanales y clases sueltas. Para cada modalidad, te recomendamos las opciones de organización y cobro que más respaldo dan dentro de la informalidad.</p>",
        table: {
          columns: [
            "Modalidad",
            "Cantidad de clases",
            "Tipo de tarifa",
            "Modalidad de pago",
            "Arancel",
            "Feriados",
          ],
          rows: [
            [
              "Mes de clases regulares y semanales (plan A)",
              "1 hora semanal (día y horario fijo)",
              "Tarifa fija por mes. Independientemente de la cantidad de clases",
              "Pago por adelantado del arancel mensual",
              "Valor clase tarifario x4",
              "Ese día no se hace la clase y no se recupera (se compensa con los meses de 5 clases)",
            ],
            [
              "Mes de clases regulares y semanales (plan B)",
              "1 hora semanal (día y horario fijo)",
              "Tarifa variable según la cantidad de clases que haya en el mes",
              "Pago por adelantado del arancel mensual",
              "Valor clase tarifario x cantidad de clases del mes",
              "Se acuerda a principio de mes si esa clase se hace o no",
            ],
            [
              "Clases sueltas",
              "1 hora",
              "Tarifa fija por clase",
              "Pago por clase. Recomendación: cobrar 48hs antes de la clase",
              "Valor clase tarifario x120%",
              "—",
            ],
          ],
        },
      },
    },
    {
      component: "text",
      content: {
        title: "Recuperación de clases",
        text: "<p>Se coordina otro horario dentro del mes según mutuo acuerdo. Para reprogramar una clase cancelada por el alumno se necesita un preaviso de mínimo 48hs.</p>",
      },
    },
    {
      component: "text",
      content: {
        title: "Cese de clases",
        text: "<p>En caso de no continuar con las clases, se pide un preaviso de 2 semanas, como mínimo.</p>",
      },
    },
    {
      component: "text",
      content: {
        title: "Admisión",
        text: "<p>Se sugiere tener una entrevista telefónica o por videollamada previa en caso de no conocer al alumno.</p>",
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
