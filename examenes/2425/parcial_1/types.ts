export type WordType = {
  type: string;
  synonyms: string[];
  definitions: Array<{ definition: string; example?: string }>;
};

export type WordData = {
  word: string;
  wordtypes: WordType[];
};


export type APIWordMeaning = {
    partOfSpeech: string,
    definitions: APIDefiniton[];
    synonyms: string[];
}

export type APIDefiniton = {
    definition: string;
    example?: string; 
}

export type APIWord = Array<{
    meanings: APIWordMeaning[];
}>