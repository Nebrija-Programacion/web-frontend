import { FunctionalComponent } from "preact/src/index.d.ts";
import { Contact } from "../types.ts";

type Props = {
  contacts: Contact[];
};

const ListContacts: FunctionalComponent<Props> = (props) => {
  const contacts = props.contacts;
  return (
    <div>
      {contacts.map((c) => (
        <div>
          <a href={`/contact/${c.id}`}>{c.name}</a>
        </div>
      ))}
    </div>
  );
};

export default ListContacts;
