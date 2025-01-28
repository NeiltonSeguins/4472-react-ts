import React, { useEffect, useState } from "react";
import styles from "./MovieSection.module.css";
import Fieldset from "../Fieldset";
import InputText from "../InputText";
import Button from "../Button";
import { FaSearch } from "react-icons/fa";
import MovieList from "../MovieList";
import useFetchMovies from "../../hooks/useFetchMovies";

const MovieSection = () => {
  const { movies, error, isLoading } = useFetchMovies();

  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant="secondary">
          <InputText placeholder="Buscar filmes..." />
          <Button variant="icon">
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={styles.titulo}>Em cartaz</h1>
        <MovieList movies={movies} />
      </section>
    </main>
  );
};

export default MovieSection;
