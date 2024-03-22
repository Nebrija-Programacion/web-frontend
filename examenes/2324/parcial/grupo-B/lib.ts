import { Word } from "./types.ts";

type Meaning = {
  definitions: Array<{
    definition: string;
    example?: string;
  }>;
};

type WordData = Array<{
  word: string;
  meanings: Meaning[];
}>;

export const getWordDefinition = async (word: string): Promise<Word> => {
  const URL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
  const response = await fetch(URL);
  if (!response.ok) {
    return { word, definitions: [] };
  }
  const data: WordData = await response.json();
  return {
    word: data[0].word,
    definitions: data.flatMap((d) =>
      d.meanings.flatMap((meaning) =>
        meaning.definitions.map((definition) => ({
          definition: definition.definition,
          example: definition.example,
        }))
      )
    ),
  };
};
