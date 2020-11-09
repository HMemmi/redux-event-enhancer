import { configureStore } from "@reduxjs/toolkit";
import createEventEnhancer from "./eventEnhancer";
import todoReducer from "./reducer";

const configStore = () => {
  return configureStore({
    reducer: todoReducer,
    enhancers: [createEventEnhancer()],
    preloadedState: [
      { name: "watch anime", description: "watch wano arc !!!one piece!!!" }
    ]
  });
};

export default configStore;
