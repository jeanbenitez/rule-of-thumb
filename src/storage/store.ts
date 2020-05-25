import { createStore } from "@stencil/store";
import { RotDB } from "./data";

RotDB.init();
const store = createStore({
  persons: RotDB.getNotMainPersons(),
  categories: RotDB.getCategories(),
  mainPerson: RotDB.getMainPerson()
});

export default store;
