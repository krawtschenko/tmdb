import { ComponentPropsWithoutRef } from 'react';

import clsx from 'clsx';
import { LucideIcon } from 'lucide-react';

import styles from './iconButton.module.scss';

type Props = {
  icon: LucideIcon;
  variant?: 'solid' | 'circle' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
} & ComponentPropsWithoutRef<'button'>;

export const IconButton = ({ icon: Icon, variant = 'solid', size = 'md', ...rest }: Props) => {
  return (
    <button className={clsx(styles.btn, styles[variant], styles[size])} {...rest}>
      <Icon size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} />
    </button>
  );
};
