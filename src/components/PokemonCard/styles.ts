import { theme } from "@/constants";

const styles = {
  image: {
    height: theme.spacing(70),
    objectFit: "contain",
  },
  title: {
    textAlign: "center",
  },
} as const;

export default styles;
