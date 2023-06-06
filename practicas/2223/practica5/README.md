## Práctica 5

La práctica se debe entregar a través del campus virtual:
  * Añadiendo en la descripción un enlace a la releases de un repositorio de github (**el repositorio debe ser privado y se debe invitar al usuario avalero como colaborador**)
  * Subir el archivo .zip generado por la release de github.
  * El repositorio debe ser un fork de este repositorio.

Se pide realizar un frontend en Next.js que consuma el API incluida en el proyecto.

El sistema se levantará usando el archivo docker-compose.yaml incluído.

La aplicacíon debe gestionar un sistema de citas médicas. 

Para ello debe ofrecer las siguientes funcionalidades. El alumno debe decidir cómo distribuir las funcionalidades en diferentes páginas y justificar si cada página será CSR, SSR o static. La justificación se hará con un comentario en el código al inicio de la página. Si no hay justificación o la justificación es incorrecta se puntuará sobre el 70%. 

#### `addSlot`
Permite al médico añadir un horario disponible para una cita. 

#### `removeSlot`
Permite al médico eliminar un horario disponible para una cita. 
  
#### `availableSlots`
Permite a un paciente consultar las citas disponibles en un determinado día o en un determinado mes. Devolverá un array de citas. Si no hay citas disponibles lo indicará

#### `bookSlot`
Permite al paciente reservar una cita concreta.

### Puntuación

Cada apartado vale 2.5 puntos y se puntuará según el siguiente criterio
 - 0 puntos: No funciona como se ha pedido.
 - 1.5 punto: Funciona como se ha pedido pero hay errores de tipado (esto incluye que haya tipos `any` implícitos o explícitos) o se utilizan modos de código no adecuados, por ejemplo un `forEach` o un `for` si se puede resolver con un `map`.
 - 2.5 puntos. Funciona como se ha pedido y no hay errores.

### Nota.

La información sobre el API so podrá obtener a partir del playground de graphql
