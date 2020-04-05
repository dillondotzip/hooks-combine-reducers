interface BaseAction<T = any> {
  type: T;
}

interface AnyAction extends BaseAction {
  [extraProps: string]: any;
}

type Reducer<S, A> = (state: S, action: A) => S;

type Reducers<S = any, A extends BaseAction = AnyAction> = Reducer<S, A>[];

type RootReducer<R extends Reducers> = Reducer<Parameters<R[0]>[0], Parameters<R[0]>[1]>;

const combineReducers = <R extends Reducers>(
  ...reducers: R
): RootReducer<R> => (state, action) => {
  let newState = { ...state };

  for (const reducer of reducers) {
    newState = reducer(newState, action);
  }

  return newState;
};

export default combineReducers
