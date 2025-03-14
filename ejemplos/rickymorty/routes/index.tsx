import Axios from "axios";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharactersContainer from "../components/CharactersContainer.tsx";

type Character = {
  id: string;
  name: string;
  image: string;
};

type Data = {
  characters: Array<Character>;
};

type CharacterAPI = {
  results: Array<{
    id: string;
    name: string;
    image: string;
  }>;
};

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
    const webURL = new URL(req.url);
    const name = webURL.searchParams.get("name");
    let url = "https://rickandmortyapi.com/api/character";
    if(name)
      url = url + "/?name=" + name;
    try {
      const response = await Axios.get<CharacterAPI>(url);
      return ctx.render({ characters: response.data.results });
    } catch (e) {
      return new Response("Error de API");
    }
  },
};

export default (props: PageProps<Data>) => {
    const characters = props.data.characters;
    return (<CharactersContainer characters={characters}/>);
}


