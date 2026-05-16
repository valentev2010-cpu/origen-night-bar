# Cuestionario de la Actividad 10: “Caza errores”

## Datos del estudiante
- Nombre completo: Valente V
- Grupo:wilmar , santiago
- Fecha: 15/05/2026
- Nombre del proyecto revisado: Origen Night Bar

---

## 1. ¿Cuáles son las partes mínimas que debe tener un archivo HTML para que el navegador lo interprete correctamente?

Las partes mínimas de un archivo HTML son `<!DOCTYPE html>`, la etiqueta `<html>`, el `<head>` donde van metadatos y enlaces, y el `<body>` donde está el contenido visible de la página.

---

## 2. Explica qué puede ocurrir en una página web cuando una etiqueta HTML queda mal cerrada o mal anidada.

Cuando una etiqueta HTML está mal cerrada o mal anidada puede romper el diseño de la página, hacer que algunos elementos no se muestren correctamente o que el navegador interprete mal la estructura. Esto también puede afectar CSS y JavaScript.

---

## 3. Explica qué es una ruta de archivo y por qué una ruta incorrecta puede impedir que aparezca una imagen, un estilo o un script.

Una ruta de archivo es la dirección donde se encuentra un recurso como imágenes, CSS o JavaScript. Si la ruta está mal escrita, el navegador no puede encontrar el archivo y por eso no carga estilos, imágenes o funciones del sitio.

---

## 4. Observa este fragmento: `<link rel="stylesheet" href="css/style.css">`. Si el archivo real se llama `styles.css`, ¿cuál es el error y cómo se corrige?

El error es que el nombre del archivo no coincide. Se está llamando `style.css` pero el archivo correcto es `styles.css`.  
Corrección: `href="css/styles.css"`.

---

## 5. Explica para qué sirven los atributos `src`, `href`, `id`, `class` y `alt`.

`src` sirve para indicar la ruta de imágenes o scripts.  
`href` sirve para enlaces o archivos CSS.  
`id` identifica un elemento único.  
`class` agrupa elementos para aplicar estilos.  
`alt` es texto alternativo para imágenes cuando no cargan o para accesibilidad.

---

## 6. ¿Cuál es la diferencia entre un selector de clase y un selector de identificador? Incluye un ejemplo.

Un selector de clase (`.`) se puede usar en varios elementos, mientras que un selector de ID (`#`) es único.

Ejemplo:
- Clase: `.menu { }`
- ID: `#header { }`

---

## 7. Si en HTML aparece `<div class="hero-contnet">` pero en CSS aparece `.hero-content`, ¿qué problema se genera y cómo se corrige?

El problema es que la clase está mal escrita en HTML, por lo tanto el CSS no se aplica.  
La corrección es escribir la clase correctamente: `class="hero-content"`.

---

## 8. Observa este fragmento: `.menu-grid { display: grips; }` ¿Qué error tiene y cuál es la corrección?

El error es que `grips` no existe en CSS.  
La corrección es `display: grid;`.

---

## 9. Si la variable `--dorado` no existe en este código, ¿qué efecto puede tener en el diseño y cómo lo diagnosticarías?

Si la variable `--dorado` no existe, el navegador no puede aplicar ese color, por lo que el diseño puede verse incompleto o sin estilos correctos.  
Se diagnostica usando inspeccionar elemento, revisando `:root` o la consola del navegador.

---

## 10. ¿Qué función cumple una media query en CSS y qué error tiene este ejemplo: `@media (max-wdith: 760px)`?

Las media queries sirven para adaptar el diseño a diferentes tamaños de pantalla.  
El error es que `max-wdith` está mal escrito, lo correcto es `max-width`.

---

## 11. Menciona tres herramientas del navegador que puedes usar para diagnosticar errores y explica cada una.

- Inspeccionar elemento: permite ver y editar HTML y CSS en tiempo real.  
- Consola: muestra errores de JavaScript.  
- Network (Red): verifica si los archivos cargan o si hay errores como 404.

---

## 12. ¿Qué significa un error 404 en la pestaña Network/Red?

Significa que el archivo no fue encontrado, generalmente por una ruta incorrecta o porque el archivo no existe en esa ubicación.

---

## 13. ¿Para qué sirve la consola del navegador durante la corrección de un proyecto web?

Sirve para ver errores de JavaScript, advertencias y mensajes del sistema que ayudan a depurar el código.

---

## 14. ¿Por qué no es recomendable corregir todos los errores al mismo tiempo sin probar cada cambio?

Porque si se corrige todo junto, no se sabe qué cambio causó el error o si algo nuevo se dañó. Es mejor hacerlo paso a paso.

---

## 15. ¿Qué información debe contener una buena bitácora de errores?

Debe incluir el error encontrado, el archivo afectado, la causa del error, la solución aplicada y la fecha de corrección.

---

## 16. Escribe cinco buenas prácticas para evitar errores en proyectos HTML y CSS.

1. Usar nombres claros en archivos y clases  
2. Revisar bien las rutas  
3. Mantener el código ordenado  
4. Probar cada cambio  
5. Usar la consola del navegador  

---

## 17. Reflexión final

El error más difícil de encontrar fue cuando los estilos no se aplicaban por clases mal escritas. Aprendí que HTML, CSS y JavaScript están completamente conectados y que un pequeño error puede afectar toda la página. También entendí la importancia de revisar paso a paso y no avanzar sin probar cada cambio. En futuros proyectos voy a ser más organizado y cuidadoso con cada detalle.