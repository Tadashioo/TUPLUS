# TUPLUS V4

Web corporativa y cotizador integrado. Versión local para revisión, preparada el 15/09/2026 para Jeampier y el equipo CEL-WEB-01. No publicada.

## Cómo probar

1. Extrae la carpeta completa del ZIP.
2. Abre `frontend/index.html` en Chrome o Edge. También puedes abrir `frontend/` en Visual Studio Code y usar Live Server.
3. Entra a **Cotizar mi web**, cambia el tipo de página, selecciona el plan y los extras.
4. Completa los datos y el consentimiento. **Preparar consulta** genera un enlace; **Abrir WhatsApp** permite revisar y enviar el mensaje. La web no lo envía por ti.

No requiere framework, paquetes, PHP, MySQL ni conexión para cargar el diseño. WhatsApp necesita conexión. Conserva las carpetas y nombres de archivo juntos.

## Cambios principales

- Diseño unificado en azul marino, dorado y fondos claros. Logo original sin alteraciones.
- Portada con colibrí animado, carrusel 3D de conceptos y adaptación a móvil.
- Cinco páginas de solución con contexto, capacidades, entregables, método, preguntas y contacto contextual.
- Portafolio de conceptos con filtros y detalle accesible. No representa clientes ni resultados reales.
- Cotizador en página propia (`frontend/cotizador.html`): tres pasos, resumen de precios, ajustes de tipo, extras y descarga de texto.
- Formularios con nombre, empresa/actividad, correo o teléfono, país, preferencia, mensaje, origen y consentimiento.
- Menú con teclado, cierre con Escape, estados de selección y movimiento reducido. El botón flotante se oculta durante cotización/contacto para no interferir con los campos.
- Información de privacidad de esta versión, página 404 y eventos locales sin datos personales.

## Precios y cotizador

Se conservaron los importes de `cotizador-web`: Profesional S/ 950, Empresarial S/ 1,575 y Corporativo S/ 2,450. Corporativa: sin ajuste; tienda: +S/ 350; landing: −S/ 150. Cada página adicional cuesta S/ 50; opciones de 0, 5, 10, 15 y 20 páginas.

**Total = plan + ajuste del tipo + páginas adicionales × precio por página.**

Los importes base son referencias del material recibido, no tarifas aprobadas. El cotizador muestra soles por defecto en español y permite elegir pesos mexicanos; los demás idiomas usan su moneda de referencia con tasas indicativas fechadas. Impuestos, dominio, hosting, integraciones y plazo requieren confirmación. Se retiraron las promesas no verificadas de un año gratis y entrega en 10–15 días.

Modifica los importes en `frontend/config.js`: las tarjetas, el desglose, la descarga y el mensaje usan esa configuración al cargar la página. `frontend/quote-core.js` contiene las reglas y validación del cálculo. `frontend/script.js` coordina la interfaz.

El WhatsApp configurado es **+51 916 828 870**, conservado de ambos proyectos originales. Su autorización comercial definitiva queda pendiente. Para cambiarlo, actualiza `frontend/config.js` y los enlaces de respaldo sin JavaScript que aparecen en los HTML.

## Qué ocurre con el PHP original

Los archivos PHP recibidos necesitan MySQL y correo configurados, pero no incluían la base de datos ni un acceso protegido al panel administrativo. No se incorporan a esta entrega estática. Esta versión no guarda solicitudes en un servidor ni promete enviar correos. El flujo operativo es estimación → consulta preparada → WhatsApp.

Si se aprueba persistir leads, el siguiente alcance será un backend con validación del lado del servidor, recálculo de precios, consentimiento, acceso autenticado y almacenamiento autorizado. No publiques el panel PHP original sin resolver esos puntos.

## Relación con el brief

Fuente revisada: PRJ-WEB-01, Brief Operativo Web TUPLUS v1.0, septiembre de 2026:
https://docs.google.com/document/d/1Yw201114vlm7Am9C48I4r2qPUSp3dmc9/edit

Base recibida: `TUPLUS-UI-UX` y `tuplusv1/cotizador-web`. La integración del cotizador es la ampliación solicitada por Jeampier. Los originales se conservaron.

