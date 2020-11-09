import EventEmitter from "events";

class Events extends EventEmitter {
  dispatch(action, currentState, prevState) {
    this.emit(action.type, action, currentState, prevState);
  }
}

const events = new Events();

const createEventEnhancer = () => (createStore) => (
  reducer,
  initialState,
  middleware
) => {
  const eventReducer = (state, action) => {
    const newState = reducer(state, action);
    if (events.listeners(action.type).length > 0) {
      events.dispatch(action, newState, state);
    }
    return newState;
  };
  let store = createStore(eventReducer, initialState, middleware);
  store.eventEmitter = events;
  return store;
};

export default createEventEnhancer;
