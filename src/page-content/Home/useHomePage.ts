import { useDispatch, useSelector } from "@/hooks";
import { pokemonsStateSelector } from "@/redux/pokemons/selectors";
import {
  resetPokemonType,
  resetState,
  setPokemonType,
} from "@/redux/pokemons/slice";
import { getPokemonById, getPokemons } from "@/redux/pokemons/thunks";
import { SelectChangeEvent } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

const useHomePage = () => {
  const dispatch = useDispatch();
  const { pokemons, selectedPokemon, isLoading, nextUrl } = useSelector(
    pokemonsStateSelector
  );

  const [type, setType] = useState("");

  const handleSelectType = useCallback(
    (event: SelectChangeEvent) => {
      setType(event.target.value);
      dispatch(setPokemonType(event.target.value));
    },
    [dispatch]
  );

  const loadMore = useCallback(() => {
    if (nextUrl) {
      dispatch(getPokemons(nextUrl)).unwrap();
      dispatch(resetPokemonType());
      setType("");
    }
  }, [dispatch, nextUrl]);

  const loadPokemons = useCallback(() => {
    dispatch(getPokemons()).unwrap();
  }, [dispatch]);

  const handleSelectPokemon = useCallback(
    (url: string) => {
      dispatch(getPokemonById(url)).unwrap();
    },
    [dispatch]
  );

  useEffect(() => {
    loadPokemons();
    return () => {
      dispatch(resetState());
    };
  }, [dispatch, loadPokemons]);

  return {
    pokemons,
    selectedPokemon,
    loadMore,
    isLoading,
    handleSelectPokemon,
    type,
    handleSelectType,
  };
};

export default useHomePage;
