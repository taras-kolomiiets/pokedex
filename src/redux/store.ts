import { configureStore } from "@reduxjs/toolkit";

import { isSSR } from "@/utils";

import { pokemonsReduser } from "./pokemons";

import type { EnhancedStore } from "@reduxjs/toolkit";

let store: EnhancedStore;

const createStore = () =>
  configureStore({
    reducer: {
      pokemons: pokemonsReduser,
    },
  });

export const initializeStore = (): Store => {
  // Create new store if there is no existing one
  let newStore = store ?? createStore();

  // Assign store only on client
  // keep it undefined on backend
  if (!isSSR()) {
    store = newStore;
  }

  // For SSG and SSR always create a new store
  // without setting it to the `store` object to avoid memory leaks
  if (isSSR()) {
    return newStore;
  }

  // If we are on client and store is not created
  if (!store) {
    store = newStore;
  }

  return newStore;
};

export type Store = ReturnType<typeof createStore>;
export type RootState = ReturnType<Store["getState"]>;
export type AppDispatch = Store["dispatch"];
