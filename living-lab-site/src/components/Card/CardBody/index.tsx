import React, { CSSProperties, ReactNode } from 'react';
import clsx from 'clsx';

interface CardBodyProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  textAlign?: string;
  variant?: string;
  italic?: boolean;
  noDecoration?: boolean;
  transform?: string;
  breakWord?: boolean;
  truncate?: boolean;
  weight?: string;
}

const CardBody: React.FC<CardBodyProps> = ({
  className = '',
  style = {},
  children,
  textAlign = 'left',
  variant = '',
  italic = false,
  noDecoration = false,
  transform = '',
  breakWord = false,
  truncate = false,
  weight = '',
}) => {
  const text = textAlign ? `text--${textAlign}` : '';
  const textColor = variant ? `text--${variant}` : '';
  const textItalic = italic ? 'text--italic' : '';
  const textDecoration = noDecoration ? 'text-no-decoration' : '';
  const textType = transform ? `text--${transform}` : '';
  const textBreak = breakWord ? 'text--break' : '';
  const textTruncate = truncate ? 'text--truncate' : '';
  const textWeight = weight ? `text--${weight}` : '';

  return (
    <div
      className={clsx(
        'card__body',
        'padding-horiz--md',
        'padding-bottom--md',
        className,
        text,
        textType,
        textColor,
        textItalic,
        textDecoration,
        textBreak,
        textTruncate,
        textWeight
      )}
      style={style}
    >
      {children}
    </div>
  );
};

CardBody.defaultProps = {
  className: '',
  style: {},
  textAlign: 'left',
  variant: '',
  italic: false,
  noDecoration: false,
  transform: '',
  breakWord: false,
  truncate: false,
  weight: '',
};

export default CardBody;
