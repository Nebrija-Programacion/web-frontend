import { FunctionComponent } from "preact";
import { Contact } from "../types.ts";
import ContactItem from "../islands/ContactItem.tsx";
import AddContact from "./AddContact.tsx";

type Props = {
  dni: string;
  contacts: Contact[];
};

const Contacts: FunctionComponent<Props> = ({
  dni,
  contacts,
}) => {
  return (
    <div className="contacts-container">
      <h1>Contactos de {dni}</h1>
      <ul>
        {contacts.map((contact) => (
          <ContactItem key={contact._id} contact={contact} dni={dni} />
        ))}
      </ul>
      <AddContact />
    </div>
  );
};

export default Contacts;
