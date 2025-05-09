import { FunctionComponent } from "preact";
import { page, search } from "../signals.ts";
import { useEffect, useState } from "preact/hooks";


const CompTwo: FunctionComponent = () => {

  const [names, setNames] = useState<string[]>([])

  const getNames = async () => {
    const json = await fetch(`https://rickandmortyapi.com/api/character?page=${page.value}&name=${search.value}`)
    const data = await json.json()
    setNames(data.results.map(e => e.name))
  }

  useEffect(() => {
    getNames()
  }, [search.value, page.value])


  return (
    <ul>
      {names.map(e => <li key={e}>{e}</li>)}
    </ul>
  );
};

export default CompTwo;
