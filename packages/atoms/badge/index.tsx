import * as React from 'react';
import { twMerge as tm } from 'tailwind-merge';

import type { CSSProperties } from 'react';

export type BadgeProps = {
  text: string;
  appearance?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: CSSProperties;
};

function Badge({
  text,
  appearance = 'default',
  size = 'sm',
  className,
  style
}: BadgeProps) {
  const badgeAppearance = React.useMemo(() => {
    switch (appearance) {
      case 'error':
        return 'bg-red-500 text-red-700';
      case 'primary':
      case 'secondary':
        return `bg-${appearance} text-${appearance} bg-opacity-10`;
      case 'success':
        return 'bg-green-400 text-green-700';
      case 'warning':
        return 'bg-yellow-500 text-yellow-800';
      default:
        return 'bg-slate-500 text-slate-700';
    }
  }, [appearance]);

  const badgeSize = React.useMemo(() => {
    switch (size) {
      case 'sm':
        return 'text-sm';
      case 'md':
        return 'text-base';
      case 'lg':
        return 'text-lg';
    }
  }, [size]);

  return (
    <span
      className={tm(
        'text-success-darker grid place-items-center rounded-lg bg-opacity-20 px-2 py-1 font-semibold tracking-[-0.01em]',
        `${badgeAppearance} `,
        `${badgeSize} `,
        className
      )}
      style={style}
    >
      {text}
    </span>
  );
}

Badge.displayName = 'Badge';

export default Badge;
