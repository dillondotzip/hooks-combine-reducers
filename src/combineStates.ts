const combineStates = (states: Array<{ [key: string]: any }>) => {
  const newStates = states.reduce((acc: {}, state: {}) => {
    return { ...acc, ...state };
  }, {});

  return newStates;
};

export default combineStates;
