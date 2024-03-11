import mongoose from "npm:mongoose";
import { Contact } from "../types.ts";

if (mongoose.connection.readyState === 0) {
  const MONGO_URL = Deno.env.get("MONGO_URL");
  if (!MONGO_URL) {
    throw new Error("MONGO_URL is not defined in env vars.");
  }
  mongoose.connect(MONGO_URL);
}

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

type ContactModelType = mongoose.Document & Contact;

const ContactModel = mongoose.model<ContactModelType>("Contact", ContactSchema);

export default ContactModel;
