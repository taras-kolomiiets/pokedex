import {
  Card,
  CardContent,
  CardMedia,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { IDetailedPokemonCard } from "./types";
import styles from "./styles";
import useDetailedPokemonCard from "./useDetailedPokemonCard";

const DetailedPokemonCard = ({ selectedPokemon }: IDetailedPokemonCard) => {
  const { rows } = useDetailedPokemonCard({ selectedPokemon });

  return (
    <Card>
      <CardMedia
        sx={styles.image}
        component="img"
        image={selectedPokemon?.sprites.front_default}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" sx={styles.title}>
          {selectedPokemon.name}
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default DetailedPokemonCard;
