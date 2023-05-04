import { useCallback, useEffect, useState } from "react";
import { IPokemonCard } from "./types";
import { useDispatch } from "@/hooks";
import { IPokemonResponse } from "@/data-transfer/responses";
import { pokemonsService } from "@/services";
import { getPokemonById } from "@/redux/pokemons/thunks";

const usePokemonCard = ({ url }: Pick<IPokemonCard, "url">) => {
  const [pokemon, setPokemon] = useState<IPokemonResponse | null>(null);

  useEffect(() => {
    async function fetchData() {
      const payload = await pokemonsService.getPokemonById(url);
      setPokemon(payload);
    }

    fetchData();
  }, [url]);

  return { pokemon };
};

export default usePokemonCard;
