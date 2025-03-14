import { FunctionComponent } from "preact/src/index.d.ts";

type Props = {
  episode: {
    episode: string;
    id: string;
    name: string;
    air_date: string;
    characters: Array<{
      name: string;
      id: string;
    }>;
  };
};

const Episode: FunctionComponent<Props> = (props) => {
  const { id, name, air_date, characters, episode } = props.episode;
  return (
  <>
    <h1>{name}</h1>
    <div>
      <div>Air date: {air_date}</div>
      <div>Episode: {episode}</div>
    </div>
    
    <div>
        <h2>Personajes</h2>
      <ul>
        {characters.map((ch) => (
          <li key={ch.id}>
            <a href={`/character/${ch.id}`}>{ch.name}</a>
          </li>
        ))}
      </ul>
    </div>
  </>)
};

export default Episode;