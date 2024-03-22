import { FunctionComponent } from "preact";
import { Contact } from "../types.ts";
import Agenda from "../components/Agenda.tsx";
import { useState } from "preact/hooks";

const AgendaManager: FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [contacts, setContacts] = useState<Contact[]>([]);

  const validateContact = (contact: Contact, contacts: Contact[]): boolean => {
    return contact.name.length > 0 && contact.email.length > 0 &&
      !contacts.find((c) => c.email === contact.email) &&
      contact.email.includes("@") && contact.email.includes(".");
  };

  const addContact = (contact: Contact, contacts: Contact[]) => {
    if (!validateContact(contact, contacts)) {
      setError(
        "Invalid contact. A field is empty, email is invalid, or the email is already in use.",
      );
      return;
    }
    setContacts([...contacts, contact]);
  };

  return (
    <>
      <Agenda contacts={contacts} />
      <div class="agendaForm">
        <h2>Add new contact</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onInput={(e) => {
            setError("");
            setName(e.currentTarget.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onInput={(e) => {
            setError("");
            setEmail(e.currentTarget.value);
          }}
        />
        <button
          onClick={() => addContact({ name, email }, contacts)}
        >
          Add contact
        </button>
        {error && <p class="error">{error}</p>}
      </div>
    </>
  );
};

export default AgendaManager;
