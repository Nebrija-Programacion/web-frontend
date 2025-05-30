const ReadCookie = () => {
  const [name, setName] = useState<string | null>(null);
  const [age, setAge] = useState<string | null>(null);

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("name="));
    if (cookie) {
      const value = cookie.split("=")[1];
      setName(decodeURIComponent(value));
    }
    const cookie2 = document.cookie
      .split("; ")
      .find((r) => r.startsWith("age="));
    if (cookie2) {
      const value = cookie2.split("=")[1];
      setAge(decodeURIComponent(value));
    }
  }, []);

  return (<div>Hola {name} tienes {age} años</div>)

}