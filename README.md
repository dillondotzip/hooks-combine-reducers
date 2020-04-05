# Hooks Combine Reducers
Building a complex React app using the `useReducer` hook can lead to long reducers.

It's better to split reducers up into seperate files. `hooks-combine-reducers` accepts multiple reducer files and combines them into a single object without nesting (like other solutions).

Check example at https://codesandbox.io/s/ecstatic-davinci-jpvs1


## How To Use

Create an initial state:

```
const initialState = {

};
```

Then create multiple reducer functions:
```
const reducer1 = (state, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

const reducer2 = (state, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

```

And finally combine the reducers:

```
  const [state, dispatch] = React.useReducer(
    combineReducers({
      keyName1: reducer1,
      keyName2: reducer2
    }),
    initialState
  );
```
