import { createStore } from "@stencil/store";
import { RotDB } from "./data";

RotDB.init();
const store = createStore({
  persons: RotDB.getPersons(),
  categories: RotDB.getCategories()
});

export default store;
