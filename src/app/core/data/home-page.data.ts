import { HomePageData } from '../models/site-page.model';

export const homePage: HomePageData = {
  kicker: 'Solicitud de informacion tecnologica oficial',
  title: 'Marco integral de estrategia tecnologica',
  subtitle:
    'Ejes de ejecucion, defensa, normativa, gobernanza y formacion.',
  description:
    'Este reporte presenta una vision tecnica y normativa de los pilares fundamentales que sustentan la infraestructura y gestion tecnologica de una organizacion moderna. Esta portada solo organiza la entrada al documento en cinco paginas independientes.',
  focusAreas: [
    'Proyectos',
    'Ciberseguridad',
    'Seguridad de la informacion',
    'Gobernanza TIC',
    'Capacitacion'
  ],
  metrics: [
    {
      value: '5',
      label: 'ejes del reporte',
      note: 'proyectos, ciberseguridad, normativa, gobernanza y formacion'
    },
    {
      value: '17',
      label: 'bloques tematicos',
      note: 'desde PMO y gobierno de datos hasta COBIT, PMP e ISO 42001'
    },
    {
      value: '1',
      label: 'formula de criticidad',
      note: 'incluida en capacitacion para priorizacion de activos'
    }
  ]
};
