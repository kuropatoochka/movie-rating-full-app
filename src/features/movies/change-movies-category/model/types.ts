export type CategoriesType = {
  id: string,
  label: string
}

export type CategoriesProps = {
  categories: CategoriesType[];
  setSelectedCategory: ( id: string ) => void;
  selectedCategory: string | null;
}