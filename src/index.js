import configureStore from "./configureStore";
import { addTodos } from "./reducer";

const store = configureStore();

store.eventEmitter.once(addTodos, (action, newState, prevState) => {
  const { type, payload } = action;
  console.log("type:", type);
  console.log("payload:", payload);
  console.log("newState:", newState);
  console.log("prevState:", prevState);
});

store.subscribe(() => {
  console.log("changed!");
});

store.dispatch(
  addTodos({
    name: "code geass",
    description: "code geass r2, lellouch vi britania!"
  })
);

store.dispatch(
  addTodos({
    name: "Monster!",
    description: "Dr temma, Johan liberto!"
  })
);
