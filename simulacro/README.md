# Simulacro de Examen

Se pide realizar una web que implemente la misma funcionalidad y estilo que la web [https://videoapp.deno.dev/](https://videoapp.deno.dev/) . Además se debe realizar del mismo modo rende-side y client-side

Para la obtención de los vídeos, el marcar/desmarcar vídeos como favoritos, y para el login y registro de usuarios se usa la siguiente API:
- https://videoapp-api.deno.dev

Para la obtención de los vídeos existen 2 endpoints:

 - **GET: /videos/:userid**   
 - **GET: /videos/:userid/:videoid**

####  /videos/:userid  

Devuelve un array de vídeos (los datos devueltos los puede consultar el alumno)

 - userid es el id del usuario devuelto por la API cuando se hace login o register.

Ejemplo: https://videoapp-api.deno.dev/videos/664371ea54be82d8fdc2a6a9

Status: 

 - **200** si todo va OK
 - **500** error inesperado
 - **404** usuario con userid no econtrado
 - **Otros no controlados** 


 ####  /video/:userid/:videoid  

Devuelve un vídeo (los datos devueltos los puede consultar el alumno)

 - userid es el id del usuario devuelto por la API cuando se hace login o register.
 - videoid ese el id del vídeo devuelto por la API en la lista de videos del endpoint anterior.

Ejemplo: https://videoapp-api.deno.dev/video/664371ea54be82d8fdc2a6a9/66422f4b5a922dd78912958d

Status: 

 - **200** si todo va OK
 - **500** error inesperado
 - **404** usuario con userid no econtrado
 - **Otros no controlados**
 
 Para la gestión de usuarios existen dos endpoint: 
 - **POST /login**
 - **POST /register**

 #### /checkuser
 Se le debe pasar a través del *body* el objeto
 ```json
 { 
    email,
    password,
 }
 ```
 Respuesta:
 - **Status 200**, usuario OK, devolverá el objeto  
 ```json
 { 
    email,
    name,
    id
 }
 ```   
 - **Status 404 o 400.** Usuario no encontrado o datos incorrectos.
 -  - **Otros no controlados**
 
 #### /register
 Se le debe pasar a través del *body* el objeto
 ```json
 { 
    email,
    password,
    name
 }
 ```
 Respuesta:
 - **Status 200,** usuario registrado correctamente, devolverá el objeto  
 ```json
 { 
    email,
    name,
    id
 }
 ```   
 - **Status 400.** Hay un usuario con el mismo correo.
 - **Otros no controlados**
 
 Para marcar/dermarcar un video como favorito se usa el siguiente endpoint:

  - **POST: /favorite/:userid/:videoid**

  por ejemplo: https://videoapp-api.deno.dev/favorite/664371ea54be82d8fdc2a6a9/66422f4b5a922dd78912958d

  Status: **200** si todo va OK. Si era favorita pasa a no serlo y viceversa.


### NOTAS
Para realizar este simulacro de examen solo se pueden usar las siguientes webs:

 - https://fresh.deno.dev/
 - https://deno.com/
 - https://developer.mozilla.org/
 - https://www.npmjs.com/
 - https://www.npmjs.com/package/jsonwebtoken
 - https://www.npmjs.com/package/axios
 - https://preactjs.com/

Se puede tambien usar Postman (o programa equivalente) y un navegador para consultar la API

 - Para aquellos alumnos que no hagan el registro **ya existe una cuenta creada con su correo nebrija**, siendo **la contraseña su DNI**
 - Para aquellos alumnos que no hagan el login pueden usar como *userid* para las llamadas a la API el valor *000000000000000000000000*

**PUNTUACIÓN**

 - Registro: **2 puntos** (con login automático tras registrarse).
 - Login: **3 puntos** (y gestión de la sesión).
 - Listado de vídeos: **2 puntos**.
 - Página de video: **2 puntos**.
 - Marcar vídeos como favoritos: **2 puntos**.
 - Buenas prácticas de código: **3 puntos**.
