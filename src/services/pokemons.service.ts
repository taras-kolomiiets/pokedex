import type { IGetPokemonsQuery } from "@/data-transfer/requests";
import type {
  IGetPokemonsResponse,
  IPokemonResponse,
} from "@/data-transfer/responses";
import axios from "axios";

const getPokemons = async (url: string) => {
  return axios.get<IGetPokemonsResponse>(url).then((res) => res.data);
};

const getPokemonById = async (url: string) => {
  return axios.get<IPokemonResponse>(`${url}`).then((res) => res.data);
};

const pokemonsService = {
  getPokemons,
  getPokemonById,
};

export default pokemonsService;
