import { FunctionComponent } from "preact";
import { Book } from "../types.ts";
type LibrosProps = {
  docs: Book[];
};

const Libros: FunctionComponent<LibrosProps> = ({ docs }) => {
  return (
    <ul>
      {docs.map((doc) => <li key={doc._id}>{doc.name}</li>)}
    </ul>
  );
};

export default Libros;
