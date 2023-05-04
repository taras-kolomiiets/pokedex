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
    dispatch(
      getPokemons(
        nextUrl ? nextUrl : "https://pokeapi.co/api/v2/pokemon/?limit=12"
      )
    ).unwrap();
  }, [dispatch, nextUrl]);

  const handleSelectPokemon = useCallback(
    (url: string) => {
      dispatch(getPokemonById(url)).unwrap();
    },
    [dispatch]
  );

  useEffect(() => {
    loadMore();
    return () => {
      dispatch(resetState());
    };
  }, [dispatch, loadMore]);

  return {
    pokemons,
    loadMore,
    isLoading,
    selectedPokemon,
    handleSelectPokemon,
  };
};

export default useHomePage;
