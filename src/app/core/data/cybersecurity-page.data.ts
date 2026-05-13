import { SectionPageData } from '../models/site-page.model';

export const cybersecurityPage: SectionPageData = {
  id: 'ciberseguridad',
  route: '/ciberseguridad',
  index: '02',
  title: 'Ciberseguridad',
  subtitle: 'Eje de Defensa',
  promise:
    'Apoyamos a las organizaciones a reducir la exposición a riesgos digitales.',
  description:
    'Lo activamos cuando hace falta visibilidad sobre la exposición, controles más consistentes y una respuesta más clara frente a incidentes que ya afectan o pueden afectar la operación.',
  painPoints: [
    'Infraestructura expuesta sin visibilidad clara de riesgos prioritarios.',
    'Accesos, endpoints y redes con controles desiguales o poco consistentes.',
    'Capacidad limitada para detectar, escalar y responder a incidentes.'
  ],
  outcomes: [
    'Identifica brechas prioritarias y reduce exposición en red, endpoints y accesos.',
    'Mejora la capacidad de detección y respuesta frente a incidentes y comportamientos anómalos.',
    'Valida controles con pruebas y planes de remediación enfocados en riesgo real.'
  ],
  deliverables: [
    'Diagnóstico de postura de ciberseguridad.',
    'Plan de prioridades para controles de red, endpoints y accesos.',
    'Recomendaciones para monitoreo, alertamiento y respuesta.',
    'Pentesting o evaluaciones técnicas según alcance.',
    'Ruta de remediación priorizada por criticidad.'
  ],
  trustPoints: [
    'Postura de ciberseguridad',
    'Protección de infraestructura',
    'Gestión de identidad y acceso',
    'Pentesting y remediación'
  ],
  accent: '#c96a39',
  diagram: {
    eyebrow: 'Ruta de protección',
    title: 'Cómo fortalecemos la postura de ciberseguridad',
    summary:
      'El acompañamiento combina diagnóstico, protección, monitoreo y validación para reducir la exposición y mejorar la respuesta frente a incidentes.',
    centerLabel: 'Núcleo del servicio',
    centerValue: 'Protección',
    nodes: [
      {
        label: 'Diagnóstico',
        detail: 'Identificamos brechas, puntos ciegos y prioridades de mejora.'
      },
      {
        label: 'Perímetro',
        detail: 'Fortalecemos red, endpoints y controles clave para reducir superficie de ataque.'
      },
      {
        label: 'Acceso',
        detail: 'Reforzamos identidades, autenticación y permisos para proteger recursos críticos.'
      },
      {
        label: 'Monitoreo',
        detail: 'Mejoramos visibilidad, correlación de eventos y capacidad de respuesta.'
      },
      {
        label: 'Validación',
        detail: 'Comprobamos la efectividad de controles con pruebas y remediación.'
      }
    ]
  },
  topics: [
    {
      title: 'Diagnóstico de postura de ciberseguridad',
      summary:
        'Partimos de una revisión del estado actual para reconocer riesgos, brechas de control y prioridades de acción.',
      bullets: [
        'Evaluamos prácticas, herramientas y nivel de exposición en los activos más relevantes.',
        'Identificamos debilidades en protección, monitoreo, acceso y respuesta.',
        'Traducimos el diagnóstico en una hoja de prioridades con impacto operativo.'
      ],
      standards: ['Diagnóstico', 'Brechas', 'Prioridades'],
      note: 'Permite saber dónde conviene intervenir primero para reducir riesgo real.'
    },
    {
      title: 'Protección de infraestructura, endpoints y red',
      summary:
        'Fortalecemos controles prácticos para reducir superficie de ataque y elevar el nivel de protección sobre infraestructura crítica.',
      bullets: [
        'Revisamos segmentación, protecciones de red y controles sobre equipos finales.',
        'Priorizamos medidas que mejoran la continuidad y reducen vulnerabilidades explotables.',
        'Buscamos que la protección sea aplicable al entorno real de la organización.'
      ],
      standards: ['Infraestructura', 'Endpoints', 'Red'],
      note: 'Aporta una base de protección más sólida sobre los activos que sostienen la operación.'
    },
    {
      title: 'Identidad y acceso',
      summary:
        'Trabajamos controles de identidad para limitar accesos indebidos y mejorar la trazabilidad sobre usuarios y privilegios.',
      bullets: [
        'Fortalecemos autenticación, permisos y criterios de acceso según criticidad.',
        'Ayudamos a reducir riesgos asociados a cuentas compartidas o privilegios excesivos.',
        'Mejoramos la disciplina operativa sobre altas, cambios y bajas de acceso.'
      ],
      standards: ['IAM', 'MFA', 'Trazabilidad'],
      note: 'Reduce riesgos cotidianos asociados a autenticación débil y privilegios mal gestionados.'
    },
    {
      title: 'Monitoreo y respuesta',
      summary:
        'Impulsamos capacidades para detectar eventos relevantes a tiempo y responder con mayor coordinación y criterio.',
      bullets: [
        'Revisamos fuentes de eventos, visibilidad y criterios de escalamiento.',
        'Fortalecemos prácticas para manejo de incidentes y reducción del tiempo de respuesta.',
        'Promovemos una lectura útil de alertas para evitar reaccionar tarde o sin prioridad.'
      ],
      standards: ['Monitoreo', 'Alertas', 'Respuesta'],
      note: 'Mejora la capacidad de actuar con criterio cuando aparece un evento relevante.'
    },
    {
      title: 'Pentesting y remediación',
      summary:
        'Validamos la efectividad de los controles mediante pruebas y planes de mejora orientados al riesgo real del entorno.',
      bullets: [
        'Realizamos evaluaciones controladas para confirmar exposiciones técnicas relevantes.',
        'Priorizamos hallazgos según impacto potencial, facilidad de explotación y criticidad.',
        'Acompañamos la remediación para que los hallazgos se conviertan en mejoras concretas.'
      ],
      standards: ['Pentesting', 'Hallazgos', 'Remediación'],
      note: 'Convierte hallazgos técnicos en una lista de acciones con prioridad clara.'
    }
  ],
  cta: {
    title: 'Si necesitas reducir exposición y fortalecer la respuesta, este eje puede activarse por etapas.',
    description:
      'Podemos comenzar con una revisión de postura, priorizar controles o validar técnicamente la efectividad de lo que hoy tienes implementado.',
    label: 'Definir siguiente paso'
  }
};
