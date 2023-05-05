import { theme } from "@/constants";
import { PokemonType } from "@/constants/enums";

const colorHandler = {
  [PokemonType.Electric]: "rgba(254, 244, 4, 0.8)",
  [PokemonType.Fire]: "rgba(254, 168, 4, 0.8)",
  [PokemonType.Grass]: "rgba(120, 244, 4, 0.8)",
  [PokemonType.Poison]: "rgba(28, 233, 131, 0.8)",
  [PokemonType.Bug]: "rgba(94, 171, 131, 0.8)",
  [PokemonType.Water]: "rgba(120, 161, 214, 0.8)",
  [PokemonType.Flying]: "rgba(161, 210, 211, 0.8)",
};

export const styles = {
  root: (type: PokemonType) => ({
    padding: theme.spacing(2, 4),
    borderRadius: theme.spacing(3),
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "20px",
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colorHandler[type],
  }),
} as const;
