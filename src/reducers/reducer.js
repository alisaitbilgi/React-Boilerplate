function reducer(
  store = {
    currentText: "",
    todoItems: []
  },
  action
) {
  switch (action.type) {

    case "SET_TEXT":
    store.currentText = action.data;
    return store;

    case "ADD_TODO":
    store.todoItems.push(action.data);
    return store;

    default:
      return store;
  }
}

export default reducer;
