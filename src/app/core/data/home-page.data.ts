import { HomePageData } from '../models/site-page.model';

export const homePage: HomePageData = {
  kicker: 'PRO3 | Consultoría y Capacitación en Gestión de Proyectos y Programas',
  title: 'Transformamos ideas en resultados tangibles',
  subtitle:
    'Consultoría aplicada para fortalecer proyectos, tecnología, control y capacidades institucionales.',
  description:
    'En PRO3 acompañamos a organizaciones que necesitan ordenar su ejecución, reducir riesgos y desarrollar capacidades reales. Trabajamos con cinco ejes principales para convertir necesidades complejas en soluciones viables, controladas y con impacto.',
  metrics: [
    {
      value: '5',
      label: 'ejes de acompañamiento',
      note: 'una propuesta integral para proyectos, control, tecnología y formación'
    },
    {
      value: '3',
      label: 'formas de intervenir',
      note: 'diagnóstico, implementación y desarrollo de capacidades'
    },
    {
      value: '1',
      label: 'objetivo compartido',
      note: 'llevar ideas, equipos e iniciativas a resultados tangibles'
    }
  ],
  differentiators: [
    {
      title: 'Expertise práctico',
      summary:
        'No solo proponemos marcos: aterrizamos soluciones que pueden implementarse en el contexto real de la organización.'
    },
    {
      title: 'Acompañamiento con foco en resultados',
      summary:
        'Cada eje se orienta a decisiones, mejoras operativas y proyectos mejor estructurados, no a documentación sin impacto.'
    },
    {
      title: 'Formación aplicada',
      summary:
        'La capacitación se integra con casos, talleres y mentoring para que el conocimiento se convierta en práctica.'
    },
    {
      title: 'Visión integral',
      summary:
        'Conectamos proyectos, riesgos, tecnología, gobierno y desarrollo de capacidades para evitar esfuerzos aislados.'
    }
  ],
  process: [
    {
      index: '01',
      title: 'Diagnóstico',
      summary:
        'Leemos el punto de partida, identificamos brechas y definimos dónde conviene intervenir primero.'
    },
    {
      index: '02',
      title: 'Planificación',
      summary:
        'Traducimos prioridades en una hoja de ruta clara, con entregables, responsables y criterio de decisión.'
    },
    {
      index: '03',
      title: 'Implementación',
      summary:
        'Desarrollamos bienes, productos y servicios según el eje, la necesidad del cliente y la planificación acordada.'
    },
    {
      index: '04',
      title: 'Acompañamiento',
      summary:
        'Damos seguimiento para consolidar capacidades, ajustar la ejecución y sostener los resultados.'
    }
  ],
  entryPoints: [
    {
      title: 'Diagnóstico inicial',
      summary:
        'Ideal para organizaciones que necesitan claridad sobre brechas, prioridades y siguiente paso.',
      route: '#siguiente-paso',
      label: 'Solicitar diagnóstico'
    },
    {
      title: 'Fortalecimiento de control y riesgo',
      summary:
        'Para equipos que necesitan elevar protección, cumplimiento y capacidad de respuesta.',
      route: '#siguiente-paso',
      label: 'Solicitar evaluación'
    },
    {
      title: 'Formación aplicada',
      summary:
        'Para líderes y equipos que necesitan método, lenguaje común y mejor capacidad de ejecución.',
      route: '#siguiente-paso',
      label: 'Solicitar capacitación'
    }
  ],
  closingTitle: 'Elige el mejor punto de partida para tu organización',
  closingDescription:
    'Podemos comenzar con un diagnóstico, un fortalecimiento puntual o una ruta de acompañamiento por ejes. La prioridad depende del estado actual de tus proyectos, controles y capacidades.'
};
