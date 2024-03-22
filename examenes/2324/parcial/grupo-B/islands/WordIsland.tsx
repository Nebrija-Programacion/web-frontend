import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import { Word } from "../types.ts";
import { getWordDefinition } from "../lib.ts";
import WordViewer from "../components/WordViewer.tsx";

const WordIsland: FunctionComponent = () => {
  const [word, setWord] = useState<string>("");
  const [wordData, setWordData] = useState<Word | undefined>(undefined);
  const [error, setError] = useState<string>("");

  const fetchWordDefinition = async (word: string) => {
    if (!word || word.length === 0) {
      setError("Please enter a word");
      return;
    }

    const wordData = await getWordDefinition(word);
    setWordData(wordData);
  };

  return (
    <>
      <div class="container">
        <div class="wordForm">
          <input
            type="text"
            placeholder="Type a word"
            value={word}
            onInput={(e) => {
              setError("");
              setWord(e.currentTarget.value);
            }}
          />

          <button
            onClick={() => fetchWordDefinition(word)}
          >
            Search
          </button>
        </div>
        {error && <p class="error">{error}</p>}
      </div>
      {wordData && <WordViewer {...wordData} />}
    </>
  );
};

export default WordIsland;
