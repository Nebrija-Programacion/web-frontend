import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import Episode from "../../components/Episode.tsx";

type EpisodeAPI = {
  name: string;
  id: string;
  episode: string;
  characters: string[];
  air_date: string;
};

type CharacterAPI = {
  id: string;
  name: string;
};

type Character = {
  id: string;
  name: string;
};

type Episode = {
  episode: string;
  id: string;
  name: string;
  air_date: string;
  characters: Array<{
    name: string;
    id: string;
  }>;
};

type Data = {
  epidose: Episode;
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    try {
      const { id } = ctx.params;
      const url = `https://rickandmortyapi.com/api/episode/${id}`;
      const response = await Axios.get<EpisodeAPI>(url);

      const epi = response.data;
      const characters: Character[] = await Promise.all(epi.characters.map(
        async (ch) => {
          const response = await Axios.get<CharacterAPI>(ch);
          return response.data;
        },
      ));

      return ctx.render({ epidose: { ...epi, characters } });
    } catch (e) {
      return new Response("Error");
    }
  },
};

const Page = (props:PageProps<Data>) => <Episode episode={props.data.epidose}/>

export default Page;