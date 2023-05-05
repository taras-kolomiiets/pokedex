import { PokemonType } from "@/constants/enums";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";
import { ISelectProps } from "./types";

const Select = ({ value, onChange, label, sx }: ISelectProps) => {
  return (
    <FormControl fullWidth sx={sx}>
      <InputLabel id="select-label">Type</InputLabel>
      <MuiSelect
        labelId="select-label"
        id="select"
        value={value}
        label={label}
        onChange={onChange}
      >
        <MenuItem value={PokemonType.Electric}>Electric</MenuItem>
        <MenuItem value={PokemonType.Fire}>Fire</MenuItem>
        <MenuItem value={PokemonType.Grass}>Grass</MenuItem>
        <MenuItem value={PokemonType.Poison}>Poison</MenuItem>
        <MenuItem value={PokemonType.Water}>Water</MenuItem>
        <MenuItem value={PokemonType.Flying}>Flying</MenuItem>
        <MenuItem value={PokemonType.Bug}>Bug</MenuItem>
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
