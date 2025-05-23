import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";

const Cookie: FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  useEffect(() => {
    // read name cookie
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("name="));
    if (cookie) {
      const value = cookie.split("=")[1];
      setName(decodeURIComponent(value));
    }
  }, []);
  return (
    <>
      <input
        type="text"
        placeholder={"Mete tu nombre"}
        onInput={(e) => setName(e.currentTarget.value)}
      />
      <button
        onClick={() => {
          const date = new Date();
          date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
          document.cookie =
            `name=${encodeURIComponent(name)}; expires=${date.toUTCString()}; path=/`;
        }}
      >
        Crear cookie
      </button>
      <button type="button" onClick={()=>
        {
          const date = new Date();
          date.setTime(date.getTime() - (1 * 24 * 60 * 60 * 1000));
          document.cookie =
            `name=; expires=${date.toUTCString()}; path=/`;
        }
      }>Borrar cookie</button>
    </>
  );
};

export default Cookie;