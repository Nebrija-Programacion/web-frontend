import ContactList from "../components/ContactList.tsx";

export default function Home() {
  return (
    <ContactList
      contacts={[
        { id: "1", name: "John Doe", email: "john@gmail.com" },
        { id: "2", name: "Jane Doe", email: "jane@gmail.com" },
      ]}
    />
  );
}
