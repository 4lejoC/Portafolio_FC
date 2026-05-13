import { SectionPageData } from '../models/site-page.model';

export const informationSecurityPage: SectionPageData = {
  id: 'seguridad-informacion',
  route: '/seguridad-informacion',
  index: '03',
  title: 'Seguridad de la información',
  subtitle: 'Eje Normativo',
  promise:
    'Convertimos seguridad, riesgo y cumplimiento en prácticas sostenibles que protegen la operación y la confianza institucional.',
  description:
    'Este eje ayuda a pasar de controles aislados y exigencias dispersas a una estructura clara de responsabilidades, criterios de riesgo y evidencia de seguimiento.',
  painPoints: [
    'Controles dispersos que dependen de personas y no de un sistema claro.',
    'Riesgos de información sin criterio común para priorizar decisiones e inversiones.',
    'Presión de privacidad y cumplimiento sin una ruta práctica para aterrizarla.'
  ],
  outcomes: [
    'Establece controles, responsabilidades y políticas con enfoque práctico.',
    'Prioriza riesgos e inversiones de protección según impacto al negocio.',
    'Fortalece cumplimiento, privacidad y gobierno responsable de la información.'
  ],
  deliverables: [
    'Ruta de implementación o fortalecimiento de SGSI.',
    'Mapa de riesgos y criterios de tratamiento.',
    'Lineamientos de privacidad y protección de datos.',
    'Recomendaciones de gobierno responsable sobre información y tecnologías emergentes.',
    'Base documental y de seguimiento para mejora continua.'
  ],
  trustPoints: [
    'SGSI y controles',
    'Gestión de riesgos',
    'Privacidad y datos personales',
    'Gobierno responsable de la información'
  ],
  accent: '#b98533',
  diagram: {
    eyebrow: 'Ruta de control',
    title: 'Cómo llevamos la seguridad de la información a la operación',
    summary:
      'El servicio integra controles, gestión de riesgo, privacidad y gobierno responsable para que la seguridad no dependa solo de documentos, sino de prácticas sostenibles.',
    centerLabel: 'Núcleo del servicio',
    centerValue: 'SGSI',
    nodes: [
      {
        label: 'Controles',
        detail: 'Definimos políticas, roles y medidas aplicables al contexto del cliente.'
      },
      {
        label: 'Riesgo',
        detail: 'Priorizamos amenazas e inversiones de protección según impacto y exposición.'
      },
      {
        label: 'Privacidad',
        detail: 'Alineamos tratamiento de datos y responsabilidades de cumplimiento.'
      },
      {
        label: 'Gobierno',
        detail: 'Impulsamos uso responsable de información y tecnologías emergentes.'
      },
      {
        label: 'Evidencia',
        detail: 'Organizamos trazabilidad y soporte para seguimiento y mejora continua.'
      }
    ]
  },
  topics: [
    {
      title: 'Implementación de SGSI',
      summary:
        'Estructuramos un sistema de gestión que ordena políticas, responsabilidades y controles para volver la seguridad un proceso sostenible.',
      bullets: [
        'Definimos lineamientos, responsables y controles alineados con la realidad operativa.',
        'Organizamos la seguridad para que no dependa de esfuerzos aislados o reacciones puntuales.',
        'Tomamos como respaldo buenas prácticas y referencias reconocidas para dar consistencia al sistema.'
      ],
      standards: ['SGSI', 'Controles', 'Políticas'],
      note: 'Ayuda a pasar de controles dispersos a una estructura de gestión más estable.'
    },
    {
      title: 'Gestión de riesgos',
      summary:
        'Analizamos riesgos de seguridad con criterio de negocio para priorizar acciones, inversiones y decisiones de protección.',
      bullets: [
        'Identificamos amenazas, vulnerabilidades e impactos sobre procesos y activos relevantes.',
        'Ayudamos a priorizar tratamientos según criticidad y capacidad de respuesta.',
        'Buscamos que la gestión de riesgos sirva para decidir mejor, no solo para documentar.'
      ],
      standards: ['Riesgo', 'Priorización', 'Tratamiento'],
      note: 'Da una base clara para decidir dónde invertir y dónde intervenir primero.'
    },
    {
      title: 'Protección de datos y privacidad',
      summary:
        'Acompañamos a la organización en la aplicación de criterios de privacidad y tratamiento responsable de la información personal.',
      bullets: [
        'Ordenamos responsabilidades, prácticas y controles vinculados al tratamiento de datos.',
        'Fortalecemos claridad sobre obligaciones, derechos y manejo adecuado de información sensible.',
        'Promovemos una gestión que combine cumplimiento con confianza institucional.'
      ],
      standards: ['Privacidad', 'Datos', 'Cumplimiento'],
      note: 'Aporta orden y criterio cuando la organización necesita cumplir sin frenar su operación.'
    },
    {
      title: 'Gobierno responsable de la información y la IA',
      summary:
        'Ayudamos a establecer criterios para usar información y tecnologías emergentes con control, trazabilidad y responsabilidad.',
      bullets: [
        'Integramos seguridad, riesgo, cumplimiento y supervisión en un mismo marco de decisión.',
        'Buscamos que el uso de información e inteligencia artificial se apoye en reglas claras.',
        'La organización gana criterio para innovar sin perder control ni responsabilidad.'
      ],
      standards: ['Gobierno', 'IA', 'Trazabilidad'],
      note: 'Permite innovar con mayor claridad sobre límites, roles y condiciones de uso.'
    }
  ],
  cta: {
    title: 'Si tu organización necesita ordenar controles y reducir exposición normativa, este eje aporta estructura.',
    description:
      'Podemos comenzar fortaleciendo tu SGSI, priorizando riesgos o aterrizando una ruta de privacidad y cumplimiento.',
    label: 'Definir siguiente paso'
  }
};
