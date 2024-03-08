import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";

export const Form: FunctionComponent = () => {
  const [error, setError] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | undefined>();
  const [email, setEmail] = useState<string>("");

  const submitHandler = (e:JSX.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();
    const errorMsg: string[] = [];
    if (!age || age < 18) {
      errorMsg.push("Age must be greater than 18");
    }
    if (name === "") {
      errorMsg.push("You must provide a name");
    }
    if (email === "") {
      errorMsg.push("You must provide a mail");
    }

    if (errorMsg.length > 0) setError(errorMsg.join(" | "));
    else {
      setError("");
      e.currentTarget.submit();
    }
  }
  

  return (
    <div class="form">
      <h1>Introduce tus datos</h1>
      <form
        action="/submitform.tsx"
        method="POST"
        onSubmit={submitHandler}
          
      >
        <div>
          <label for="name">Name</label>
        </div>
        <div>
          <input
            onFocus={(e) => setError("")}
            onInput={(e) => setName(e.currentTarget.value)}
            type="text"
            id="name"
            name="name"
          />
        </div>

        <div>
          <label for="email">Email</label>
        </div>
        <div>
          <input
            onFocus={(e) => setError("")}
            onInput={(e) => setEmail(e.currentTarget.value)}
            type="email"
            id="email"
            name="email"
          />
        </div>

        <div>
          <label for="age">Age</label>
        </div>
        <div>
          <input
            onFocus={(e) => setError("")}
            type="number"
            id="age"
            name="age"
            onInput={(e) => setAge(Number(e.currentTarget.value))}
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={error !== ""}
            class="btn"
          >
            Submit
          </button>
        </div>
        <div>
          <button
            type="reset"
            class="reset"
            onClick={(e) => {
              setName("");
              setEmail("");
              setAge(undefined);
              setError("");
            }}
          >
            Reset
          </button>
        </div>
        {error !== "" && <div class="span-2 error">{error}</div>}
      </form>
    </div>
  );
};

export default Form;
