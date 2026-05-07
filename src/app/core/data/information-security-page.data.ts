import { SectionPageData } from '../models/site-page.model';

export const informationSecurityPage: SectionPageData = {
  id: 'seguridad-informacion',
  route: '/seguridad-informacion',
  index: '03',
  title: 'Seguridad de la informacion',
  subtitle: 'Eje Normativo',
  description:
    'Este eje establece los marcos legales y estandares internacionales que garantizan el cumplimiento y la integridad de la informacion.',
  outcomes: [
    'Implementa un SGSI con controles organizacionales, de personas, fisicos y tecnologicos.',
    'Prioriza inversiones a partir del impacto al negocio y de riesgos especificos de seguridad.',
    'Alinea IA responsable, proteccion de datos y autoridad de control en un mismo eje normativo.'
  ],
  accent: '#a16207',
  topics: [
    {
      title: 'Sistema de Gestion de Seguridad de la Informacion (SGSI): ISO 27001',
      summary:
        'ISO/IEC 27001:2022 es el estandar global para implementar un SGSI y reorganiza el Anexo A en cuatro dominios.',
      bullets: [
        'Los 93 controles se agrupan en dominios organizacionales, de personas, fisicos y tecnologicos.',
        'La actualizacion incorpora controles para inteligencia de amenazas y seguridad en la nube.',
        'El SGSI convierte politicas y controles dispersos en un sistema operable, verificable y auditable.'
      ],
      standards: ['ISO/IEC 27001:2022']
    },
    {
      title: 'Gestion de riesgos',
      summary:
        'ISO 31000 e ISO/IEC 27005 articulan una mirada corporativa y una mirada tecnica para la gestion de riesgos.',
      bullets: [
        'ISO 31000:2018 cubre principios generales de identificacion, analisis y tratamiento del riesgo.',
        'ISO/IEC 27005:2022 profundiza la valoracion de riesgos especificos de seguridad de la informacion.',
        'El documento plantea priorizar inversiones en funcion del impacto al negocio.'
      ],
      standards: ['ISO 31000:2018', 'ISO/IEC 27005:2022']
    },
    {
      title: 'Sistema de gestion de IA',
      summary:
        'ISO/IEC 42001:2023 establece el primer estandar internacional para la gestion responsable de la inteligencia artificial.',
      bullets: [
        'Aborda sesgo, falta de transparencia y explicabilidad como riesgos eticos principales.',
        'Asegura que el desarrollo y uso de la IA se alinee con derechos humanos y gobernanza organizacional.',
        'Permite llevar iniciativas de IA a un entorno controlado y trazable.'
      ],
      standards: ['ISO/IEC 42001:2023']
    },
    {
      title: 'LOPDP y regulacion local',
      summary:
        'La LOPDP y su reglamento regulan en Ecuador el tratamiento de datos personales y el ejercicio de derechos del titular.',
      bullets: [
        'La ley reconoce acceso, rectificacion, eliminacion y portabilidad como derechos de los titulares.',
        'La SPDP actua como autoridad de control bajo el Reglamento General emitido en 2023.',
        'El documento recoge multas de hasta el 1 por ciento de la facturacion anual por incumplimientos graves.'
      ],
      standards: ['LOPDP', 'Reglamento General LOPDP', 'SPDP']
    }
  ]
};
