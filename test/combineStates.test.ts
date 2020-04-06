import { combineStates } from '../src/index';
import { renderHook } from '@testing-library/react-hooks';

describe('Combine States', () => {
  test('Returns merged states', async () => {
    const projectsState = {
      projects: [],
    };

    const stringState = {
      string: '',
    };

    const { result } = renderHook(() =>
      combineStates([projectsState, stringState])
    );

    expect(result.current).toEqual({
      projects: [],
      string: '',
    });
  });
});
