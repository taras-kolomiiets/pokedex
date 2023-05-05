import { Box, Grid, Typography, Button, CircularProgress } from "@mui/material";

import styles from "./styles";
import useHomePage from "./useHomePage";
import { DetailedPokemonCard, PokemonCard, Select } from "@/components";

const HomePage = () => {
  const {
    pokemons,
    selectedPokemon,
    loadMore,
    handleSelectPokemon,
    isLoading,
    type,
    handleSelectType,
  } = useHomePage();

  if (isLoading) {
    return (
      <Box sx={styles.loader}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={styles.container}>
      <Typography variant="h1" sx={styles.title}>
        Pokedex
      </Typography>
      <Select
        value={type}
        onChange={handleSelectType}
        label="Type"
        sx={styles.select}
      />
      <Grid container spacing={20} sx={styles.root}>
        <Grid item xs={12} md={8}>
          <Grid
            container
            rowSpacing={12}
            columnSpacing={{ xs: 2, sm: 4, md: 12 }}
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
          <Button
            variant="contained"
            fullWidth
            onClick={loadMore}
            sx={styles.btn}
          >
            Load more
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          {selectedPokemon ? (
            <DetailedPokemonCard selectedPokemon={selectedPokemon} />
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
