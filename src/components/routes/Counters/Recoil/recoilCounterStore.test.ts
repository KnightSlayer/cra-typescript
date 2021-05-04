import { snapshot_UNSTABLE } from "recoil";
import state from "./recoilCounterStore";

describe('recoil counter store', () => {
  it('should initial counter with 0', () => {
    const initialSnapshot = snapshot_UNSTABLE();
    expect(initialSnapshot.getLoadable(state).valueOrThrow().count).toBe(0);
  });

});
