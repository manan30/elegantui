import * as React from 'react';
import { twMerge as tm } from 'tailwind-merge';
import type { ReactNode, CSSProperties } from 'react';

export type CardProps = {
  children: ReactNode;
  rounded?: boolean;
  variant?: 'raised' | 'flat' | 'bordered';
  className?: string;
  style?: CSSProperties;
};

function Card({
  children,
  rounded = true,
  variant = 'raised',
  className: classes,
  style
}: CardProps) {
  const cardVariant = React.useMemo(() => {
    switch (variant) {
      case 'raised':
        return 'shadow-md';
      case 'flat':
        return 'shadow-none';
      case 'bordered':
        return 'shadow-none border border-current';
    }
  }, [variant]);

  return (
    <div
      className={tm(
        'bg-default px-6 py-4',
        rounded && 'rounded-lg',
        cardVariant,
        classes
      )}
      style={style}
    >
      {children}
    </div>
  );
}

Card.displayName = 'Card';

export default Card;
