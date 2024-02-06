import Axios from "axios";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { CharacterPage } from "../../types.ts";

type Data = CharacterPage & { page: string };

export const handler: Handlers<Data> = {
  async GET(_req: Request, ctx: FreshContext<unknown, Data>) {
    const { page } = ctx.params;
    // get rick and morty characters
    const response = await Axios.get<CharacterPage>(
      `https://rickandmortyapi.com/api/character?page=${page}`,
    );
    if (response.status !== 200) {
      console.error(
        "Error fetching characters",
        response.status,
        response.statusText,
      );
      throw new Error("Error fetching characters");
    }
    return ctx.render({ ...response.data, page });
  },
};

const Page = (props: PageProps<Data>) => {
  const { info, results, page } = props.data;
  return (
    <>
      <h1>Page {page}</h1>
      {parseInt(page) > 1 && (
        <a href={`/characters/${parseInt(page) - 1}`}>Previous</a>
      )}&nbsp; | &nbsp;
      {parseInt(page) < info.pages && (
        <a href={`/characters/${parseInt(page) + 1}`}>Next</a>
      )}
      <ul>
        {results.map((character) => (
          <li key={character.id}>
            <a href={`/character/${character.id}`}>{character.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Page;
