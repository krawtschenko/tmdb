import { ComponentPropsWithoutRef } from 'react';

import clsx from 'clsx';
import { LucideIcon } from 'lucide-react';

import styles from './iconButton.module.scss';

type Props = {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'ghost';
  shape?: 'square' | 'circle';
  count?: number;
  dot?: boolean;
} & ComponentPropsWithoutRef<'button'>;

export const IconButton = ({
  icon: Icon,
  size = 'md',
  variant = 'solid',
  shape = 'square',
  count,
  dot,
  className,
  ...rest
}: Props) => {
  const rootStyles = clsx(
    styles.btn,
    styles[size],
    styles[variant],
    styles[shape],
    count != null && count > 0 ? (dot ? styles.dot : styles.count) : '',
    className,
  );

  return (
    <button className={rootStyles} data-count={count} {...rest}>
      <Icon size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} />
    </button>
  );
};
