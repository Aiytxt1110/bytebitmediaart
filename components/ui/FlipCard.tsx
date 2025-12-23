import React from 'react';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  width?: string;
  height?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  front,
  back,
  width = '200px',
  height = '250px',
}) => {
  return (
    <div className="flip-card" style={{ width, height }}>
      <div className="flip-card-inner">
        <div className="flip-card-front">{front}</div>
        <div className="flip-card-back">{back}</div>
      </div>

      <style jsx>{`
        .flip-card {
          margin: 1rem auto;
          perspective: 1000px;
          cursor: pointer;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
        }
        .flip-card-front {
          background: white;
          border: 1px solid #e5e7eb;
        }
        .flip-card-back {
          background: #8b5cf6;
          color: white;
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default FlipCard;