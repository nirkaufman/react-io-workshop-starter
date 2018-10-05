export function createStore(reducer, initState) {
  let state = initState;
  const listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  }

  function subscribe(listener) {
    const index = listeners.push(listener);

    return () => listeners.splice(index, 1);
  }

  dispatch({ type: '@@INIT' });
  return {getState, dispatch, subscribe}
}