Se pide realizar una web que muestre los planetas de StarWars usando la API (https://swapi.dev/) con los siguientes requisitos:

  * Cada planeta se mostrará en la ruta /planet/[id].tsx y se rendirzara en el cliente (CSR, la llamada a la API se realizará en el navegador)
  * La lista de planetas se mostrará de modo paginado en la ruta /planets/[page].tsx y se renderizará en el servidor (SSR, no se realizará ninguna llamada a la API desde el navegador)
  * Habrá 2 botones para avanzar y retroceder de página, salvo en la primera página, que solo se podrá avanzar y en la última que solo se podrá retroceder.
  * Haciendo click en el nombre de un planeta ira a la página correspondiente del planeta.
