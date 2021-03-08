import { wait } from 'services/utils'

export const fetchDeltaNumber = async (module: number) => {
  await wait(500);

  return Math.round(Math.random() * 2 * module - module);
}
