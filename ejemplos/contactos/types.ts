import { OptionalId } from "mongodb";

export type Contact = {
  id: string;
  name: string;
  phone: string;
  email: string;
}

export type ContactDB = OptionalId<Omit<Contact,"id">>;