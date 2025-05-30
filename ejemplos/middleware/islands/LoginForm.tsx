import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

const LoginForm: FunctionComponent = () => {
  const [dni, setDni] = useState<string>("");
  const handleOnClick = () => {
    // create dni cookie
    const cookie =
      `dni=${dni}; Path=/;`;
    document.cookie = cookie;

    // redirect to /characters
    globalThis.location.href = "/characters";
  };
  return (
    <div>
      <div>
        <label htmlFor="dni">DNI:</label>
        <input
          onInput={(e) => setDni(e.currentTarget.value)}
          type="text"
          id="DNI"
          name="dni"
          required
        />
      </div>
      <button type="button" onClick={() => handleOnClick()}>Login</button>
    </div>
  );
};

export default LoginForm;
