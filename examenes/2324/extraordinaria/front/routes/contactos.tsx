import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import Contacts from "../components/Contacts.tsx";
import { Contact } from "../types.ts";

type Data = {
  contacts: Contact[];
  dni: string;
};

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext<unknown, Data>) => {
    // read dni from cookie
    const { dni } = getCookies(req.headers);
    if (!dni) {
      return new Response("", {
        status: 307,
        headers: { location: "/" },
      });
    }

    // get email and name from form data

    const formData = await req.formData();
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    console.log("name: ", name);
    console.log("email: ", email);

    // create contact

    const response = await fetch(
      `https://apicontacts.deno.dev/contact`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, dni }),
      },
    );

    if (response.ok) {
      // get contacts for DNI
      const response = await fetch(
        `https://apicontacts.deno.dev/contacts/${dni}`,
      );
      const contacts = await response.json();
      return ctx.render({ dni, contacts });
    } else {
      return new Response("Error", { status: 500 });
    }
  },

  GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
    // read server side cookie
    const { dni } = getCookies(req.headers);
    if (!dni) {
      return new Response("", {
        status: 307,
        headers: { location: "/" },
      });
    }

    // get contacts for DNI
    const response = await fetch(
      `https://apicontacts.deno.dev/contacts/${dni}`,
    );
    const contacts = await response.json();
    return ctx.render({ dni, contacts });
  },
};

const Page = (props: PageProps<Data>) => {
  const { dni, contacts } = props.data;

  return (
    <div class="main-container">
      <Contacts dni={dni} contacts={contacts} />
    </div>
  );
};

export default Page;
