import React, { ReactNode } from 'react';
import { useScrollPagination } from '../../hooks/useScrollPagination';

interface ScrollPaginationProps {
  children: ReactNode;
  itemWidth?: number;
  gap?: number;
  totalItems?: number;
  className?: string;
  showDots?: boolean;
  dotsClassName?: string;
  dotClassName?: string;
  activeDotClassName?: string;
}

const ScrollPagination: React.FC<ScrollPaginationProps> = ({
  children,
  itemWidth = 384,
  gap = 0,
  totalItems,
  className = '',
  showDots = true,
  dotsClassName = '',
  dotClassName = 'w-2.5 h-2.5',
  activeDotClassName = 'bg-indigo-600 scale-110',
}) => {
  // Count items from children if totalItems not provided
  const itemCount = totalItems || React.Children.count(children);

  const { scrollRef, activeIndex, handleScroll, scrollToIndex } = useScrollPagination({
    itemWidth,
    gap,
  });

  return (
    <>
      {/* Scroll Container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className={`flex overflow-x-auto pb-8 hide-scrollbar scroll-smooth ${className}`}
      >
        {children}
      </div>

      {/* Dots Navigation */}
      {showDots && itemCount > 1 && (
        <div className={`mt-6 flex justify-center gap-2 ${dotsClassName}`}>
          {Array.from({ length: itemCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`rounded-full transition ${dotClassName} ${
                activeIndex === index
                  ? activeDotClassName
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      )}

      {/* Hide scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default ScrollPagination;