import { BehaviorSubject } from "rxjs";

const storage = localStorage.getItem("isAuth") || false;

export const store = Object.freeze({
  isAuthenticated: new BehaviorSubject(storage),
  signIn: () => {
    localStorage.setItem("isAuth", true), store.isAuthenticated.next(true);
  },
  signOut: () => {
    localStorage.removeItem("isAuth");
    store.isAuthenticated.next(false);
  },
});
