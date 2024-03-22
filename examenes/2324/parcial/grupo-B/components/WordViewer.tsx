import { FunctionComponent } from "preact";
import { Word } from "../types.ts";

const WordViewer: FunctionComponent<Word> = (wordData) => {
  return (
    <div class="wordDefinitions">
      {wordData && (
        <>
          <h3>{wordData.word}</h3>
          <ul>
            {wordData.definitions.map((d) => (
              <li>
                <p>
                  <span>
                    <strong>Definition:</strong>
                  </span>

                  <span>{d.definition}</span>
                </p>
                {d.example && (
                  <>
                    <p>
                      <span>
                        <strong>Example:</strong>
                      </span>
                      <span>{d.example}</span>
                    </p>
                  </>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default WordViewer;
