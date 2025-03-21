import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { ObjectId } from "mongodb";
import ContactsCollection from "../../db/Contacts.ts";
import { Contact } from "../../types.ts";

type Data = {
  contact: Contact;
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const id = ctx.params.id;
    try {
      const contactDB = await ContactsCollection.findOne({
        _id: new ObjectId(id),
      });
      if (!contactDB) {
        return new Response("Contact not found", { status: 404 });
      }
      return ctx.render({
        contact: {
          id: contactDB._id.toString(),
          name: contactDB.name,
          phone: contactDB.phone,
          email: contactDB.email,
        },
      });
    } catch (_e) {
      return new Response("Database error", { status: 500 });
    }
  },
};

const Page = (props: PageProps<Data>) => {
  const contact = props.data.contact;
  return (
    <div>
      <h1>{contact.name}</h1>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
    </div>
  );
};
export default Page;
