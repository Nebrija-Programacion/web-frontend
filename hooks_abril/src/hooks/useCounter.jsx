import React, { useState, useEffect } from "react";

const useCounter = (timeout, overflow) => {
  const [contador, setContador] = useState(0);
  if (contador > overflow) setContador(0);

  useEffect(() => {
    setTimeout(() => setContador(contador + 1), timeout);
    return () => {};
  }, [contador]);

  return contador;
};

export { useCounter as default };
