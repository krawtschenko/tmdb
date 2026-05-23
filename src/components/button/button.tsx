import type { ComponentPropsWithoutRef, ElementType } from 'react';
import type { LucideIcon } from 'lucide-react';
import styles from './button.module.scss';
import clsx from 'clsx';

type Props<T extends ElementType> = {
  as?: T;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
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

  return (
    <Tag
      className={clsx(
        styles.btn,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        className,
      )}
      data-loading={loading || undefined}
      {...rest}
    >
      {IconLeft && <IconLeft size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />}
      {children}
      {IconRight && <IconRight size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />}
    </Tag>
  );
};
