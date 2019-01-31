import I from 'immutable'

export default function reducers(store = I.Map(), action) {
  switch (action.type) {
    default:
      return store;
  }
}
