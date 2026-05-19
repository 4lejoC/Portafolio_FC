import { SectionPageData } from '../models/site-page.model';

export const governancePage: SectionPageData = {
  id: 'gobernanza-tic',
  route: '/gobernanza-tic',
  index: '05',
  title: 'Gobernanza TIC',
  subtitle: 'Eje de Gobernanza',
  promise:
    'Conectamos tecnología, decisión y valor para que TI deje de operar por inercia y avance con criterio de negocio.',
  description:
    'Lo activamos cuando TI necesita dejar de responder solo a urgencias y empezar a priorizar iniciativas, servicios y decisiones con una lógica institucional compartida.',
  painPoints: [
    'Tecnología con muchas demandas y poca claridad sobre qué priorizar primero.',
    'Dirección y operación TI sin criterios comunes de seguimiento ni valor.',
    'Servicios, proyectos e iniciativas técnicas que avanzan sin una hoja de ruta institucional.'
  ],
  outcomes: [
    'Define criterios para priorizar iniciativas y asignar recursos con mayor claridad.',
    'Mejora la relación entre estrategia, tecnología, servicios y seguimiento.',
    'Convierte TI en una capacidad de negocio con gobierno, indicadores y control.'
  ],
  deliverables: [
    'Criterios de gobierno y alineación estratégica para TI.',
    'Matriz o ruta de priorización de iniciativas.',
    'Recomendaciones para gestión de servicios y mejora operativa.',
    'Indicadores, tableros y puntos de seguimiento.',
    'Separación clara entre dirección, gestión y control.'
  ],
  trustPoints: [
    'Alineación estratégica',
    'Priorización de portafolio',
    'Gestión de servicios',
    'Indicadores y seguimiento'
  ],
  accent: '#2f63c2',
  diagram: {
    eyebrow: 'Ruta de alineación',
    title: 'Cómo conectamos tecnología, decisión y valor',
    summary:
      'La gobernanza TIC ordena la toma de decisiones para que la tecnología responda a prioridades institucionales, mejore la operación y tenga seguimiento claro.',
    centerLabel: 'Núcleo del servicio',
    centerValue: 'Valor',
    nodes: [
      {
        label: 'Dirección',
        detail: 'Impulsamos criterios para decidir, supervisar y orientar la función TI.'
      },
      {
        label: 'Alineación',
        detail: 'Conectamos necesidades del negocio con prioridades tecnológicas reales.'
      },
      {
        label: 'Portafolio',
        detail: 'Ordenamos iniciativas, dependencias y criterios de priorización.'
      },
      {
        label: 'Servicio',
        detail: 'Fortalecemos la entrega operativa y la calidad de los servicios TI.'
      },
      {
        label: 'Control',
        detail: 'Instalamos indicadores y seguimiento para tomar decisiones con evidencia.'
      }
    ]
  },
  topics: [
    {
      title: 'Gobierno y alineación estratégica',
      summary:
        'Ayudamos a que la tecnología deje de verse solo como soporte y se gestione como una capacidad alineada con la estrategia.',
      bullets: [
        'Clarificamos responsabilidades, criterios de decisión y puntos de supervisión.',
        'Fortalecemos el vínculo entre dirección institucional y prioridades tecnológicas.',
        'Usamos buenas prácticas de gobierno como respaldo para ordenar la función TI.'
      ],
      standards: ['Gobierno', 'Estrategia', 'Dirección'],
      note: 'Da contexto y criterio a las decisiones que hoy se toman por urgencia o costumbre.'
    },
    {
      title: 'Portafolio y priorización',
      summary:
        'Organizamos iniciativas para que la organización sepa qué impulsar primero, con qué recursos y bajo qué criterio.',
      bullets: [
        'Definimos criterios para evaluar valor, urgencia, dependencia y viabilidad.',
        'Mejoramos visibilidad sobre iniciativas activas y futuras.',
        'Buscamos que la priorización reduzca dispersión y mejore foco institucional.'
      ],
      standards: ['Portafolio', 'Priorización', 'Recursos'],
      note: 'Ayuda a concentrar recursos en lo que realmente aporta valor o continuidad.'
    },
    {
      title: 'Gestión de servicios y mejora operativa',
      summary:
        'Fortalecemos prácticas de servicio para mejorar continuidad, orden operativo y experiencia interna de atención.',
      bullets: [
        'Revisamos procesos de soporte, niveles de servicio y puntos de fricción operativa.',
        'Promovemos una gestión más consistente sobre incidentes, requerimientos y mejora continua.',
        'La meta es que TI entregue valor con mayor estabilidad y previsibilidad.'
      ],
      standards: ['Servicios', 'Operación', 'Mejora'],
      note: 'Aporta orden en la operación diaria y mejores condiciones para sostener la entrega.'
    },
    {
      title: 'Control, indicadores y seguimiento',
      summary:
        'Instalamos mecanismos de seguimiento para que la dirección cuente con información clara sobre avance, desempeño y riesgos.',
      bullets: [
        'Definimos indicadores y tableros útiles para gestión y supervisión.',
        'Ayudamos a separar operación diaria de decisiones de gobierno y control.',
        'El seguimiento se convierte en una herramienta para corregir, priorizar y sostener resultados.'
      ],
      standards: ['Indicadores', 'Tableros', 'Seguimiento'],
      note: 'Permite decidir con evidencia y no solo con percepción o urgencia.'
    }
  ],
  cta: {
    title: 'Si TI necesita alinearse mejor con la estrategia, este eje ayuda a ordenar decisiones y prioridades.',
    description:
      'Podemos comenzar por criterios de gobierno, una ruta de priorización o un esquema de seguimiento que haga visible el valor de TI.',
    label: 'Definir siguiente paso'
  }
};
