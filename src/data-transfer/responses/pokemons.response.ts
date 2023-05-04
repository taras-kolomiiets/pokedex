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

export interface IPokemonResponse {
    abilities: any[];
    base_experience: number;
    forms: any[];
    game_indices: any[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: any[];
    name: string;
    sprites: any[];
    weight: number;
    types: any[];
}