| Requisito | Estado de esta entrega |
| --- | --- |
| RF-01 Navegación | Navegación adaptable, teclado, estado activo y anclas |
| RF-02 Soluciones | Cinco páginas con información modular y CTA contextual |
| RF-03 Formulario | Validación, país, preferencia, origen y consentimiento; entrega manual por WhatsApp, sin persistencia |
| RF-04 Contacto | Canal original conservado; evento local sin datos personales; autorización pendiente |
| RF-05 Portafolio | Conceptos filtrables con detalle; casos de clientes pendientes de autorización |
| RF-06 Contenidos | HTML y configuración separados; CMS/editor para no programadores pendiente |
| RF-07 Analítica | Eventos locales preparados, sin proveedor ni transmisión; verificación en producción pendiente |
| RF-08 SEO | Títulos, descripciones y Open Graph; dominio, canonical, sitemap e imagen social pendientes |
| RF-09 Estados | Validación, errores, mensaje preparado y 404; configurar 404 en el hosting |
| RF-10 Privacidad | Consentimiento explícito y descripción funcional; texto legal definitivo y herramientas pendientes |

Los HTML llevan `noindex, nofollow` por tratarse de una revisión local. Antes del lanzamiento, el equipo debe aprobar contenido, precios, canal, legales y casos; definir dominio, hosting y analítica; completar EQU-02; preparar canonical/sitemap/imagen social y retirar `noindex` en la versión de producción aprobada. No se declara cumplimiento completo del brief ni autorización de publicación.

## Eventos disponibles

La interfaz emite `tuplus:event` con `page_view`, `quote_cta`, `quote_step`, `quote_download`, `contact_open`, `lead_prepared` y `lead_open_whatsapp`. Son señales locales; no hay Google Analytics, píxeles, cookies ni solicitudes a terceros. Los eventos de formularios no incluyen nombre, teléfono, correo, mensaje ni país. Preparar o abrir WhatsApp no equivale a confirmar una entrega al destinatario.

## Archivos

- `frontend/index.html`: página principal.
- `frontend/cotizador.html`: cotizador web en página propia (tres pasos, resumen y descarga).
- `frontend/style.css`: diseño compartido y adaptación a pantallas.
- `frontend/config.js`: importes y canal.
- `frontend/quote-core.js`: cálculo y validación.
- `frontend/script.js`: navegación, filtros, formularios y cotizador.
- `frontend/soluciones/`: páginas Web, Commerce, Automation, Systems y Data & Security.
- `frontend/privacidad.html`: información de funcionamiento y pendientes legales.
- `frontend/404.html`: página de error para configurar en el hosting.
- `frontend/colibri.png`: recurso original de marca, sin modificaciones.

## Verificación

Las 45 combinaciones de tipo, plan y extras se contrastaron con los importes originales. Se verificaron valores inválidos, teléfonos/correos, codificación del mensaje y enlaces internos de las ocho páginas. Revisión en navegador de escritorio, móvil y tablet; resultados detallados en `VERIFICACION.md`.

No se enviaron mensajes de prueba, no se publicaron archivos y no se conectaron servicios externos. Quedan pendientes QA en un segundo navegador, dispositivos reales y las pruebas de entrega con un responsable autorizado.

## Idiomas, monedas, carrusel y contacto

- El selector de idioma está disponible en todas las páginas: español, inglés, chino simplificado, ruso, portugués, francés, japonés y alemán. La preferencia se guarda localmente en el navegador.
- Las traducciones automáticas son un primer borrador y deben revisarse por una persona nativa antes de publicar, en especial la información de privacidad, términos comerciales, precios y mensajes de contacto.
- La portada muestra un colibrí animado que completa un giro al desplazarse hacia abajo. El carrusel 3D gira como un mostrador y sus flechas están conectadas a la navegación.
- El botón flotante de WhatsApp usa el verde de la aplicación con un resplandor neón suave y accesible.

Esta entrega es una carpeta fuente de revisión. No está publicada.

### Moneda e idiomas

- El español muestra soles peruanos por defecto y permite elegir pesos mexicanos en el cotizador. Inglés muestra USD; chino CNY; ruso RUB; portugués BRL; francés y alemán EUR; japonés JPY.
- La conversión parte de importes base en PEN y usa tasas de referencia indicativas guardadas en `frontend/config.js` (corte: 22/09/2026; 1 PEN = MXN 5.122415, USD 0.296616, EUR 0.259015, CNY 1.99132, RUB 24.855162, BRL 1.517903, JPY 46.663114). No es una oferta final ni una tasa de transacción y debe actualizarse antes de producción.
- Los textos de preguntas frecuentes que faltaban se completaron. Los importes, sumas del cotizador, descarga y resumen de WhatsApp usan la moneda seleccionada.
- En la portada se sustituyeron las maquetas de páginas por el emblema del colibrí animado; se balancea en vuelo y completa un giro al bajar. Las flechas del carrusel usan ahora su atributo de navegación propio.
Tasas consultadas como referencia: https://open.er-api.com/v6/latest/PEN. La web usa la copia fechada incluida en la configuración y no realiza peticiones de cambio en tiempo de ejecución.
