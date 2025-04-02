import { SkeletonProps } from "@/shared/interface/types.ts";
import styles from './styles.module.css';


const Skeleton = ( { count, skeletonType = "item", direction = "row" }: SkeletonProps ) => {
  return (
    <>
      {count > 1 ? (
        <ul className={direction === "column" ? styles.columnList : styles.rowList}>
          {[ ...Array(count) ].map(( _, index ) => (
            <li key={index} className={skeletonType === "search" ? styles.search : styles.item}></li>
          ))}
        </ul>
      ) : (
        <li className={skeletonType === "search" ? styles.search : styles.item}></li>
      )}
    </>
  );
};

export default Skeleton;