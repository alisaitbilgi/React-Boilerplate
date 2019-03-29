const defaultStore = {
  todoItems: ["Do workshop", "Make presentation", "Say hello"],
  todoText: "HELLO TEB"
};

function reducer(store = defaultStore, action) {

  switch (action.type) {
    default:
      return store;
  }

}

export default reducer;
