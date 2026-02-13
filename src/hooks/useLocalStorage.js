import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setvalue] = useState(() => {
    try {
      const localState = localStorage.getItem(key);
      return localState ? JSON.parse(localState) : initialValue;
    } catch (error) {
      console.error("localStorage read error:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("localStorage write error:", error);
    }
  }, [key, value]);
  return [value, setvalue];
};

export { useLocalStorage };
