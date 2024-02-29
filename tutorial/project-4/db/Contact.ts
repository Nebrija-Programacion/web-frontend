import mongoose from "npm:mongoose";
import { Contact } from "../types.ts";

if (mongoose.connection.readyState === 0) {
  await mongoose.connect(Deno.env.get("MONGO_URL")!);
}

const schema = new mongoose.Schema<Contact>({
  name: String,
  email: String,
});

export default mongoose.model<Contact>("Contact", schema);
