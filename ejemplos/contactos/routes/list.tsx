import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import ListContacts from "../components/ListContacts.tsx";
import ContactsCollection from "../db/Contacts.ts";
import { Contact } from "../types.ts";

type Data = {
  contacts: Contact[];
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const contactsDB = await ContactsCollection.find().toArray();
    const contacts: Contact[] = contactsDB.map((c) => ({
      id: c._id.toString(),
      name: c.name,
      phone: c.phone,
      email: c.email,
    }));
    return ctx.render({ contacts });
  },
};

const Page = (props: PageProps<Data>) => (
  <ListContacts contacts={props.data.contacts} />
);
export default Page;
