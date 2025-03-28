import React from 'react';
import styles from './styles.module.css';
import { MoviesCardType } from "@/entities/movies/model/types.ts";

const MovieCard = ( {
                      name,
                      movieType,
                      year,
                      poster,
                      description,
                      rating,
                      type = 'item',
                      buttonSlot
                    }: MoviesCardType ) => {
  return (
    <li className={`${styles.card} ${type === 'search' && styles.search__card}`}>
      <img className={styles.card__image} src={poster} alt="movie"/>
      <div className={styles.card__info}>
        <h3 className={styles.card__title}>{name}</h3>
        <p className={styles.card__rating}>{`${rating}/10`}</p>
        <p className={styles.card__year}>{year}</p>
      </div>
      {buttonSlot && <>{buttonSlot}</>}
    </li>
  );
};

export default MovieCard;