import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { Book } from "../types.ts";
import Libros from "../components/Libros.tsx";

const LibrosCSR: FunctionComponent = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const fetchBooks = async () => {
    const response = await fetch("/api/libros");
    if (!response.ok) {
      throw new Error("Error fetching books");
    }
    const data = await response.json();
    setBooks(data);
  };
  return (
    <>
      <button onClick={fetchBooks}>Fetch Books</button>
      {books.length > 0 && <Libros docs={books} />}
    </>
  );
};

export default LibrosCSR;
