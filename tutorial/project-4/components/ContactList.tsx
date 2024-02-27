import { FunctionComponent } from "preact";
import { Contact } from "../types.ts";

const ContactList: FunctionComponent<{ contacts: Contact[] }> = (
  { contacts },
) => {
  return (
    <div class="contactlist">
      <h1>Contact list</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <span>{contact.name}:</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
