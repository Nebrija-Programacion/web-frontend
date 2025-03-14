import { FunctionalComponent } from "preact/src/index.d.ts";
import CharacterCard from "./CharacterCard.tsx";

type Character = {
  name: string;
  img: string;
  id: string;
};

type Props = {
  characters: Character[];
};

const CharactersContainer: FunctionalComponent<Props> = (props) => {
  const characters = props.characters;
  return (
    <div>
      {characters.map((ch) => <CharacterCard key={ch.id} character={ch} />)}
    </div>
  );
};
