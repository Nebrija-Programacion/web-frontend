import axios from "npm:axios";
import Character from "../components/Character.tsx";
type Character = {
  id: string;
  name: string;
  image: string;
  status: string;
};

type CharacterResponse = {
  results: Character[];
};

export default async function Home() {
  try {
    const response = await axios.get<CharacterResponse>(
      "https://rickandmortyapi.com/api/character",
    );
    const characters = response.data.results;
    return (
      <div class="flex-column">
        <h1 class="mainTitle">Rick and Morty Characters</h1>
        <div class="flex-row flex-around">
          {characters.map((char) => (
            <Character
              key={char.id}
              name={char.name}
              image={char.image}
              status={char.status}
            />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return <div>{error.message}</div>;
  }
}
