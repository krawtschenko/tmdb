import { ComponentPropsWithoutRef } from 'react';

import clsx from 'clsx';
import { LucideIcon } from 'lucide-react';

import styles from './iconButton.module.scss';

type Props = {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'ghost';
  shape?: 'square' | 'circle';
} & ComponentPropsWithoutRef<'button'>;

export const IconButton = ({
  icon: Icon,
  variant = 'solid',
  shape = 'square',
  size = 'md',
  ...rest
}: Props) => {
  return (
    <button className={clsx(styles.btn, styles[variant], styles[shape], styles[size])} {...rest}>
      <Icon size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} />
    </button>
  );
};
