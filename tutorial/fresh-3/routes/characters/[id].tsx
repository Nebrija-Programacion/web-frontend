import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Character } from "../../types.ts";

export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext<unknown, Character>) {
    try {
      const { id } = ctx.params;
      const character = await Axios.get<Character>(
        `https://rickandmortyapi.com/api/character/${id}`,
      );
      return ctx.render({
        id,
        name: character.data.name,
        image: character.data.image,
      });
    } catch (e) {
      console.error(e);
      throw new Error("Ha habido un error");
    }
  },
};

export default function Page(props: PageProps<Character>) {
  try {
    const character = props.data;
    return (
      <div>
        <h1>{character.name}</h1>
        <img src={character.image} />
      </div>
    );
  } catch (e) {
    return <div>Ha habido un error</div>;
  }
}
