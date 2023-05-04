import { Chip as MuiChip } from "@mui/material";

import { styles } from "./styles";

import type { IChipProps } from "./types";

export const Chip = ({ label, type }: IChipProps) => {
  return <MuiChip sx={styles.root(type)} label={label} />;
};

export default Chip;
