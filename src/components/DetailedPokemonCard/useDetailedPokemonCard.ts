import { IDetailedPokemonCard } from "./types";

const useDetailedPokemonCard = ({ selectedPokemon }: IDetailedPokemonCard) => {
  const rows = [
    {
      name: "Type",
      value: selectedPokemon.types
        .map(({ type }) => type.name)
        .toString()
        .split(" "),
    },
    {
      name: "Attack",
      value: selectedPokemon.stats.find((stat) => stat.stat.name === "attack")
        ?.base_stat,
    },
    {
      name: "Defence",
      value: selectedPokemon.stats.find((stat) => stat.stat.name === "defense")
        ?.base_stat,
    },
    {
      name: "HP",
      value: selectedPokemon.stats.find((stat) => stat.stat.name === "hp")
        ?.base_stat,
    },
    {
      name: "SP Attack",
      value: selectedPokemon.stats.find(
        (stat) => stat.stat.name === "special-attack"
      )?.base_stat,
    },
    {
      name: "SP Defense",
      value: selectedPokemon.stats.find(
        (stat) => stat.stat.name === "special-defense"
      )?.base_stat,
    },
    {
      name: "Speed",
      value: selectedPokemon.stats.find((stat) => stat.stat.name === "speed")
        ?.base_stat,
    },
    {
      name: "Total moves",
      value: selectedPokemon.moves.length,
    },
  ];

  return { rows };
};

export default useDetailedPokemonCard;
