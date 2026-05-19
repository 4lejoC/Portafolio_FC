# PRO3

Sitio Angular para el portafolio comercial de `PRO3`, enfocado en seis ejes:

- `Proyectos`
- `Riesgos`
- `Ciberseguridad`
- `Seguridad de la Informacion`
- `Gobernanza TIC`
- `Capacitacion`

## Estructura

- `src/app/core/data`: contenido editable de la home y de cada eje.
- `src/app/pages`: paginas principales del sitio.
- `src/app/shared/components`: bloques reutilizables de UI.
- `public/report-visuals`: imagenes comerciales usadas en portada y servicios.
- `docs/PRO3 - Presentacion 003.pptx`: referencia de contenido comercial.

## Comandos

```bash
npm run start
npm run build
npm run test
```

## Publicacion

- `develop`: rama de trabajo y pruebas.
- `main`: rama de publicacion.
- GitHub Pages se actualiza con `push` a `main`.

## Nota tecnica

- El proyecto usa Angular con SSR en build.
- La home publica actualmente los seis ejes.
- Si en el futuro se habilitan paginas individuales por eje, cada eje debera contar tambien con su asset visual correspondiente en `public/report-visuals`.
