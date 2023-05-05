import { SelectChangeEvent, SxProps } from "@mui/material";

export interface ISelectProps {
  value: string;
  label: string;
  onChange: (event: SelectChangeEvent) => void;
  sx?: SxProps;
}
