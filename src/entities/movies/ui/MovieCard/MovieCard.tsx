import styles from './styles.module.css';
import { MovieCardProps, MoviesCardType } from '../../model/types.ts';

const MovieCard = ( { movie, cardType = 'item', buttonSlot }: MovieCardProps ) => {
  const { name, year, poster, description, genres, countries, rating }: MoviesCardType = movie

  return (
    <article
      className={`${styles.card} ${cardType === 'search' && styles.search__card} ${cardType === 'item' && styles.mini__card} ${cardType === 'full-item' && styles.full__card}`}>
      {poster && <img className={styles.card__image} src={poster} alt="movie"/>}
      <div className={styles.card__info}>
        <h3 className={styles.card__title}>{name}</h3>
        {cardType === 'full-item' ?
          <>
            <p className={styles.card__description}>{description}</p>
            <div className={styles.table}>
              <div className={styles.table__row}>
                <span>Genre:</span>
                <span>{`${genres?.map(genre => genre.genre).join(', ')}`}</span>
              </div>
              <div className={styles.table__row}>
                <span>Country:</span>
                <span>{`${countries?.map(country => country.country).join(', ')}`}</span>
              </div>
              <div className={styles.table__row}>
                <span>Year:</span>
                <span>{year}</span>
              </div>
            </div>
            <p className={styles.card__rating}>{Number(rating) ? `${rating}/10` : ''}</p>
          </>
          :
          <div className={styles.card__extra_info}>
            <p className={styles.card__year}>{year}</p>
            <p className={styles.card__rating}>{Number(rating) ? `${rating}/10` : ''}</p>
          </div>}
        {buttonSlot && <div className={styles.buttons}>{buttonSlot}</div>}
      </div>
    </article>
  );
};

export default MovieCard;