import { FunctionComponent } from "preact";

const AddContact: FunctionComponent = () => {
  return (
    <div className="add-contact-container">
      <h1>Añadir contacto</h1>
      <form method="post">
        <label htmlFor="name">Nombre:</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
        <button type="submit">Añadir</button>
      </form>
    </div>
  );
};

export default AddContact;
