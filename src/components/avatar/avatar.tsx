import { ComponentPropsWithoutRef } from 'react';

import clsx from 'clsx';

import styles from './avatar.module.scss';

type Props = {
  alt: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
  fallback?: string;
} & Omit<ComponentPropsWithoutRef<'span'>, 'children'>;

export const Avatar = ({ alt, src, size = 'md', fallback, className, ...rest }: Props) => {
  const label = fallback ?? alt.slice(0, 2).toUpperCase();

  return (
    <span
      className={clsx(styles.root, styles[size], className)}
      role="img"
      aria-label={alt}
      {...rest}
    >
      {src ? (
        <img className={styles.img} src={src} alt="" />
      ) : (
        <span className={styles.fallback} aria-hidden>
          {label}
        </span>
      )}
    </span>
  );
};
