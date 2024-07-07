# Hooks Combine Reducers

Building a complex React app using the `useReducer` hook can lead to long reducers.

It's better to split reducers & states into seperate files. `hooks-combine-reducers` accepts multiple reducer files or states and combines them into a single object.

| params      | type   |
| ----------- | ------ |
| name        | string |
| description | string |

## How To Use

Create an initial state:

```
const initialState = {
  key: value
};
```

Then create multiple reducer functions:

```
const reducer1 = (state, action) => {
  switch (action.type) {
    case "ACTION":
      return
    default:
      return state;
  }
};

const reducer2 = (state, action) => {
  switch (action.type) {
    case "ACTION":
      return
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