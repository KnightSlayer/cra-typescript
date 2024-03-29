import { wait } from 'services/utils'

export const fetchDeltaNumber = async (module: number) => {
  await wait(1500);

  return Math.floor(Math.random() * (2 * module + 1) ) - module;
}
