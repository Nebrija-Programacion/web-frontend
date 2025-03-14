import { FunctionalComponent } from "preact/src/index.d.ts";
import CharacterComponent from "./Character.tsx"
type Character = {
  id: string;
  name: string;
  status: string;
  origin: string;
  image: string;
  episodes: Array<{ name: string; id: string }>;
};

type Props = {
  character: Character;
};

const CharacterContainer: FunctionalComponent<Props> = (props) => {
  const ch = props.character;
  return (
    <div class="characterContainer">
      <h1>{ch.name}</h1>
    <CharacterComponent name={ch.name} origin={ch.origin} status={ch.status} image={ch.image}/>
      <ul>{ch.episodes.map((ep) => <li key={ep.id}>{ep.name}</li>)}</ul>
    </div>
  );
};

export default CharacterContainer;