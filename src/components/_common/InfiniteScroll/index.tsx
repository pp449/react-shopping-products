import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { useEffect, useRef } from "react";

interface InfiniteScrollProps {
  fetchingFunction: () => void;
  isAbleFetchNextPage: boolean;
  children: React.ReactNode;
}

const InfiniteScroll = ({ fetchingFunction, isAbleFetchNextPage, children }: InfiniteScrollProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { isIntersecting } = useInfiniteScroll({ threshold: 0.25, rootMargin: "80px" }, targetRef);

  useEffect(() => {
    if (isIntersecting) {
      fetchingFunction();
    }
  }, [isIntersecting]);

  return (
    <>
      <div>{children}</div>
      {isAbleFetchNextPage && <div ref={targetRef} />}
    </>
  );
};

export default InfiniteScroll;
