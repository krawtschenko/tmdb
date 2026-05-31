import { ComponentPropsWithoutRef } from 'react';

import clsx from 'clsx';

import styles from './container.module.scss';

type Props = ComponentPropsWithoutRef<'div'>;

export const Container = ({ className, children, ...rest }: Props) => {
  return (
    <div className={clsx(styles.container, className)} {...rest}>
      {children}
    </div>
  );
};
