export type Word = {
  definitions: Array<{
    definition: string;
    example?: string;
  }>;
  word: string;
};
