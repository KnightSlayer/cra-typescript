import counter, { decremented, incremented, arbitraryDelta } from "./counter";

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(counter(undefined, {type: ''})).toEqual({value: 0})
  });

  it('should handle decremented', () => {
    expect(
      counter({value: 4}, decremented())
    ).toEqual({value: 3});

    expect(
      counter({value: 0}, decremented())
    ).toEqual({value: -1});

    expect(
      counter({value: -9}, decremented())
    ).toEqual({value: -10});
  });

  it('should handle incremented', () => {
    expect(
      counter({value: 4}, incremented())
    ).toEqual({value: 5});

    expect(
      counter({value: 0}, incremented())
    ).toEqual({value: 1});

    expect(
      counter({value: -1}, incremented())
    ).toEqual({value: 0});

    expect(
      counter({value: -1000}, incremented())
    ).toEqual({value: -999});
  });

  it('should handle arbitraryDelta', () => {
    expect(
      counter({value: 4}, arbitraryDelta(10))
    ).toEqual({value: 14});

    expect(
      counter({value: 0}, arbitraryDelta(15))
    ).toEqual({value: 15});

    expect(
      counter({value: -1}, arbitraryDelta(4))
    ).toEqual({value: 3});

    expect(
      counter({value: -1000}, arbitraryDelta(-111))
    ).toEqual({value: -1111});
  });
})
