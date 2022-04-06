import { createStore } from "redux";
import { reducer } from "./reducer";

let initialStore = { cart: [], count: 0, name: "User" };
if (localStorage.getItem("cart")) {
  initialStore.cart = JSON.parse(localStorage.getItem("cart"));
  initialStore.count = initialStore.cart.length;
}
if (localStorage.getItem("name")) {
  initialStore.name = localStorage.getItem("name");
}

export const store = createStore(reducer, initialStore);