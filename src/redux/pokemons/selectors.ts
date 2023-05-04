import type { RootState } from '@/redux/store';

export const pokemonsStateSelector = ({ pokemons }: RootState) => pokemons;
