import { FreshContext, Handlers } from "$fresh/server.ts";
import { WordData, APIWord } from "../../types.ts";
import Axios from "axios";

type Data = {
    word: WordData;
}

export const handlers: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const { palabra } = ctx.params;
    if (!palabra) {
      const headers = new Headers();
      headers.set("location", `/`);
      return new Response(null, {
        status: 303, // See Other
        headers,
      });
    }

    const wordData = await Axios.get<APIWord>(`https://api.dictionaryapi.dev/api/v2/entries/en/${palabra}`);

    const word = fromAPIToWord(wordData.data);

    return ctx.render({word});
  },
};
