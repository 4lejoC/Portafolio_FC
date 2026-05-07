import { SectionPageData } from '../models/site-page.model';

export const governancePage: SectionPageData = {
  id: 'gobernanza-tic',
  route: '/gobernanza-tic',
  index: '04',
  title: 'Gobernanza TIC',
  subtitle: 'Eje de Gobernanza',
  description:
    'La gobernanza asegura que el uso de las tecnologias de la informacion genere valor y cumpla con la direccion estrategica de la entidad.',
  outcomes: [
    'Permite a la alta direccion supervisar TI como un activo estrategico.',
    'Diferencia gobierno y gestion para alinear metas de negocio y de TI.',
    'Conecta gestion de servicios y direccion de proyectos con practicas modernas y adaptables.'
  ],
  accent: '#1d4ed8',
  topics: [
    {
      title: 'Gobierno TI: ISO 38500 y COBIT',
      summary:
        'ISO/IEC 38500 y COBIT 2019 forman la base para evaluar, dirigir y monitorear la tecnologia como activo estrategico.',
      bullets: [
        'ISO/IEC 38500 define seis principios: responsabilidad, estrategia, adquisicion, desempeno, conformidad y comportamiento.',
        'COBIT 2019 diferencia claramente gobierno y gestion para alinear metas de negocio con metas de TI.',
        'La tecnologia pasa de ser solo operacion a convertirse en instrumento de direccion.'
      ],
      standards: ['ISO/IEC 38500', 'COBIT 2019']
    },
    {
      title: 'Mejores practicas: ITIL y PMBOK',
      summary:
        'ITIL 4 y PMBOK articulan la gestion moderna de servicios y proyectos bajo enfoques mas adaptables.',
      bullets: [
        'ITIL 4 se centra en el Sistema de Valor del Servicio e integra practicas agiles y DevOps para entregar valor constante.',
        'PMBOK evoluciona desde un enfoque basado en procesos hacia 12 principios y 8 dominios de desempeno en su septima edicion.',
        'El documento recoge que la octava edicion proyectada reintroduce procesos simplificados e integra sostenibilidad.'
      ],
      standards: ['ITIL 4', 'PMBOK 7', 'PMBOK 8']
    }
  ]
};
