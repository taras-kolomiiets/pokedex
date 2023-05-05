import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { IPokemonCard } from "./types";
import usePokemonCard from "./usePokemonCard";
import styles from "./styles";
import { Chip } from "@/components";
import { PokemonType } from "@/constants/enums";

const PokemonCard = ({ url, handleSelectPokemon }: IPokemonCard) => {
  const { pokemon, type } = usePokemonCard({ url });

  return !type || pokemon?.types.find((item) => item.type.name === type) ? (
    <Card>
      <CardActionArea onClick={() => handleSelectPokemon(url)}>
        <CardMedia
          sx={styles.image}
          component="img"
          image={pokemon?.sprites.front_default}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" sx={styles.title}>
            {pokemon?.name}
          </Typography>
          <Stack direction="row" spacing={2}>
            {pokemon?.types.map(({ type }) => (
              <Chip
                label={type.name}
                type={type.name as PokemonType}
                key={type.url}
              />
            ))}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  ) : null;
};

export default PokemonCard;
