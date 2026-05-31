import { ComponentPropsWithoutRef, useId } from 'react';

import * as SwitchRadix from '@radix-ui/react-switch';
import clsx from 'clsx';

import styles from './switch.module.scss';

type Props = {
  size?: 'md' | 'lg';
  label?: string;
} & ComponentPropsWithoutRef<typeof SwitchRadix.Root>;

export const Switch = ({ size = 'md', label, className, ...rest }: Props) => {
  const id = useId();

  return (
    <div className={clsx(styles.switch, className)}>
      <SwitchRadix.Root id={id} className={clsx(styles.root, styles[size])} {...rest}>
        <SwitchRadix.Thumb className={styles.thumb} />
      </SwitchRadix.Root>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};
