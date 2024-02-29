import { FreshContext, Handlers } from "$fresh/server.ts";
import AddForm from "../components/AddForm.tsx";
import ContactModel from "../db/Contact.ts";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try {
      const form = await req.formData();
      const data = {
        name: form.get("name"),
        email: form.get("email"),
      };

      await ContactModel.create(data);

      return new Response("", {
        status: 303,
        headers: {
          "Location": "/",
        },
      });
    } catch (error) {
      return new Response(error.message, {
        status: 500,
      });
    }
  },
};

const Page = () => {
  return (
    <div>
      <AddForm />
    </div>
  );
};

export default Page;
