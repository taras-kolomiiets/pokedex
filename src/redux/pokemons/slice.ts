import { createSlice } from "@reduxjs/toolkit";

import { getPokemonById, getPokemons } from "./thunks";

import type IPokemonsState from "./types";

const initialState: IPokemonsState = {
  pokemons: [],
  nextUrl: null,
  selectedPokemon: null,
  isLoading: false,
  type: null,
};

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    resetState: () => initialState,
    resetPokemons: (state) => {
      state.pokemons = initialState.pokemons;
    },
    resetSelectedPokemon: (state) => {
      state.selectedPokemon = initialState.selectedPokemon;
    },
    setPokemonType: (state, { payload }) => {
      state.type = payload;
    },
    resetPokemonType: (state) => {
      state.type = null;
    },
  },
  extraReducers: (builder) => {
    // getPokemons
    builder.addCase(getPokemons.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getPokemons.fulfilled, (state, { payload }) => {
      state.isLoading = false;

      state.pokemons = payload.results;
      state.nextUrl = payload.next;
    });

    builder.addCase(getPokemons.rejected, (state) => {
      state.isLoading = false;
    });

    // getSelectedPokemon
    builder.addCase(getPokemonById.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getPokemonById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.selectedPokemon = payload;
    });

    builder.addCase(getPokemonById.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {
  resetState,
  resetPokemons,
  resetSelectedPokemon,
  setPokemonType,
  resetPokemonType,
} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
