import { SectionPageData } from '../models/site-page.model';

export const trainingPage: SectionPageData = {
  id: 'capacitacion',
  route: '/capacitacion',
  index: '05',
  title: 'Capacitacion',
  subtitle: 'Eje de Formacion',
  description:
    'El capital humano capacitado es el garante de la sostenibilidad de la estrategia tecnologica.',
  outcomes: [
    'Consolida capacidades de liderazgo en proyectos predictivos, agiles e hibridos.',
    'Fortalece la identificacion y mitigacion de amenazas con especializacion en riesgos.',
    'Incorpora una formula explicita de criticidad para priorizar activos.'
  ],
  accent: '#15803d',
  topics: [
    {
      title: 'Gerencia de proyectos',
      summary:
        'La certificacion PMP del PMI valida capacidades de liderazgo y gestion en entornos predictivos, agiles e hibridos.',
      bullets: [
        'PMP se presenta en el documento como el estandar mundial para gerencia de proyectos.',
        'CAPM ofrece una base solida para profesionales tecnicos que inician en direccion de proyectos.',
        'La ruta de formacion conecta lenguaje comun, metodo y trazabilidad ejecutiva.'
      ],
      standards: ['PMP', 'CAPM', 'PMI']
    },
    {
      title: 'Gestion de riesgos',
      summary:
        'La especializacion en riesgos se plantea como una capacidad critica para la resiliencia organizacional.',
      bullets: [
        'PMI-RMP enfoca al profesional en la identificacion y mitigacion de amenazas dentro de proyectos.',
        'Las certificaciones de Lead Risk Manager en ISO 31000 acreditan competencia para disenar marcos de gestion de riesgos.',
        'El foco es proteger reputacion, competitividad y continuidad institucional.'
      ],
      standards: ['PMI-RMP', 'ISO 31000', 'Lead Risk Manager']
    },
    {
      title: 'Formula de evaluacion de riesgos para priorizacion de activos',
      summary:
        'El documento cierra este eje con una formula de criticidad para priorizar activos a partir de vulnerabilidad, amenaza, impacto y probabilidad.',
      bullets: [
        'Criticidad = (Vulnerabilidad + Amenaza) x Impacto x Probabilidad',
        'La expresion se usa como criterio de priorizacion dentro del propio reporte.',
        'Este bloque deja explicito el puente entre formacion, analisis y toma de decisiones.'
      ],
      standards: ['Criticidad', 'Vulnerabilidad', 'Amenaza', 'Impacto', 'Probabilidad']
    }
  ]
};
