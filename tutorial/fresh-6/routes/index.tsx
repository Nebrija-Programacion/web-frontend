import axios from "npm:axios";

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
        {characters.map((char) => (
          <div>
            <img src={char.image} alt={char.name} />
            <p>
              <strong>Status:</strong>
              {char.status}
            </p>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    return <div>{error.message}</div>;
  }
}
