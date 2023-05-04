import type {
  IGetPokemonsResponse,
  IPokemonResponse,
} from "@/data-transfer/responses";
import axios from "axios";

const getPokemons = async (
  url = "https://pokeapi.co/api/v2/pokemon/?limit=12"
) => {
  return axios.get<IGetPokemonsResponse>(url).then((res) => res.data);
};

const getPokemonById = async (url: string) => {
  return axios.get<IPokemonResponse>(url).then((res) => res.data);
};

const pokemonsService = {
  getPokemons,
  getPokemonById,
};

export default pokemonsService;
