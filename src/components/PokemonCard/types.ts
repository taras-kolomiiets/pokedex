export interface IPokemonCard {
  name?: string;
  url: string;
  handleSelectPokemon: (url: string) => void;
}
