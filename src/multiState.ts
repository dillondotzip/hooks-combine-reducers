interface BaseAction<T = any> {
  type: T,
  [extraProps: string]: any
}


type Reducer<S, A> = (state: S, action: A) => S;

type Reducers<S = any, A = BaseAction> = { [Key in keyof S]: Reducer<S[Key], A> };

type RootReducer<R extends Reducers> = Reducer<{ [Key in keyof R]: ReturnType<R[Key]> }, Parameters<R[keyof R]>[1]>;

const combineReducers = <R extends Reducers>(reducers: R): RootReducer<R> => (state, action) => {
  let newState = { ...state };

  for (const key in reducers) {
    newState[key] = reducers[key](state[key], action);
  }

  return newState;
};

export default combineReducers