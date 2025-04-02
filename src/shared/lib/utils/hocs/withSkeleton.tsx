import { DirectionType, SkeletonType } from "@/shared/interface/types.ts";
import React from "react";
import { Skeleton } from "@/shared";

export interface Props {
  isLoading?: boolean;
  direction?: DirectionType;
  skeletonType?: SkeletonType;
}

function withSkeleton<P extends object>( Component: React.ComponentType<P>, count?: number ) {
  return function WithSkeleton( props: Props & P ) {
    const { isLoading, skeletonType, direction = "row", ...restProps } = props;

    if (isLoading) {
      return <Skeleton skeletonType={skeletonType as "search" | "item"} count={count ?? 1}
                       direction={direction as "row" | "column"}/>;
    }

    return <Component {...(restProps as P)} />;
  };
}

export default withSkeleton;