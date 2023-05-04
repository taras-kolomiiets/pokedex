export interface IPokemonShortResponse {
  name: string;
  url: string;
}

export interface IGetPokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemonShortResponse[];
}

export interface IStatResponse {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
}

export interface ITypeResponse {
  slot: number;
  type: { name: string; url: string };
}

export interface IPokemonResponse {
  stats: IStatResponse[];
  id: number;
  moves: any[];
  name: string;
  sprites: { front_default: string };
  weight: number;
  types: ITypeResponse[];
}
