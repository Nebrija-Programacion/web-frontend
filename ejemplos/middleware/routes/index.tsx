import { FreshContext, Handlers } from "$fresh/server.ts";
import LoginForm from "../components/LoginForm.tsx";


export const handler: Handlers = {
  GET: (req:Request, ctx:FreshContext) => {
    const url = new URL(req.url);
    const username = url.searchParams.get("username");
    const password = url.searchParams.get("password");

    console.log("username: ", username);
    console.log("password: ", password);
    if(!username || !password) return ctx.render();

    // verificar en DDBB el usuario y la contraseña
    console.log("password: ", password);
    if(password !== "1234") return ctx.render();

    const headers = new Headers();
    headers.append("Set-Cookie", `name=${username};path=/`);
    headers.append("location", "/characters");
    return new Response(null, {
      status: 302,
      headers
    });
  }
}

export default function Home() {
  return (
    <LoginForm/>
  );
}
