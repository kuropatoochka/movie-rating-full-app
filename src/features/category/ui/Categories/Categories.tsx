import React from 'react';
import styles from './style.module.css'
import { CategoriesProps } from "../../model/types.ts";

const Categories = ( { categories, setSelectedCategory, selectedCategory }: CategoriesProps ) => {
  return (
    <div className={styles.categories}>
      {categories.map(( category ) => {
        return (
          <button
            key={category.id}
            className={selectedCategory === category.id ? styles.active : styles.item}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.label}
          </button>
        )
      })}
    </div>
  );
};

export default Categories;