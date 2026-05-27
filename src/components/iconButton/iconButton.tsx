import { ComponentPropsWithoutRef } from 'react';

import clsx from 'clsx';
import { LucideIcon } from 'lucide-react';

import styles from './iconButton.module.scss';

type IndicatorProps = { indicator?: 'dot'; count?: never } | { indicator: 'count'; count: number };

type Props = {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'ghost';
  shape?: 'square' | 'circle';
} & IndicatorProps &
  ComponentPropsWithoutRef<'button'>;

export const IconButton = ({
  icon: Icon,
  size = 'md',
  variant = 'solid',
  shape = 'square',
  indicator,
  count,
  ...rest
}: Props) => {
  const rootStyles = clsx(
    styles.btn,
    styles[size],
    styles[variant],
    styles[shape],
    indicator === 'dot' && styles.dot,
    indicator === 'count' && styles.count,
  );

  return (
    <button className={rootStyles} data-count={count} {...rest}>
      <Icon size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} />
    </button>
  );
};
