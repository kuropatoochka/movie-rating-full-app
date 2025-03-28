export type FavoriteButtonPropsType = {
  id: number,
  name: string,
  movieType: string,
  year: number,
  description: string,
  rating: string,
  poster: string,
  isFavorite: boolean,
  variant: 'icon' | 'text',
}