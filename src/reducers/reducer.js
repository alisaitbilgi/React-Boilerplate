const defaultStore = {
  todoItems: ["Do workshop", "Make presentation", "Say hello"],
  todoText: ""
};

function reducer(store = defaultStore, action) {
  switch (action.type) {
    case "SET_TEXT":
      return Object.assign({}, store, { todoText: action.data });

    case "SET_TODO_ITEM":
      const newTodoItems = store.todoItems.set(action.data);

      return Object.assign({}, store, { todoItems: newTodoItems });

    default:
      return store;
  }

}

export default reducer;
