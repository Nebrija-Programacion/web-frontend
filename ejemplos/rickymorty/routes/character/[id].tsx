import Axios from "axios";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

type Character = {
    id: string;
    name: string;
    status: string;
    origin: string;
    image: string;
    episodes: Array<{ name: string, id: string}>;
}

type Data = {
    character: Character;
}

type CharacterAPI = {
    name: string;
    id: string;
    status: string;
    origin: {name: string};
    episode: string[];
    image: string;
}

type EpisodeAPI = {
    name: string;
    id: string;
}

export const handler: Handlers = {
    GET: async(_req: Request, ctx: FreshContext<unknown, Data>) => {
        const {id} = ctx.params;
        const url = `https://rickandmortyapi.com/api/character/${id}`;
        try{
            const response = await Axios.get<CharacterAPI>(url);
            const episodes = (await Promise.all(response.data.episode.map(
                async(ep) => await Axios.get<EpisodeAPI>(ep)
            ))).map(e => e.data);

            const character: Character = {
                ...response.data,
                origin: response.data.origin.name,
                episodes
            };

            return ctx.render({character});

        }catch(e){
            return new Response("Error de API");
        }
    }
};