import {singleState} from '../src/index'
import * as React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'

interface State {
  projects: string[];
  string: string;
}

type Action = { type: "TESTPROJECTS" } | { type: "TESTSTRING" };


describe('Combine Reducers', () => {
  test('Returns merged reducers', async () => {

    const initialState = {
      projects: [],
      string: ""
    };

    const projectsReducer = (state: State, action: Action) => {
      switch (action.type) {
        case "TESTPROJECTS":
          return { ...state, projects: ["Test Array"] };
        default:
          return state;
      }
    };
    
    const stringReducer = (state: State, action: Action) => {
      switch (action.type) {
        case "TESTSTRING":
          return { ...state, string: "TEST STRING" };
        default:
          return state;
      }
    };

    const {result} = renderHook(() => React.useReducer(singleState(projectsReducer, stringReducer), initialState))
    // const [state, _dispatch] = result.current

    act(() => { 
      result.current[1]({ type: 'TESTPROJECTS' })
      result.current[1]({ type: 'TESTSTRING' }) 
    });

    expect(result.current[0]).toEqual({
      projects: ["Test Array"],
      string: "TEST STRING"
    })



  });
});