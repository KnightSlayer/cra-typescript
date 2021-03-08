import { all } from 'redux-saga/effects';
import counterSagas from './reducers/counter/sagas';
import pokemonsSagas from './reducers/pokemons/sagas'


export default function* rootSaga() {
  yield all([
    counterSagas(),
    pokemonsSagas(),
  ])
}
