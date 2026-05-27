import { ComponentPropsWithoutRef } from 'react';

import clsx from 'clsx';
import { LucideIcon } from 'lucide-react';

import styles from './iconButton.module.scss';

type Props = {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'ghost';
  shape?: 'square' | 'circle';
  dot?: boolean;
} & ComponentPropsWithoutRef<'button'>;

export const IconButton = ({
  icon: Icon,
  size = 'md',
  variant = 'solid',
  shape = 'square',
  dot,
  ...rest
}: Props) => {
  return (
    <button
      className={clsx(styles.btn, styles[variant], styles[shape], styles[size])}
      data-dot={dot}
      {...rest}
    >
      <Icon size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} />
    </button>
  );
};
