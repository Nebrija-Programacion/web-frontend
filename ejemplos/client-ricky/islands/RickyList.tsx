// Importing essential tools and libraries to build our webpage
import { FunctionalComponent } from "preact/src/index.d.ts"; // Helps us create reusable webpage components
import Axios from "axios"; // Helps us fetch (get) data from the internet
import { useEffect, useRef, useState } from "preact/hooks"; // Hooks help us keep track of information and changes on our webpage

// This tells TypeScript what a character looks like from the Rick and Morty API
// Each character has an id (number), name (string), status (string), and species (string)
type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
};

// This describes the structure of the response (data) we get from the Rick and Morty API
// It contains general info and an array (list) of characters
type CharacterResponse = {
  info: {
    count: number; // total number of characters
    pages: number; // total number of pages
    next: string | null; // link to next page
    prev: string | null; // link to previous page
  };
  results: Character[]; // actual list of characters
};

// This component displays our characters
const RickyList: FunctionalComponent = () => {
  // Store the list of characters we get from the API
  const [characters, setCharacters] = useState<Character[]>([]);

  // Track the current page number
  const [page, setPage] = useState(1);

  // Track total number of pages available from API
  const [totalPages, setTotalPages] = useState(0);

  // Track the name that the user types to search characters
  const [searchName, setSearchName] = useState("");

  // This helps us delay the search until the user stops typing
  const timeout = useRef<NodeJS.Timeout | null>(null);

  // This effect runs whenever the page number changes (like clicking next/previous)
  useEffect(() => {
    getCharacters(); // Fetch new characters whenever the page changes
  }, [page]);

  // This effect runs whenever the user types in the search box
  useEffect(() => {
    // Clear previous timeout if user is still typing
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    // Only search if there is something typed
    if (searchName !== "") {
      setPage(1); // Reset to first page for new search
      // Wait 1 second after user stops typing, then search
      timeout.current = setTimeout(getCharacters, 1000);
    }
    // Cleanup function that clears timeout if component unmounts
    return () => {
      clearTimeout(timeout.current);
    };
  }, [searchName]);

  // Go to next page, only if not at the last page
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  // Go to previous page, only if not at the first page
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // Fetches the characters from the Rick and Morty API
  const getCharacters = async () => {
    try {
      // Request characters based on current page and search query
      const data = await Axios.get<CharacterResponse>(
        `https://rickandmortyapi.com/api/character?page=${page}&name=${searchName}`,
      );
      // Save the results to display on our webpage
      setCharacters(data.data.results);
      setTotalPages(data.data.info.pages);
    } catch (e) {
      // If there's an error (like no characters found), clear the list and show an error in the console
      console.error("Error fetching characters:", e);
      setCharacters([]);
      setTotalPages(0);
    }
  };

  // This part renders our webpage with the characters
  return (
    <div>
      {/* Search Box: User can type names to filter characters */}
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onInput={(e) => setSearchName(e.currentTarget.value)} // update search term as user types
        />
      </div>
      {/* Buttons to change pages (Next and Previous) */}
      <div>
        <button type="button" onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <button
          type="button"
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
      {/* Title of our webpage */}
      <h1>Ricky List</h1>
      {/* List of characters displayed on the webpage */}
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            {/* each character has a unique key (id) */}
            <h2>{character.name}</h2> {/* character's name */}
            <p>Status: {character.status}</p>{" "}
            {/* character's status (alive, dead, unknown) */}
            <p>Species: {character.species}</p> {/* character's species */}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export this component so it can be used in other parts of our webpage
export default RickyList;
