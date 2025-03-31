import styles from './styles.module.css';
import React from "react";
import { Button } from "@/shared/ui";
import { CategoriesProps } from "../../model/types.ts";

const CategoryTabs = ( { categories, setSelectedCategory, selectedCategory }: CategoriesProps ) => {
  return (
    <ul className={styles.categories}>
      {categories.map(( category ) => {
        return (
          <li key={category.id}>
            <Button
              text={category.label}
              isActive={selectedCategory === category.id}
              handleClick={() => setSelectedCategory(category.id)}
            />
          </li>
        )
      })}
    </ul>
  );
};

export default CategoryTabs;