### Examen Extraordinaria - Programación de Interfaces Web
### Curso 2023/24

Se desea hacer una web que tenga la misma funcionalidad que la siguiente: https://nebricontacts.deno.dev/

 - El usuario introducirá su DNI
	 - Se verifica que el formato de DNI introducido es correcto, en caso contrario muestra un error
 - Una vez introducido el DNI se va a la ruta `/contactos` donde se muestran los contactos del DNI introducido
 - Si el usuario vuelve a la ruta raíz, puede introducir otro DNI (o el mismo) y se repetirá el proceso.
 - En el listado de contactos se pueden añadir nuevos contactos y borrar contactos.
 - Al añadir un contacto, el campo para el correo, verifica que el correo tiene un formato adecuado y en caso contrario muestra un error.

**El API que se utiliza** para realizar todas las operaciones es https://apicontacts.deno.dev , con los siguientes endpoints:

 - `GET` `/contacts/:dni` . Devuelve un array con los contactos de dicho DNI (o array vacío si no tiene).
 - `DELETE` `/contact/:dni/:id` . Elimina el contacto con el id dado perteneciente a un DNI 
 - `POST` `/contact` . Añade el contacto según el cuerpo (body) de la petición *(el DNI es el DNI del usuario, no del contacto)*, por ejemplo:
 
 ```javascript
 fetch(https://apicontacts.deno.dev/contact`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, dni }),
      },
    );
```

#### Modo de evaluación
  - **0%**. La funcionalidad implementada no es como la de la web de ejemplo o hay errores graves en el código (aunque funcione bien).
  - **40%** . La funcionalidad implementada se asemeja fundamentalmente a la de la web que se muestra, pero con alguna carencia o hay errores de código.
  - **70%**. La funcionalidad implementada es igual a la de la web, pero no hace las cosas del mismo modo, por ejemplo, hace server side algo que en el ejemplo es client side, usa rutas distintas, etc. El código es adecuado.
  - **100%**. La funcionalidad implementada es igual a la de la web con las mismas técnicas (SSR, CSR, Cookies, etc.). El código es adecuado.

#### Puntuación

 * Listar contactos: **2.5 puntos.**
 * Borrar contacto: **2.5 puntos.**
 * Añadir contacto: **2.5 puntos.**
 * DNI: **2.5 puntos.**

**Nota**
En caso de que un alumno no sepa implementar la funcionalidad del DNI puede trabajar poniendo su DNI directamente en el código.

Se pueden usar las siguientes webs:

 - https://fresh.deno.dev/
 - https://developer.mozilla.org/
 - https://deno.com/
 - https://preactjs.com/

#### Entrega.
Se deberá entregar:

 - Enlace a una release de github
 - Archivo .zip de la release de github
 - Enlace **largo** al proyecto desplegado en deno deploy

La carencia de cualquiera de estos tres elementos conlleva que no se corriga el examen.

