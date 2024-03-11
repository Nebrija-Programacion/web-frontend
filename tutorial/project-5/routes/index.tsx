import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Form from "../islands/Form.tsx";
import ContactModel from "../db/Contact.ts";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try {
      const params = await req.formData();
      const { name, email, age } = Object.fromEntries(params);
      await ContactModel.create({ name, email, age });
      return ctx.render({ added: true });
    } catch (e) {
      console.error(e);
      return new Response("Error", { status: 500 });
    }
  },
};

const Page = (props: PageProps<{ added?: boolean }>) => {
  return (
    <div class="">
      {props.data?.added && <div class="notificationOK">Contact added</div>}
      <Form />
    </div>
  );
};

export default Page;
