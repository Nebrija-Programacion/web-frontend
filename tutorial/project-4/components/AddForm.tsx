import { FunctionComponent } from "preact";

const AddForm: FunctionComponent = () => {
  return (
    <form class="AddForm" action="/add" method="post">
      <h1>Add new contact</h1>
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddForm;
