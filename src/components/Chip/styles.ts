import { theme } from "@/constants";
import { PokemonType } from "@/constants/enums";

const colorHandler = {
  [PokemonType.Electric]: "yellow",
  [PokemonType.Fire]: "red",
  [PokemonType.Grass]: "grey",
  [PokemonType.Poison]: "green",
  [PokemonType.Bug]: "green",
  [PokemonType.Water]: "blue",
  [PokemonType.Flying]: "silver",
};

export const styles = {
  root: (type: PokemonType) => ({
    padding: theme.spacing(3, 5),
    borderRadius: theme.spacing(3),
    fontSize: "12px",
    lineHeight: "20px",
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colorHandler[type],
  }),
} as const;
