import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  initialValue = parseInt(localStorage.getItem(key)) || initialValue;
  var [value, setValue] = useState(initialValue);
  
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);
  
  return [value, setValue];
};