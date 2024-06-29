<h1>Hooks Combine Reducers</h1><p>Building a complex React app using the <code>useReducer</code> hook can lead to long reducers.</p><p>It's better to split reducers &amp; states into seperate files. <code>hooks-combine-reducers</code> accepts multiple reducer files or states and combines them into a single object.</p><h2>How To Use</h2><p>Create an initial state:</p><pre><code>const initialState = {
  key: value
};</code></pre><p>Then create multiple reducer functions:</p><pre><code>const reducer1 = (state, action) =&gt; {
  switch (action.type) {
    case "ACTION":
      return
    default:
      return state;
  }
};

const reducer2 = (state, action) =&gt; {
  switch (action.type) {
    case "ACTION":
      return
    default:
      return state;
  }
};</code></pre><p></p><p>And finally combine the reducers:</p><pre><code>  const [state, dispatch] = React.useReducer(
    combineReducers({
      keyName1: reducer1,
      keyName2: reducer2
    }),
    initialState
  );
</code></pre><h2>Combining State</h2><p>You may want to separate state into different objects for better organization.</p><pre><code>import { combineReducers, combineStates } from 'hooks-combine-reducers';const state1 = {
  ...
}const state2 = {
  ...
}const reducer1 = (state, action) =&gt; {
  switch (action.type) {
    case "ACTION":
      return
    default:
      return state;
  }
};const reducer2 = (state, action) =&gt; {
  switch (action.type) {
    case "ACTION":
      return
    default:
      return state;
  }
};const [state, dispatch] = React.useReducer(
  combineReducers({
    keyName1: reducer1,
    keyName2: reducer2
  }),
  combineStates([state1, state2])
);
</code></pre><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>