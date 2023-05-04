import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { IPokemonCard } from "./types";
import usePokemonCard from "./usePokemonCard";

const PokemonCard = ({ url, handleSelectPokemon }: IPokemonCard) => {
  const { pokemon } = usePokemonCard({ url });

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => handleSelectPokemon(url)}>
        <CardMedia
          component="img"
          height="140"
          image={pokemon?.sprites.back_default}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon?.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
