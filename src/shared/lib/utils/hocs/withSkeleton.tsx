import { DirectionType, SkeletonType } from "@/shared/interface/types.ts";
import React from "react";
import { Skeleton } from "@/shared/ui";

interface Props {
  isLoading: boolean;
  direction?: DirectionType;
  skeletonType?: SkeletonType;
}

function withSkeleton<P extends object>( Component: React.ComponentType<P>, count?: number ) {
  return function WithSkeleton( props: Props & P ) {
    const { isLoading, skeletonType, direction = "row", ...restProps } = props;

    if (isLoading) {
      return <Skeleton skeletonType={skeletonType} count={count} direction={direction}/>;
    }

    return <Component skeletonType={skeletonType} {...(restProps as P)} />;
  };
}

export default withSkeleton;