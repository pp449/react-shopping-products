import { useState, useEffect, useCallback } from "react";

const useInfiniteScroll = (
  options: IntersectionObserverInit,
  externalRef: React.MutableRefObject<HTMLElement | null>
): { isIntersecting: boolean } => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const onIntersection: IntersectionObserverCallback = useCallback(([entry]) => {
    setIsIntersecting(entry.isIntersecting);
  }, []);

  useEffect(() => {
    if (!externalRef.current) return;

    const observer = new IntersectionObserver(onIntersection, {
      ...options,
    });
    observer.observe(externalRef.current);

    return () => {
      observer.disconnect();
    };
  }, [options, onIntersection, externalRef]);

  return { isIntersecting };
};

export default useInfiniteScroll;
