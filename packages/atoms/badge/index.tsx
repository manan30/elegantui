import * as React from 'react';
import { twMerge as tm } from 'tailwind-merge';

export type BadgeProps = {
  text: string;
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error';
  className?: string;
};

function Badge({ text, variant = 'default', className }: BadgeProps) {
  const badgeVariant = React.useMemo(() => {
    switch (variant) {
      case 'error':
        return 'bg-red-500 text-red-700';
      case 'primary':
      case 'secondary':
        return `bg-${variant} text-${variant} bg-opacity-10`;
      case 'success':
        return 'bg-green-400 text-green-700';
      case 'warning':
        return 'bg-yellow-500 text-yellow-800';
      default:
        return 'bg-slate-500 text-slate-700';
    }
  }, [variant]);

  return (
    <span
      className={tm(
        'text-success-darker grid place-items-center rounded-lg bg-opacity-20 px-2 py-1 font-semibold tracking-[-0.01em]',
        `${badgeVariant} `,
        className
      )}
    >
      {text}
    </span>
  );
}

Badge.displayName = 'Badge';

export default Badge;
