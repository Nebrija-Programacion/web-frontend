import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import ContactList from "../components/ContactList.tsx";
import { Contact } from "../types.ts";
import ContactModel from "../db/Contact.ts";

type Data = {
  contacts: Array<Contact>;
};

export const handler: Handlers<Data> = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const contacts = await ContactModel.find();
    return ctx.render({ contacts });
  },
};

export default function Home(props: PageProps<Data>) {
  return (
    <ContactList
      contacts={props.data.contacts}
    />
  );
}
