# Examen Convocatoria Ordinaria

## Enunciado

Se pide realizar una web que implemente la misma funcionalidad y estilo que la web:
🔗 [https://videoapp.deno.dev/](https://videoapp.deno.dev/)

Además, se debe implementar tanto en el lado del servidor (**server-side**) como del cliente (**client-side**).

## API a Utilizar

📡 API base: `https://videoapp-api.deno.dev`

### Endpoints para vídeos

#### `GET /videos/:userid`

* Devuelve un array de vídeos.
* `userid` es el ID del usuario, proporcionado por la API tras hacer login o registro.
* Ejemplo:
  `https://videoapp-api.deno.dev/videos/664371ea54be82d8fdc2a6a9`

**Códigos de estado:**

* `200 OK`: todo correcto
* `404`: usuario no encontrado
* `500`: error inesperado
* Otros: no controlados

---

#### `GET /video/:userid/:videoid`

* Devuelve un único vídeo.
* `userid`: ID del usuario (como arriba).
* `videoid`: ID del vídeo, obtenido del listado anterior.
* Ejemplo:
  `https://videoapp-api.deno.dev/video/664371ea54be82d8fdc2a6a9/66422f4b5a922dd78912958d`

**Códigos de estado:**

* `200 OK`: todo correcto
* `404`: usuario no encontrado
* `500`: error inesperado
* Otros: no controlados

---

### Endpoints para gestión de usuarios

#### `POST /checkuser`

* Enviar en el body:

```json
{
  "email": "usuario@ejemplo.com",
  "password": "123456"
}
```

**Respuestas:**

* `200 OK`: Usuario válido. Respuesta:

```json
{
  "email": "usuario@ejemplo.com",
  "name": "Nombre Usuario",
  "id": "userid"
}
```

* `400 / 404`: Usuario no encontrado o datos incorrectos.

---

#### `POST /register`

* Enviar en el body:

```json
{
  "email": "usuario@ejemplo.com",
  "password": "123456",
  "name": "Nombre Usuario"
}
```

**Respuestas:**

* `200 OK`: Usuario registrado. Respuesta:

```json
{
  "email": "usuario@ejemplo.com",
  "name": "Nombre Usuario",
  "id": "userid"
}
```

* `400`: Ya existe un usuario con ese correo.

---

### Endpoint para favoritos

#### `POST /fav/:userid/:videoid`

* Alterna el estado de favorito del vídeo.
* `200 OK`: cambio de estado correcto.

---

## Notas Importantes

* 🎥 Se debe grabar en todo momento la **pantalla completa** usando la app del **Campus Virtual**.
* 🧾 Se permite una *chuleta*:

  * 1 cara A4 impresa con ordenador
  * o 2 caras A4 escritas a mano
* ✅ Se puede llevar un proyecto inicial ya desplegado en **Deno Deploy** que solo incluya el código generado con **Deno Fresh**.
* ❌ No se puede usar **ningún código** almacenado en el ordenador.

---

## Entregables

* Enlace a la **release de GitHub**
* Archivo comprimido generado en dicha release
* Enlace funcional al despliegue en **Deno Deploy**

---

## Recursos Permitidos

* [https://fresh.deno.dev/](https://fresh.deno.dev/)
* [https://deno.com/](https://deno.com/)
* [https://developer.mozilla.org/](https://developer.mozilla.org/)
* [https://www.npmjs.com/](https://www.npmjs.com/)
* [https://www.npmjs.com/package/jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios)
* [https://preactjs.com/](https://preactjs.com/)

Se puede utilizar **Postman** (o programa equivalente) y el navegador para consultar la API.

---

## Cuentas predefinidas

* Si no se realiza registro, ya existe una cuenta con el correo de **Nebrija** del alumno y como contraseña su **DNI**.
* Si no se realiza login, se puede usar el siguiente `userid` para las llamadas a la API:
  `000000000000000000000000`

---

## Criterios de Evaluación (10 puntos)

| Requisito                       | Puntos |
| ------------------------------- | ------ |
| Registro (con login automático) | 2      |
| Login y gestión de sesión       | 3      |
| Listado de vídeos               | 2      |
| Página de detalle del vídeo     | 2      |
| Marcar/desmarcar como favorito  | 2      |
| Buenas prácticas de código      | 3      |

> ⚠️ La suma de los apartados puede superar 10 puntos, pero la nota máxima será **10**.

