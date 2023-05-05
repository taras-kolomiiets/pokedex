import { useEffect, useState } from "react";
import { IPokemonCard } from "./types";
import { IPokemonResponse } from "@/data-transfer/responses";
import { pokemonsService } from "@/services";
import { useSelector } from "@/hooks";
import { pokemonsStateSelector } from "@/redux/pokemons/selectors";

const usePokemonCard = ({ url }: Pick<IPokemonCard, "url">) => {
  const [pokemon, setPokemon] = useState<IPokemonResponse | null>(null);
  const { type } = useSelector(pokemonsStateSelector);

  useEffect(() => {
    async function fetchData() {
      const payload = await pokemonsService.getPokemonById(url);
      setPokemon(payload);
    }

    fetchData();
  }, [url]);

  return { pokemon, type };
};

export default usePokemonCard;
