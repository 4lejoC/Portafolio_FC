import { SectionPageData } from '../models/site-page.model';

export const projectsPage: SectionPageData = {
  id: 'proyectos',
  route: '/proyectos',
  index: '01',
  title: 'Proyectos',
  subtitle: 'Eje de Ejecucion',
  description:
    'La ejecucion tecnica constituye la capacidad operativa de la organizacion para transformar requerimientos en soluciones tangibles mediante metodologias estructuradas y arquitecturas modernas.',
  outcomes: [
    'Orquesta metodologias cascada, agiles e hibridas segun la naturaleza del proyecto.',
    'Consolida el dato como un activo confiable con arquitectura, seguridad y calidad.',
    'Industrializa desarrollo, infraestructura y nube con modelos escalables y medibles.'
  ],
  accent: '#0f766e',
  topics: [
    {
      title: 'PMO: Cascada, agil e hibridos',
      summary:
        'La Oficina de Gestion de Proyectos debe orquestar diversos marcos de trabajo segun la naturaleza del proyecto.',
      bullets: [
        'Waterfall sigue un flujo lineal y secuencial de requerimientos, diseno, implementacion, verificacion y despliegue.',
        'Scrum y Kanban proponen ciclos iterativos e incrementales con retroalimentacion continua y alta adaptabilidad.',
        'Los enfoques hibridos o Wagile combinan la planificacion de cascada con la flexibilidad agil para equilibrar predictibilidad y velocidad.'
      ],
      standards: ['Waterfall', 'Scrum', 'Kanban', 'Wagile']
    },
    {
      title: 'Analitica y gobierno de datos',
      summary:
        'El gobierno de datos actua como el eje central que conecta las disciplinas de gestion de informacion.',
      bullets: [
        'DAMA-DMBOK establece 11 areas de conocimiento y destaca arquitectura, seguridad y calidad de datos como pilares del activo informacional.',
        'ISO/IEC 38505-1 ofrece directrices para que los organos de gobierno dirijan y monitoreen el uso de los datos.',
        'La creacion de valor, la gestion de riesgos y el cumplimiento se apoyan en principios de responsabilidad y transparencia.'
      ],
      standards: ['DAMA-DMBOK', 'ISO/IEC 38505-1']
    },
    {
      title: 'Fabrica de software',
      summary:
        'El modelo de fabrica de software industrializa el desarrollo mediante procesos repetibles y medibles.',
      bullets: [
        'ISO/IEC 12207 define procesos primarios, de soporte y organizacionales para el ciclo de vida del software.',
        'CMMI permite escalar desde procesos iniciales ad hoc hasta niveles de optimizacion continua basados en metricas.',
        'La calidad y la productividad pasan a depender del sistema de trabajo y no de esfuerzos aislados.'
      ],
      standards: ['ISO/IEC 12207', 'CMMI']
    },
    {
      title: 'Infraestructura hiperconvergente',
      summary:
        'La infraestructura hiperconvergente unifica los recursos mediante software y elimina los silos de hardware tradicionales.',
      bullets: [
        'La arquitectura se basa en nodos x86 estandar que integran CPU y memoria para escalar horizontalmente.',
        'Las redes definidas por software suelen usar topologias Leaf-Spine para mantener latencia predecible y trafico este-oeste sin cuellos de botella.',
        'El documento recomienda enlaces de 25 GbE o superiores para el trafico del cluster.'
      ],
      standards: ['HCI', 'SDN', 'Leaf-Spine']
    },
    {
      title: 'Cloud computing',
      summary:
        'La computacion en la nube se define por autoservicio bajo demanda, acceso ubicuo, elasticidad rapida y servicio medido.',
      bullets: [
        'ISO/IEC 17788 y NIST SP 800-145 describen las caracteristicas esenciales del servicio.',
        'El documento contempla despliegues en nubes publicas, privadas e hibridas.',
        'La nube hibrida permite portabilidad de cargas de trabajo para optimizar costos y cumplimiento.'
      ],
      standards: ['ISO/IEC 17788', 'NIST SP 800-145']
    }
  ]
};
