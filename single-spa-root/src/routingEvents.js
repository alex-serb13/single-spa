import { navigateToUrl } from "single-spa";
import { store } from "@react-spa/store";

const getAuthStatus = () => {
  let isAuthenticated;

  store.isAuthenticated.subscribe((value) => {
    isAuthenticated = value;
  });

  return isAuthenticated;
};

window.addEventListener(
  "single-spa:before-routing-event",
  ({ detail: { newUrl, cancelNavigation } }) => {
    const isAuthenticated = getAuthStatus();
    if (!isAuthenticated && newUrl.includes("products")) {
      cancelNavigation();
      navigateToUrl("/auth");
    }

    if (isAuthenticated && newUrl.includes("auth")) {
      cancelNavigation();
      navigateToUrl("/products");
    }
  }
);
