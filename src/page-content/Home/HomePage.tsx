import { Box, Grid, Typography, Button, CircularProgress } from "@mui/material";

import styles from "./styles";
import useHomePage from "./useHomePage";
import { DetailedPokemonCard, PokemonCard } from "@/components";

const HomePage = () => {
  const {
    pokemons,
    selectedPokemon,
    loadMore,
    handleSelectPokemon,
    isLoading,
  } = useHomePage();

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box sx={styles.container}>
      <Typography variant="h1" sx={styles.title}>
        Pokedex
      </Typography>
      <Grid container spacing={10} sx={styles.root}>
        <Grid item xs={8}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 2, sm: 4, md: 6 }}
          >
            {pokemons &&
              pokemons.map(({ name, url }) => (
                <Grid key={url} item xs={12} sm={12} md={4}>
                  <PokemonCard
                    name={name}
                    url={url}
                    handleSelectPokemon={handleSelectPokemon}
                  />
                </Grid>
              ))}
          </Grid>
          <Button variant="contained" fullWidth onClick={loadMore}>
            Load more
          </Button>
        </Grid>
        <Grid item xs={4}>
          {selectedPokemon ? (
            <DetailedPokemonCard selectedPokemon={selectedPokemon} />
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
