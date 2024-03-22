import { FunctionComponent } from "preact";
import { Contact } from "../types.ts";

type AgendaProps = {
  contacts: Contact[];
};

const Agenda: FunctionComponent<AgendaProps> = ({ contacts }) => {
  return (
    <>
      {contacts.length > 0 && (
        <div class="agendaList">
          <h2>Contactos</h2>
          <ul>
            {contacts.map((contact, index) => (
              <li key={index}>
                <span>{contact.name}</span>
                <span>{contact.email}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Agenda;
