import { createAsyncThunk } from "@reduxjs/toolkit";

import { pokemonsService } from "@/services";
import { handleThunkApiError } from "@/utils";

export const getPokemons = createAsyncThunk(
  "pokemons/get-data",
  handleThunkApiError(pokemonsService.getPokemons, { showToast: false })
);

export const getPokemonById = createAsyncThunk(
  "pokemons/get-selected-pokemon-data",
  handleThunkApiError(pokemonsService.getPokemonById, { showToast: false })
);
