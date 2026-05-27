import type { ComponentPropsWithoutRef, ElementType } from 'react';

import clsx from 'clsx';
import type { LucideIcon } from 'lucide-react';

import styles from './button.module.scss';

type Props<T extends ElementType> = {
  as?: T;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  loading?: boolean;
  fullWidth?: boolean;
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = 'button'>({
  as,
  children,
  className,
  variant = 'primary',
  size = 'md',
  iconLeft: IconLeft,
  iconRight: IconRight,
  loading,
  fullWidth,
  ...rest
}: Props<T>) => {
  const Tag = as ?? 'button';

  const rootStyles = clsx(
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    className,
  );

  return (
    <Tag className={rootStyles} data-loading={loading || undefined} {...rest}>
      {IconLeft && <IconLeft size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />}
      {children}
      {IconRight && <IconRight size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />}
    </Tag>
  );
};
