import { PokemonType } from "@/constants/enums";
import {
  IPokemonResponse,
  IPokemonShortResponse,
} from "@/data-transfer/responses";

export default interface IPokemonsState {
  pokemons: IPokemonShortResponse[];
  nextUrl: string | null;
  selectedPokemon: IPokemonResponse | null;
  isLoading: boolean;
  type: PokemonType | null;
}
