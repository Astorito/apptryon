# POST a `/api/images/generate` y CORS

## Qué está pasando

La web (trylook-ai.com) carga el widget desde:

- `https://try-on-cursor.vercel.app/api/widget`

Ese widget hace un **POST** a:

- `https://try-on-cursor.vercel.app/api/images/generate`

Esa petición es **cross-origin**: el origen es `https://www.trylook-ai.com` y el destino es `try-on-cursor.vercel.app`. El navegador solo acepta la respuesta si el servidor de la API envía cabeceras **CORS** que permitan ese origen.

Si el backend **no** devuelve CORS, verás en consola algo como:

- `Access to fetch at '...' from origin 'https://www.trylook-ai.com' has been blocked by CORS policy`
- O que la respuesta no incluye la cabecera `Access-Control-Allow-Origin`

## Qué hay que hacer (en el backend try-on-cursor.vercel.app)

En el proyecto que despliega **try-on-cursor.vercel.app** hay que:

1. **Responder a OPTIONS (preflight)**  
   Para peticiones POST con `Content-Type: application/json`, el navegador primero envía un `OPTIONS`. La API debe responder a `OPTIONS` con estado 200 y las cabeceras CORS.

2. **Incluir cabeceras CORS en todas las respuestas** de `/api/images/generate` (y si aplica, en `/api/widget`):

   - `Access-Control-Allow-Origin`: `https://www.trylook-ai.com` (o `https://trylook-ai.com` si usas ese dominio; o `*` solo si la API es pública y no usas cookies/credenciales).
   - `Access-Control-Allow-Methods`: `GET, POST, OPTIONS`
   - `Access-Control-Allow-Headers`: `Content-Type, Authorization` (y las que use tu cliente)
   - Si usas credenciales: `Access-Control-Allow-Credentials: true` (y entonces no uses `*` en `Allow-Origin`)

### Ejemplo con `vercel.json` (en el repo del backend)

Si el backend está en Vercel, puedes definir cabeceras para las rutas de la API:

```json
{
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "https://www.trylook-ai.com" },
        { "key": "Access-Control-Allow-Methods", "value": "GET, POST, OPTIONS" },
        { "key": "Access-Control-Allow-Headers", "value": "Content-Type, Authorization" }
      ]
    }
  ]
}
```

Si quieres permitir varios orígenes (por ejemplo con y sin `www`), en `vercel.json` no se puede poner una lista; tendrás que poner CORS en el código del endpoint (por ejemplo en un Route Handler de Next.js o en la función serverless) y devolver `Access-Control-Allow-Origin` según el `Origin` de la petición.

### Ejemplo en código (Next.js Route Handler o función serverless)

En la función que atiende `POST /api/images/generate` (y la que responda `OPTIONS`):

- En **OPTIONS**: devolver 200 con las cabeceras CORS y sin cuerpo.
- En **POST**: procesar la petición y en la respuesta incluir las mismas cabeceras CORS, con `Access-Control-Allow-Origin` igual al origen permitido (p. ej. `https://www.trylook-ai.com`).

## En este repo (frontend)

- En **desarrollo**: en `vite.config.ts` hay un proxy de `/api` a `https://try-on-cursor.vercel.app`, y en `Demo.tsx` el script del widget en dev se carga como `/api/widget`, así que el widget y las llamadas que haga a `/api/...` pasan por el proxy y no hay CORS en local.
- En **producción** (trylook-ai.com): el widget y el POST a `try-on-cursor.vercel.app` siguen siendo cross-origin, así que la solución definitiva es configurar CORS en el backend como arriba.

## Comprobar

1. En producción, abre la web en trylook-ai.com, usa el widget y revisa la pestaña **Network** (F12).
2. Localiza la petición **POST** a `.../api/images/generate`.
3. Revisa la respuesta: en **Headers** debe aparecer `Access-Control-Allow-Origin` con tu dominio (o `*`).
4. Si además hay petición **OPTIONS** a la misma URL, su respuesta también debe incluir esas cabeceras CORS.

Si el backend devuelve 500 (por ejemplo en `/api/widget`), eso es un error del servidor, no de CORS; hay que revisar logs y código del backend en try-on-cursor.vercel.app.
