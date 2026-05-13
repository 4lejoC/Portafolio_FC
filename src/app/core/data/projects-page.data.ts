import { SectionPageData } from '../models/site-page.model';

export const projectsPage: SectionPageData = {
  id: 'proyectos',
  route: '/proyectos',
  index: '01',
  title: 'Proyectos',
  subtitle: 'Eje de Ejecución',
  promise:
    'Ordenamos la gestión para que las iniciativas avancen con método, control y opciones reales de financiamiento.',
  description:
    'Intervenimos cuando la organización necesita priorizar mejor, ordenar el seguimiento y convertir iniciativas dispersas en proyectos con gobierno, trazabilidad y mayor viabilidad.',
  painPoints: [
    'Proyectos sin prioridad clara ni responsables definidos.',
    'Seguimiento disperso que dificulta decisiones oportunas.',
    'Ideas valiosas que no logran convertirse en propuestas financiables.'
  ],
  outcomes: [
    'Identificación de brechas y oportunidades para mejorar la madurez de gestión de proyectos.',
    'Diseño o fortalecimiento de una PMO con roles, seguimiento y criterios de priorización claros.',
    'Mejorar la formulación, el control y la ejecución de iniciativas con enfoque en resultados y financiamiento.'
  ],
  deliverables: [
    'Diagnóstico de madurez y hoja de ruta.',
    'Estructura de PMO, roles y tableros de seguimiento.',
    'Modelo de gestión de programas y proyectos.',
    'Guía metodológica para entornos predictivos, ágiles o híbridos.',
    'Fortalecimiento de formulación para financiamiento.'
  ],
  trustPoints: [
    'Diagnóstico de madurez',
    'Gobernanza de proyectos yprogramas',
    'Implementación de PMO',
    'Mentoría para Project Managers'
  ],
  accent: '#16756b',
  diagram: {
    eyebrow: 'Ruta de acompañamiento',
    title: 'Cómo convertimos una idea en un proyecto ejecutable',
    summary:
      'El trabajo parte de entender la situación actual, ordenar la gobernanza y llevar la iniciativa hacia una ejecución controlada, medible y alineada con la estrategia.',
    centerLabel: 'Núcleo del servicio',
    centerValue: 'PMO',
    nodes: [
      {
        label: 'Diagnóstico',
        detail: 'Evaluamos madurez, brechas y puntos críticos que frenan la ejecución.'
      },
      {
        label: 'Estructura',
        detail: 'Definimos roles, procesos, seguimiento y gobierno para ordenar la gestión.'
      },
      {
        label: 'Metodología',
        detail: 'Aplicamos enfoques predictivos, ágiles o híbridos según el contexto.'
      },
      {
        label: 'Ejecución',
        detail: 'Fortalecemos control, visibilidad y toma de decisiones durante la entrega.'
      },
      {
        label: 'Financiamiento',
        detail: 'Mejoramos formulación, impacto, riesgo y sustento para postulaciones.'
      }
    ]
  },
  topics: [
    {
      title: 'Diagnóstico de madurez y optimización',
      summary:
        'Revisamos la situación actual de la organización para identificar brechas, ordenar prioridades y definir una hoja de ruta realista.',
      bullets: [
        'Evaluamos procesos, roles, herramientas y nivel de control sobre proyectos vigentes.',
        'Identificamos cuellos de botella, riesgos recurrentes y oportunidades de mejora.',
        'Entregamos una hoja de ruta para fortalecer la gestión y la capacidad de ejecución.'
      ],
      standards: ['Diagnóstico', 'Madurez', 'Hoja de ruta'],
      note: 'Ideal para organizaciones que necesitan ordenar su punto de partida antes de escalar.'
    },
    {
      title: 'Implementación y fortalecimiento de PMO',
      summary:
        'Diseñamos o reforzamos la Oficina de Proyectos para que la organización tenga gobierno, seguimiento y criterios comunes.',
      bullets: [
        'Definimos estructura, funciones, responsabilidades y flujos de decisión.',
        'Establecemos tableros, hitos, indicadores y mecanismos de control.',
        'Buscamos que la PMO se convierta en un soporte para priorizar y ejecutar mejor.'
      ],
      standards: ['PMO', 'Gobernanza', 'Seguimiento'],
      note: 'Convierte la PMO en un centro de decisión y acompañamiento, no solo de reporte.'
    },
    {
      title: 'Gestión de programas y proyectos',
      summary:
        'Alineamos iniciativas con la estrategia para que los esfuerzos aislados se conviertan en resultados coordinados y medibles.',
      bullets: [
        'Organizamos proyectos individuales o interconectados bajo una visión común.',
        'Fortalecemos la gestión de dependencias, beneficios y puntos de decisión.',
        'Mejoramos la visibilidad ejecutiva para seguimiento y toma de acciones.'
      ],
      standards: ['Programas', 'Beneficios', 'Alineación'],
      note: 'Aporta visibilidad ejecutiva cuando la organización gestiona varios frentes al mismo tiempo.'
    },
    {
      title: 'Metodologías ágiles, predictivas e híbridas',
      summary:
        'Seleccionamos e implementamos el enfoque de trabajo más adecuado según el tipo de proyecto, la cultura y el nivel de madurez.',
      bullets: [
        'Aplicamos metodologías tradicionales cuando se requiere mayor previsibilidad y control.',
        'Incorporamos enfoques ágiles cuando se necesita adaptación, iteración y velocidad.',
        'Combinamos ambos modelos en esquemas híbridos orientados a resultados.'
      ],
      standards: ['Waterfall', 'Scrum', 'Kanban', 'Híbrido'],
      note: 'Permite adaptar el método al tipo de iniciativa sin perder criterio de gestión.'
    },
    {
      title: 'Formulación de proyectos para financiamiento',
      summary:
        'Fortalecemos proyectos que necesitan sustento técnico, impacto claro y mejor estructura para acceder a financiamiento.',
      bullets: [
        'Revisamos claridad del problema, alcance, impacto esperado y alineación estratégica.',
        'Trabajamos riesgos, narrativa técnica y consistencia de la propuesta.',
        'Apoyamos la construcción de un proyecto más defendible ante convocatorias o inversionistas.'
      ],
      standards: ['Financiamiento', 'Impacto', 'Riesgo'],
      note: 'Refuerza proyectos que necesitan mejor narrativa técnica y mayor sustento para ser aprobados.'
    }
  ],
  cta: {
    title: 'Si tu organización necesita ordenar su ejecución, este eje puede ser el mejor punto de partida.',
    description:
      'Podemos comenzar con un diagnóstico, fortalecer tu PMO o aterrizar una ruta de gestión para proyectos y programas.',
    label: 'Definir siguiente paso'
  }
};
