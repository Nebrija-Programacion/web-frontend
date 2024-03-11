import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";

export const Form: FunctionComponent = () => {
  const [error, setError] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | undefined>();
  const [email, setEmail] = useState<string>("");

  const submitHandler = async (
    e: JSX.TargetedEvent<HTMLFormElement, Event>,
  ) => {
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
  };

  const emailExists = async (email: string): Promise<boolean> => {
    try {
      const res = await fetch("/api/checkmail", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      return data.exists;
    } catch (e) {
      console.error(e);
      return true;
    }
  };

  const underAge = (age: number) => age < 18;

  return (
    <div class="form">
      <h1>Introduce tus datos</h1>
      <form
        action="/"
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
            onBlur={async (e) => {
              if (await emailExists(e.currentTarget.value)) {
                setError(
                  error + " | Email already exists",
                );
              }
            }}
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
            onBlur={(e) => {
              if (underAge(Number(e.currentTarget.value))) {
                setError(
                  error + " | Age must be greater than 18",
                );
              }
            }}
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
