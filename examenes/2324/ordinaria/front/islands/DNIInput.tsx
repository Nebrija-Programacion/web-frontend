import { useState } from "preact/hooks";
import { setCookie } from "../utils.ts";
import { isWindows } from "$std/path/_os.ts";

const DniInput = () => {
  const [dni, setDni] = useState<string>("");
  const [error, setError] = useState<string>("");
  const handleInputChange = (event: Event) => {
    setError("");
    const target = event.target as HTMLInputElement;
    setDni(target.value);
  };

  const handleButtonClick = () => {
    // verify DNI format and set error
    if (dni.length !== 9) {
      setError("El DNI debe tener 9 caracteres");
      return;
    } else if (!dni.slice(0, 8).match(/^\d+$/)) {
      setError("Los primeros 8 caracteres deben ser números");
      return;
    } else if (!dni.slice(8).match(/[A-Z]/)) {
      setError("El último caracter debe ser una letra mayúscula");
      return;
    }

    setCookie("dni", dni, 7); // Store DNI in a cookie for 7 days
    window.location.href = "/contactos";
  };

  return (
    <div className="dni-input-container">
      <label htmlFor="dni">Introduce tu DNI:</label>
      <input
        placeholder="12345678A"
        type="text"
        id="dni"
        value={dni}
        onInput={handleInputChange}
      />
      <button onClick={handleButtonClick}>Ir a mi agenda</button>
      {error !== "" && <div class="error">{error}</div>}
    </div>
  );
};

export default DniInput;
