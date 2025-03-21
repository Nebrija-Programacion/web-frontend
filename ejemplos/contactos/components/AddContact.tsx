import { FunctionalComponent } from "preact/src/index.d.ts";

const AddContact: FunctionalComponent = () => {
  return (
    <div>
      <form method="GET" action="/add" class="AddForm">
        <input type="text" name="name" placeholder="Nombre" />

        <input type="text" name="phone" placeholder="Teléfono" />

        <input type="text" name="email" placeholder="Email" />

        <button type="submit">Añadir contacto</button>
      </form>
    </div>
  );
};

export default AddContact;
