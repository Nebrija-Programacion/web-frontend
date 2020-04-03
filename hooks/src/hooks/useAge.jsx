import React, { useEffect, useState } from "react";

const useAge = () => {
  const [age, setAge] = useState(40);

  useEffect(() => {
    document.title = `${age}`;

    setTimeout(() => {
      setAge(age + 1);
    }, 1000);

    return () => {
      document.title = "bye bye";
    };
  });

  return age;
};

export { useAge as default };
