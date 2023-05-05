import { theme } from "@/constants";

const styles = {
  loader: {
    width: "100%",
    heigth: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    padding: theme.spacing(20),
  },
  root: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    mb: theme.spacing(20),
    fontweight: 500,
    fontSize: "3rem",

    [theme.breakpoints.up("md")]: {
      fontSize: "6rem",
    },
  },
  select: {
    mb: theme.spacing(10),
  },
  btn: {
    fontWeight: 600,
    textTransform: "none",
    mt: theme.spacing(10),
  },
} as const;

export default styles;
