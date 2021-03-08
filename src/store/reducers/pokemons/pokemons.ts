import { createSlice, Action, PayloadAction } from '@reduxjs/toolkit'
import { ThunkAction } from "redux-thunk";
import { TRootState } from "store/rootReducer";

type TPokemonsState = {
}

const initialState: TPokemonsState = {
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    someAction: (state, action: PayloadAction<number>) => {
      return action.payload;
    },
  }
})

export const {  } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;

