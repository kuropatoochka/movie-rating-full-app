import { CategoriesType } from "@/entities/category";

export type CategoriesProps = {
  categories: CategoriesType[];
  setSelectedCategory: ( category: string | null ) => void;
  selectedCategory: string | null;
}