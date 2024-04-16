import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";

type Character = {
  id: string;
  name: string;
  image: string;
};

const GetCharacter: FunctionComponent = () => {
  const [id, setID] = useState<string>("1");
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    fetchCharacter(id);
  }, [id]);

  // fetch character with id from Rick and Morty API
  const fetchCharacter = async (id: string) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    const data = await response.json();
    setCharacter(data);
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        onInput={(e) => setID(e.currentTarget.value)}
      />
      {character && (
        <div>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      )}
    </div>
  );
};

export default GetCharacter;
