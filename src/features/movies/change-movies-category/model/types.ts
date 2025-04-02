export type CategoriesType = {
  id: string,
  label: string
}

export type CategoriesProps = {
  categories: CategoriesType[],
  selectedCategory: string,
  setSelectedCategory: ( id: string ) => void,
}