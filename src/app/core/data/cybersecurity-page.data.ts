import { SectionPageData } from '../models/site-page.model';

export const cybersecurityPage: SectionPageData = {
  id: 'ciberseguridad',
  route: '/ciberseguridad',
  index: '02',
  title: 'Ciberseguridad',
  subtitle: 'Eje de Defensa',
  description:
    'El eje de defensa se centra en la proteccion activa y la respuesta inmediata ante amenazas digitales mediante tecnologias de visibilidad profunda.',
  outcomes: [
    'Monitoriza endpoints, red, nube y correo para responder a ataques complejos.',
    'Implementa controles por capas en red e identidades con niveles de aseguramiento definidos.',
    'Valida la efectividad de los controles mediante pentesting y remediacion priorizada.'
  ],
  accent: '#c2410c',
  topics: [
    {
      title: 'EDR y XDR',
      summary:
        'Las soluciones EDR monitorizan dispositivos finales para detectar comportamientos anomalos mediante indicadores de compromiso.',
      bullets: [
        'EDR cubre servidores y laptops para detectar actividad sospechosa en los puntos finales.',
        'XDR integra telemetria de red, nube y correo electronico para proporcionar una respuesta unificada y automatizada.',
        'El objetivo es contener ataques complejos que atraviesan varios dominios tecnologicos.'
      ],
      standards: ['EDR', 'XDR', 'IOC']
    },
    {
      title: 'Firewalls y seguridad de red',
      summary:
        'Basandose en NIST SP 800-41 Rev. 1, los firewalls deben implementarse en arquitecturas de capas.',
      bullets: [
        'Los firewalls de inspeccion de estado monitorizan el contexto de las conexiones para filtrar mejor el trafico.',
        'Los NGFW agregan inspeccion profunda de paquetes y controles mas granulares.',
        'La DMZ sigue siendo la mejor practica para aislar servicios publicos de la red interna mediante una doble barrera de proteccion.'
      ],
      standards: ['NIST SP 800-41', 'Stateful Firewall', 'NGFW', 'DMZ']
    },
    {
      title: 'IAM: identidades y accesos',
      summary:
        'NIST SP 800-63-3 define el marco para la gestion de identidades digitales en tres niveles de seguridad.',
      bullets: [
        'IAL mide el rigor de la verificacion de la identidad real del usuario.',
        'AAL define la fortaleza de los factores de autenticacion, incluido el MFA resistente a phishing.',
        'FAL cubre la seguridad en la transmision de atributos de identidad entre sistemas.'
      ],
      standards: ['NIST SP 800-63-3', 'IAL', 'AAL', 'FAL']
    },
    {
      title: 'Pentesting y vulnerabilidades',
      summary:
        'La validacion de controles se realiza mediante OWASP, NIST SP 800-115 y PTES para identificar y remediar brechas antes de su explotacion.',
      bullets: [
        'OWASP cubre pruebas sobre aplicaciones web y firmware dentro de un marco ofensivo controlado.',
        'NIST SP 800-115 aporta lineamientos para planificar, ejecutar y documentar la evaluacion.',
        'Las fases de inteligencia, modelado de amenazas, explotacion y post-explotacion permiten priorizar la remediacion.'
      ],
      standards: ['OWASP', 'PTES', 'NIST SP 800-115']
    }
  ]
};
