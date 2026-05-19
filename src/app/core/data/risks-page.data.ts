import { SectionPageData } from '../models/site-page.model';

export const risksPage: SectionPageData = {
  id: 'riesgos',
  route: '/riesgos',
  index: '02',
  title: 'Riesgos',
  subtitle: 'Eje de Prevención',
  promise:
    'Acompañamos el cumplimiento en privacidad, datos personales y prevención de lavado de activos.',
  description:
    'Este eje se activa cuando la organizacion necesita ordenar su lectura de exposicion en materias sensibles, instalar controles preventivos y traducir obligaciones de seguridad, debida diligencia y privacidad en decisiones aplicables a la operacion.',
  painPoints: [
    'Exposiciones en seguridad informatica sin criterios preventivos ni responsables claros.',
    'Controles debiles frente a lavado de activos, debida diligencia o alertas de operaciones inusuales.',
    'Tratamiento de datos personales sin lineamientos, salvaguardas ni evidencia suficiente de cumplimiento.'
  ],
  outcomes: [
    'Establece una lectura priorizada de riesgos en seguridad informatica, LA/FT y datos personales.',
    'Fortalece controles preventivos, criterios de debida diligencia y medidas de proteccion sobre informacion sensible.',
    'Mejora seguimiento, trazabilidad y capacidad de respuesta frente a hallazgos, alertas o incumplimientos.'
  ],
  deliverables: [
    'Diagnostico de exposicion y mapa de riesgos prioritarios.',
    'Matriz de riesgos con impacto, probabilidad y criterios de tratamiento.',
    'Plan de controles preventivos para seguridad informatica, LA/FT y privacidad.',
    'Lineamientos de debida diligencia, manejo de datos y escalamiento de incidentes o alertas.',
    'Indicadores, responsables y esquema de seguimiento.'
  ],
  trustPoints: [
    'Riesgo y cumplimiento',
    'LA/FT y debida diligencia',
    'Proteccion de datos personales',
    'Controles preventivos'
  ],
  accent: '#9a5c48',
  diagram: {
    eyebrow: 'Ruta de prevencion',
    title: 'Como ordenamos la prevencion en riesgos sensibles',
    summary:
      'El trabajo combina diagnostico, criterios, controles y seguimiento para que los riesgos de seguridad informatica, lavado de activos y datos personales se gestionen con mas claridad y menos improvisacion.',
    centerLabel: 'Nucleo del servicio',
    centerValue: 'Control',
    nodes: [
      {
        label: 'Diagnostico',
        detail: 'Identificamos brechas, exposiciones y obligaciones que hoy requieren atencion prioritaria.'
      },
      {
        label: 'Ciber',
        detail: 'Ordenamos riesgos y controles preventivos sobre accesos, informacion y activos digitales.'
      },
      {
        label: 'LA/FT',
        detail: 'Fortalecemos debida diligencia, alertas y criterios de prevencion frente a operaciones inusuales.'
      },
      {
        label: 'Datos',
        detail: 'Aterrizamos medidas para tratamiento responsable y resguardo de datos personales.'
      },
      {
        label: 'Seguimiento',
        detail: 'Instalamos responsables, indicadores y revisiones para sostener cumplimiento y mejora.'
      }
    ]
  },
  topics: [
    {
      title: 'Diagnostico y mapa de riesgos sensibles',
      summary:
        'Leemos la situacion actual para identificar exposiciones prioritarias en seguridad informatica, lavado de activos y proteccion de datos personales.',
      bullets: [
        'Revisamos procesos, roles, controles y puntos de exposicion que requieren intervencion.',
        'Identificamos riesgos regulatorios, operativos y reputacionales segun el contexto de la organizacion.',
        'Entregamos una lectura priorizada para pasar de preocupaciones dispersas a foco concreto.'
      ],
      standards: ['Diagnostico', 'Mapa', 'Exposicion'],
      note: 'Da una base clara cuando la organizacion sabe que existe riesgo, pero no tiene todavia un orden de prioridades.'
    },
    {
      title: 'Prevencion de riesgos en seguridad informatica',
      summary:
        'Fortalecemos la lectura preventiva del riesgo cibernetico para ordenar controles antes de que una exposicion afecte la operacion.',
      bullets: [
        'Priorizamos riesgos sobre accesos, informacion, activos criticos y practicas operativas.',
        'Definimos controles preventivos y criterios de tratamiento alineados con la realidad del entorno.',
        'Buscamos complementar la ciberseguridad tecnica con una mirada de riesgo y seguimiento.'
      ],
      standards: ['Ciber-riesgo', 'Controles', 'Prevencion'],
      note: 'Aporta criterio preventivo para decidir donde intervenir primero y como sostener los controles.'
    },
    {
      title: 'Prevencion de lavado de activos y debida diligencia',
      summary:
        'Ayudamos a estructurar criterios y controles para reducir exposicion frente a lavado de activos y fortalecer la debida diligencia.',
      bullets: [
        'Revisamos senales de alerta, puntos de vulnerabilidad y practicas de conocimiento de clientes, terceros o contrapartes.',
        'Ordenamos controles, criterios de escalamiento y soportes de seguimiento.',
        'Promovemos una gestion mas consistente sobre alertas, verificaciones y decisiones sensibles.'
      ],
      standards: ['LA/FT', 'Debida diligencia', 'Alertas'],
      note: 'Permite pasar de controles formales a una lectura mas util sobre exposicion y tratamiento.'
    },
    {
      title: 'Proteccion de datos personales y privacidad',
      summary:
        'Aterrizamos medidas para que el tratamiento de datos personales tenga criterios claros de resguardo, uso y cumplimiento.',
      bullets: [
        'Revisamos responsabilidades, practicas y controles sobre recoleccion, acceso, almacenamiento y uso de datos.',
        'Ayudamos a identificar brechas de privacidad y necesidades de proteccion sobre informacion sensible.',
        'Buscamos que la organizacion combine cumplimiento con confianza y orden operativo.'
      ],
      standards: ['Privacidad', 'Datos personales', 'Cumplimiento'],
      note: 'Aporta estructura cuando el reto no es solo proteger datos, sino gestionarlos de forma responsable.'
    },
    {
      title: 'Indicadores, seguimiento y respuesta',
      summary:
        'Instalamos seguimiento para que la prevencion no quede en documentos, sino en decisiones periodicas, alertas y acciones sostenidas.',
      bullets: [
        'Definimos responsables, indicadores y puntos de revision sobre exposicion, controles y hallazgos.',
        'Mejoramos trazabilidad sobre alertas, incidentes, verificaciones y compromisos de mejora.',
        'Promovemos una cultura donde el riesgo sensible se monitorea y se corrige con continuidad.'
      ],
      standards: ['Indicadores', 'Seguimiento', 'Respuesta'],
      note: 'Evita que la prevencion se diluya con el tiempo o dependa solo de reacciones puntuales.'
    }
  ],
  cta: {
    title: 'Si necesitas prevenir mejor riesgos sensibles, este eje puede ordenar tu gestion preventiva y de cumplimiento.',
    description:
      'Podemos comenzar con un diagnostico de exposicion, una matriz priorizada o una ruta de controles sobre seguridad informatica, LA/FT y datos personales.',
    label: 'Definir siguiente paso'
  }
};
