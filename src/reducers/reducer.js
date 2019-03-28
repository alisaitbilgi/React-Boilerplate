const defaultStore = {
  todoItems: ["Do workshop", "Make presentation", "Say hello"],
  todoText: ""
};

function reducer(store = defaultStore, action) {

  switch (action.type) {
    case "SET_TEXT":
      return Object.assign({}, store, { todoText: action.data });

    default:
      return store;
  }

}

export default reducer;
