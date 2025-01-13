import React, { CSSProperties, ReactNode, useEffect, useRef } from 'react'; // Import types for props
import clsx from 'clsx'; // clsx helps manage conditional className names in a clean and concise manner.
// Define an interface for the component props
interface CardProps {
  className?: string; // Custom classes for the container card
  style?: CSSProperties; // Custom styles for the container card
  children: ReactNode; // Content to be included within the card
  shadow?: 'lw' | 'md' | 'tl'; // Used to add shadow under your card Shadow levels: low (lw), medium (md), top-level (tl)
}
// Build the card component with the specified props
const Card: React.FC<CardProps> = ({
  className = '',
  style = {},
  children,
  shadow = 'md',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const adjustCardHeights = () => {
    const cards = document.querySelectorAll('.card');
    const images = document.querySelectorAll('.card img');
    let maxHeight = 0;

    const recalculateHeights = () => {
      cards.forEach((card) => {
        (card as HTMLElement).style.height = 'auto';
      });
  
      cards.forEach((card) => {
        const cardHeight = (card as HTMLElement).offsetHeight;
        if (cardHeight > maxHeight) {
          maxHeight = cardHeight;
        }
      });
      cards.forEach((card) => {
        (card as HTMLElement).style.height = `${maxHeight}px`;
      });
    };
  
    const promises = Array.from(images).map(
      (img) =>
        new Promise<void>((resolve) => {
          if ((img as HTMLImageElement).complete) {
            resolve();
          } else {
            (img as HTMLImageElement).addEventListener('load', () => resolve());
            (img as HTMLImageElement).addEventListener('error', () => resolve());
          }
        })
    );
  
    Promise.all(promises).then(recalculateHeights);
  };
  
  useEffect(() => {
    adjustCardHeights();
    window.addEventListener('resize', adjustCardHeights);
  
    return () => {
      window.removeEventListener('resize', adjustCardHeights);
    };
  }, []);


  const cardShadow = shadow ? `item shadow--${shadow}` : '';
  return (
    <div className={clsx('card', className, cardShadow)} style={style}>
      {children}
    </div>
  );
};

// Add defaultProps for TypeScript
Card.defaultProps = {
  className: '',
  style: {},
  shadow: 'md',
};

export default Card;
