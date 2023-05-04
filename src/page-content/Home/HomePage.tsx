import { Box, Grid, Typography, Button } from "@mui/material";

import styles from "./styles";
import useHomePage from "./useHomePage";
import { PokemonCard } from "@/components";

const HomePage = () => {
  const {
    pokemons,
    loadMore,
    selectedPokemon,
    handleSelectPokemon,
    isLoading,
  } = useHomePage();

  return (
    <Box>
      <Typography variant="h1">Pokedex</Typography>
      <Grid container spacing={10} sx={styles.root}>
        <Grid item xs={8} sx={styles.section}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {pokemons &&
              pokemons.map(({ name, url }) => (
                <Grid key={url} item xs={4}>
                  <PokemonCard
                    name={name}
                    url={url}
                    handleSelectPokemon={handleSelectPokemon}
                  />
                </Grid>
              ))}
          </Grid>
          <Button onClick={loadMore}>Load more</Button>
        </Grid>
        <Grid item xs={4} sx={styles.section}>
          2
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
