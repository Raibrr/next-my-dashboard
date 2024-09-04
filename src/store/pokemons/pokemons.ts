import { SimplePokemon } from '@/pokemons';
import { createSlice } from '@reduxjs/toolkit'

interface PokemonState {
    [key: string]: SimplePokemon
}

const initialState = {
    "1": {id: "1", name: "bulbasaur"},
    "3": {id: "3", name: "asdfasdfa"},
}

const pokemons = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {}
});

export const {} = pokemons.actions

export default pokemons.reducer