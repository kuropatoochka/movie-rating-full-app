export type CategoriesType = {
  id: string,
  label: string
}

export type CategoriesProps = {
  categories: CategoriesType[];
  setSelectedCategory: ( category: string | null ) => void;
  selectedCategory: string | null;
}