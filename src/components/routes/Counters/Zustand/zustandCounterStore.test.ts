import counterStore from "./zustandCounterStore";

describe('zustand counter store', () => {
  it('should initial counter with 0', () => {
    const state = counterStore.getState();
    expect(state.counter).toBe(0);
  });
  it('should increment counter', () => {
    let state = counterStore.getState();
    state.increment();

    state = counterStore.getState();
    expect(state.counter).toBe(1);
    state.increment();

    state = counterStore.getState();
    expect(state.counter).toBe(2);
  });
  it('should decrement counter', () => {
    let state = counterStore.getState();
    state.decrement();

    state = counterStore.getState();
    expect(state.counter).toBe(-1);
    state.decrement();

    state = counterStore.getState();
    expect(state.counter).toBe(-2);
  });
  it('should change counter by param value', () => {
    let state = counterStore.getState();
    state.changeBy(-19);

    state = counterStore.getState();
    expect(state.counter).toBe(-19);
    state.changeBy(125);

    state = counterStore.getState();
    expect(state.counter).toBe(106);
  });
});
