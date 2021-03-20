import { call, put } from 'redux-saga/effects';
import { fetchDeltaNumber } from './api';
import counterReducer, { decremented, incremented, arbitraryDelta } from "./counter";
import { changeAsync } from './sagas'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(counterReducer(undefined, {type: ''})).toEqual({value: 0, isLoading: false})
  });

  it('should handle decremented', () => {
    expect(
      counterReducer({value: 4, isLoading: false}, decremented())
    ).toEqual({value: 3, isLoading: false});

    expect(
      counterReducer({value: 0, isLoading: false}, decremented())
    ).toEqual({value: -1, isLoading: false});

    expect(
      counterReducer({value: -9, isLoading: false}, decremented())
    ).toEqual({value: -10, isLoading: false});
  });

  it('should handle incremented', () => {
    expect(
      counterReducer({value: 4, isLoading: false}, incremented())
    ).toEqual({value: 5, isLoading: false});

    expect(
      counterReducer({value: 0, isLoading: false}, incremented())
    ).toEqual({value: 1, isLoading: false});

    expect(
      counterReducer({value: -1, isLoading: false}, incremented())
    ).toEqual({value: 0, isLoading: false});

    expect(
      counterReducer({value: -1000, isLoading: false}, incremented())
    ).toEqual({value: -999, isLoading: false});
  });

  it('should handle arbitraryDelta', () => {
    expect(
      counterReducer({value: 4, isLoading: false}, arbitraryDelta(10))
    ).toEqual({value: 14, isLoading: false});

    expect(
      counterReducer({value: 0, isLoading: false}, arbitraryDelta(15))
    ).toEqual({value: 15, isLoading: false});

    expect(
      counterReducer({value: -1, isLoading: false}, arbitraryDelta(4))
    ).toEqual({value: 3, isLoading: false});

    expect(
      counterReducer({value: -1000, isLoading: false}, arbitraryDelta(-111))
    ).toEqual({value: -1111, isLoading: false});
  });

  it('should run changeAsync saga', () => {
    const gen = changeAsync({type: 'type', payload: 20});

    expect(gen.next().value).toEqual(call(fetchDeltaNumber, 20));
    expect(gen.next().value).toEqual(put({type: arbitraryDelta.toString()}));
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });
})
