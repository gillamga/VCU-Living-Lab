import React, { CSSProperties, ReactNode } from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface CardFooterProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  textAlign?: string;
  variant?: string;
  italic?: boolean;
  noDecoration?: boolean;
  transform?: string;
  breakWord?: boolean;
  truncate?: boolean;
  weight?: string;
  linkedinUrl?: string;
  websiteUrl?: string;
  email?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({
  className,
  style,
  children,
  textAlign,
  variant,
  italic = false,
  noDecoration = false,
  transform,
  breakWord = false,
  truncate = false,
  weight,
  linkedinUrl,
  websiteUrl,
  email,
}) => {
  const text = textAlign ? `text--${textAlign}` : '';
  const textColor = variant ? `text--${variant}` : '';
  const textItalic = italic ? 'text--italic' : '';
  const textDecoration = noDecoration ? 'text-no-decoration' : '';
  const textType = transform ? `text--${transform}` : '';
  const textBreak = breakWord ? 'text--break' : '';
  const textTruncate = truncate ? 'text--truncate' : '';
  const textWeight = weight ? `text--${weight}` : '';

  // Use useBaseUrl to properly resolve static asset URLs
  const linkedinIcon = useBaseUrl('img/CardIcons/linkedin-svgrepo-com.svg');
  const websiteIcon = useBaseUrl('img/CardIcons/website-click-svgrepo-com.svg');
  const emailIcon = useBaseUrl('img/CardIcons/email-1573-svgrepo-com.svg');

  return (
    <div
      className={clsx(
        'card__footer',
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
      {/* Icon container */}
      <div className="card__footer-icons" style={{ display: 'flex', gap: '0.5rem', marginLeft: 'auto' }}>
        {linkedinUrl && (
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              style={{ width: '24px', height: '24px' }}
            />
          </a>
        )}
        {websiteUrl && (
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={websiteIcon}
              alt="Website"
              style={{ width: '24px', height: '24px' }}
            />
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`}>
            <img
              src={emailIcon}
              alt="Email"
              style={{ width: '24px', height: '24px' }}
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default CardFooter;
