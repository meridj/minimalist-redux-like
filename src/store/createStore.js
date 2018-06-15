const createStore = reducer => {
  let state = reducer();
  const arrayOfFnToExecuteOnDispatch = [];

  const getState = () => {
    const newState = { ...state };

    return newState;
  };

  const dispatch = action => {
    state = reducer(state, action);
    arrayOfFnToExecuteOnDispatch.forEach(fn => fn());
  };

  const subscribe = fn => {
    arrayOfFnToExecuteOnDispatch.push(fn);
  };

  return {
    getState,
    dispatch,
    subscribe
  };
};

export default createStore;
