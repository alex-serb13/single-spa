import { useState, useEffect } from "react";
import { store } from "@react-spa/store";

export const useStore = () => {
  const { isAuthenticated } = store;
  const [isAuth, setIsAuth] = useState(isAuthenticated.value);

  useEffect(() => {
    isAuthenticated.subscribe((value) => {
      setIsAuth(value);
    });
  }, []);

  return { ...store, isAuthenticated: isAuth };
};
