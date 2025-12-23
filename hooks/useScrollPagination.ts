import { useRef, useState, useCallback } from 'react';

interface UseScrollPaginationProps {
  itemWidth: number;
  gap?: number;
}

interface UseScrollPaginationReturn {
  scrollRef: React.RefObject<HTMLDivElement>;
  activeIndex: number;
  handleScroll: () => void;
  scrollToIndex: (index: number) => void;
}

export const useScrollPagination = ({
  itemWidth,
  gap = 0,
}: UseScrollPaginationProps): UseScrollPaginationReturn => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const CARD_WIDTH = itemWidth + gap;

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const index = Math.round(scrollLeft / CARD_WIDTH);
    setActiveIndex(index);
  }, [CARD_WIDTH]);

  const scrollToIndex = useCallback(
    (index: number) => {
      if (!scrollRef.current) return;
      scrollRef.current.scrollTo({
        left: index * CARD_WIDTH,
        behavior: 'smooth',
      });
    },
    [CARD_WIDTH]
  );

  return {
    scrollRef,
    activeIndex,
    handleScroll,
    scrollToIndex,
  };
};