import { SectionPageData } from '../models/site-page.model';

export const trainingPage: SectionPageData = {
  id: 'capacitacion',
  route: '/capacitacion',
  index: '05',
  title: 'Capacitación',
  subtitle: 'Eje de Formación',
  promise:
    'Desarrollamos capacidades aplicables para que líderes y equipos ejecuten mejor, con método y criterio.',
  description:
    'Está orientado a organizaciones que necesitan elevar criterio, lenguaje común y capacidad de ejecución sin caer en formación genérica o solo teórica.',
  painPoints: [
    'Equipos sin un lenguaje común para gestionar iniciativas y tomar decisiones.',
    'Capacitaciones teóricas que no logran bajar a la realidad del trabajo.',
    'Necesidad de fortalecer liderazgo, agilidad y criterio de riesgo dentro de la operación.'
  ],
  outcomes: [
    'Fortalece liderazgo y lenguaje común en gestión de proyectos.',
    'Acelera la adopción de enfoques ágiles, híbridos y de gestión de riesgos.',
    'Convierte la capacitación en una herramienta aplicable a decisiones y resultados.'
  ],
  deliverables: [
    'Rutas de formación por perfil o necesidad.',
    'Talleres aplicados para equipos y líderes.',
    'Preparación para certificaciones relevantes.',
    'Mentoring para resolver casos reales.',
    'Transferencia práctica hacia la operación.'
  ],
  trustPoints: [
    'Formación práctica',
    'Talleres in-company',
    'Mentoring aplicado',
    'Rutas de certificación'
  ],
  accent: '#2d7d59',
  diagram: {
    eyebrow: 'Ruta de formación',
    title: 'Cómo llevamos el conocimiento a la práctica',
    summary:
      'La formación combina bases metodológicas, talleres aplicados y acompañamiento para que líderes y equipos mejoren su forma de ejecutar proyectos.',
    centerLabel: 'Núcleo del servicio',
    centerValue: 'Aprendizaje',
    nodes: [
      {
        label: 'Base',
        detail: 'Construimos fundamentos comunes en gestión de proyectos y organización del trabajo.'
      },
      {
        label: 'Certificación',
        detail: 'Preparamos perfiles para rutas de certificación con foco práctico.'
      },
      {
        label: 'Agilidad',
        detail: 'Impulsamos adopción de enfoques ágiles e híbridos según el contexto.'
      },
      {
        label: 'Riesgo',
        detail: 'Fortalecemos criterio para priorizar, evaluar y sostener decisiones.'
      },
      {
        label: 'Mentoring',
        detail: 'Aterrizamos el aprendizaje a la realidad operativa de cada organización.'
      }
    ]
  },
  topics: [
    {
      title: 'Gestión de proyectos y liderazgo',
      summary:
        'Fortalecemos capacidades de liderazgo, organización y seguimiento para que los equipos ejecuten con mayor claridad y consistencia.',
      bullets: [
        'Trabajamos fundamentos de gestión, planificación, seguimiento y comunicación.',
        'La formación se adapta a líderes, responsables de proyectos y equipos de apoyo.',
        'Las rutas pueden apoyarse en contenidos alineados con referentes como PMI, PMP y CAPM.'
      ],
      standards: ['PMP', 'CAPM', 'PMI'],
      note: 'Consolida lenguaje común y mejores prácticas para liderar proyectos con más seguridad.'
    },
    {
      title: 'Metodologías ágiles e híbridas',
      summary:
        'Capacitamos en enfoques ágiles, tradicionales e híbridos para que la organización adopte la forma de trabajo más conveniente.',
      bullets: [
        'Abordamos principios de Scrum, Kanban y esquemas de trabajo iterativo.',
        'Mostramos cómo combinar control y adaptación en entornos híbridos.',
        'La meta es mejorar ejecución, colaboración y capacidad de respuesta del equipo.'
      ],
      standards: ['Agile', 'Scrum', 'Híbrido'],
      note: 'Aporta flexibilidad sin perder control cuando los equipos trabajan con diferentes ritmos.'
    },
    {
      title: 'Riesgos y formulación de proyectos',
      summary:
        'Desarrollamos criterio para evaluar riesgos, sustentar decisiones y fortalecer proyectos que requieren mejor formulación.',
      bullets: [
        'Trabajamos análisis de impacto, riesgos y prioridades de acción.',
        'Ayudamos a traducir ideas en propuestas mejor argumentadas y más viables.',
        'La capacitación conecta método, análisis y toma de decisiones.'
      ],
      standards: ['Riesgo', 'Impacto', 'Priorización'],
      note: 'Une conocimiento técnico con criterio para sostener iniciativas frente a evaluadores o directivos.'
    },
    {
      title: 'Talleres in-company y mentoring',
      summary:
        'Llevamos la formación al entorno real del cliente para que el aprendizaje se convierta en práctica, acompañamiento y mejora sostenida.',
      bullets: [
        'Diseñamos talleres aplicados al contexto, madurez y necesidades de cada organización.',
        'Combinamos sesiones prácticas con mentoring para resolver casos reales.',
        'Buscamos que el conocimiento no se quede en teoría, sino que impacte la ejecución.'
      ],
      standards: ['In-company', 'Mentoring', 'Aplicación'],
      note: 'Permite que la capacitación deje resultados concretos y no solo asistencia a sesiones.'
    }
  ],
  cta: {
    title: 'Si quieres elevar capacidades sin caer en capacitaciones genéricas, este eje aporta formación útil.',
    description:
      'Podemos comenzar por una ruta para líderes, talleres aplicados para equipos o mentoring sobre proyectos y riesgos reales.',
    label: 'Definir siguiente paso'
  }
};
