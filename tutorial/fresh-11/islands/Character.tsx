import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import axios from "npm:axios";
import { NamespaceExport } from "https://deno.land/x/ts_morph@20.0.0/ts_morph.js";

const Character: FunctionalComponent = () => {
  const [name, setName] = useState<string>("");
  const [characters, setCharacters] = useState<string[]>([]);

  const onSearch = async (searchText: string): Promise<void> => {
    const url = `https://rickandmortyapi.com/api/character/?name=${searchText}`;
    const response = await axios.get<{ results: { name: string }[] }>(url);
    const names = response.data.results.map((r) => r.name);
    setCharacters(names);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="character name"
          value={name}
          onInput={(e) => setName(e.currentTarget.value)}
        />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            onSearch(name);
          }}
        >
          Buscar
        </button>
      </form>
      {characters.length > 0 && characters.map((n) => <div key={n}>{n}</div>)}
    </div>
  );
};

export default Character;
