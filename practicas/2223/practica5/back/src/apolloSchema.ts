export const typeDefs = `
type Slot{
  day: Int!
  month: Int!
  year: Int!
  hour: Int!
  available: Boolean!
  dni: String
}
type Query{
    availableSlots(year: Int!, month: Int!, day: Int): [Slot!]!
}
type Mutation{
  removeSlot(year: Int!, month: Int!, day: Int!, hour: Int!): Slot!
  addSlot(year: Int!, month: Int!, day: Int!, hour: Int!): Slot!
  bookSlot(year: Int!, month: Int!, day: Int!, hour: Int!, dni: String!): Slot!
}`;
