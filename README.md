# IPInfo, Geolocation Web App

IPInfo es un pequeño proyecto de práctica, consume una API pública con un endpoint GET. Al ingresar una IP, v4 o v6, retorna información de la misma.

Desarrollada con:

- HTML5.
- CSS3 mediante [Pico.css](https://picocss.com/), un framework de CSS mínimo enfocado a el uso de HTML semántico, que además incluye un diseño responsive.
- Javascript Vanilla siguiendo ECMAScript6.
- Eslint como herramienta linter.
- Node.js para dependencias de desarrollo.

## Para probar este proyecto

> NOTA: Para ocultar las credenciales de la API usada, se optó por crear un archivo `env.js` que, como solución básica pero efectiva, contiene como constantes las credenciales del desarrollador. Este archivo es ignorado listándose en `.gitignore`.

1. Clonar el repositorio.
2. Visitar [RapidAPI: IP Geolocation - IPWHOIS.io](https://rapidapi.com/xakageminato/api/ip-geolocation-ipwhois-io), y obtener la URL, una api key y host.
3. En `app.js` descomentar el siguiente código y asignar a las variables sus credenciales.

    ```JavaScript
    /* const API_URL = 'your_api_url'
    const OPTIONS = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'your_api_key',
            'X-RapidAPI-Host': 'your_api_host'
        }
    } */
    ```

4. Levantar el `index.html` usando Visual Studio Code con la extensión LiveServer.

## Créditos

- La idea original viene desde un tutorial de YouTube del canal de [Midudev](https://youtu.be/6AMKwVcpYTk?feature=shared), la misma idea fue un poco mas trabajada para profundizar en el framework Pico.css, en las validaciones del formulario input usando expresiones regulares, y en la manipulación del DOM.
