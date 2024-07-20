import { FunctionComponent } from "preact";
import { Contact } from "../types.ts";

type Props = {
  contact: Contact;
  dni: string;
};

const ContactItem: FunctionComponent<Props> = ({ contact, dni }) => {
  const handleDelete = async (contactId: string, dni: string) => {
    const response = await fetch(
      `https://apicontacts.deno.dev/contact/${dni}/${contactId}`,
      {
        method: "DELETE",
      },
    );
    if (response.ok) {
      window.location.reload();
    }
  };
  return (
    <li key={contact._id}>
      <div>{contact.name}</div>
      <div>{contact.email}</div>
      <button onClick={() => handleDelete(contact._id, dni)}>Delete</button>
    </li>
  );
};

export default ContactItem;
