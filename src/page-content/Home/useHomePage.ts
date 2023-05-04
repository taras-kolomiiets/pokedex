import { useDispatch, useSelector } from "@/hooks";
import { pokemonsStateSelector } from "@/redux/pokemons/selectors";
import { resetState } from "@/redux/pokemons/slice";
import { getPokemonById, getPokemons } from "@/redux/pokemons/thunks";
import { useCallback, useEffect } from "react";

const useHomePage = () => {
  const dispatch = useDispatch();
  const { pokemons, selectedPokemon, isLoading, nextUrl } = useSelector(
    pokemonsStateSelector
  );

  const loadMore = useCallback(() => {
    if (nextUrl) {
      dispatch(getPokemons(nextUrl)).unwrap();
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
  };
};

export default useHomePage;
