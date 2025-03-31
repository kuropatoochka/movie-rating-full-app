import { DirectionType, SkeletonType } from "@/shared/interface/types.ts";
import styles from './styles.module.css';

interface Props {
  skeletonType?: SkeletonType;
  count?: number;
  direction?: DirectionType;
}

const Skeleton = ( { count = 1, skeletonType = "item", direction = "row" }: Props ) => {
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