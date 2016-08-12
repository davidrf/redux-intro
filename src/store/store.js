let createStore = (reducers) => {
  let state;
  let callbacks = [];

  let store = {
    dispatch(action) {
      state = reducers(state, action);
      callbacks.forEach(callback => callback());
    },

    getState() {
      return state;
    },

    subscribe(callback) {
      callbacks.push(callback);
    }
  }

  store.dispatch({});
  return store;
};

export default createStore;
