import I from 'immutable';

function reducer(store = I.Map(), action) {
  switch (action.type) {
    case "SET_TEXT":
      return store.set('todoText', action.data);

    case "SET_TODO_ITEM":
      const todoItems = store.get('todoItems', I.List());
      const newTodoItems = todoItems.push(action.data);

      return store.set('todoItems', newTodoItems);

    default:
      return store;
  }

}

export default reducer;
