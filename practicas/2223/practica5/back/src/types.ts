export type Slot = {
  day: number,
  month: number,
  year: number,
  hour: number,
  available: boolean,
  dni?: string
};

export type Response = {
  message: string,
  slot?: Slot
}
