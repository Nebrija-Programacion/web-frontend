import { MongoClient, ObjectId } from "mongodb";
import { Context, Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";

type Contact = {
  name: string;
  email: string;
  dni: string;
};

const MONGO_URL = Deno.env.get("MONGO_URL") || "mongodb://localhost:27017";
// connect mongo db
const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("Connected to MongoDB");
const db = client.db("ContactList");
const ContactCollection = db.collection<Contact>("contacts");

const app = new Hono();
app.use("/*", cors());

app.get("/contacts/:dni", async (c: Context) => {
  const { dni } = c.req.param();
  console.log(c.req.param());
  console.log(dni);
  const contacts = await ContactCollection.find({ dni }).toArray();
  return c.json(contacts);
});

app.post("/contact", async (c: Context) => {
  const contact = await c.req.json<Contact>();
  await ContactCollection.insertOne(contact);
  return c.json(contact);
});

app.delete("/contact/:dni/:id", async (c: Context) => {
  const dni = c.req.param("dni");
  const id = c.req.param("id");
  await ContactCollection.deleteOne({ dni, _id: new ObjectId(id) });
  return c.json({ message: "Contact deleted" });
});

export default app;
