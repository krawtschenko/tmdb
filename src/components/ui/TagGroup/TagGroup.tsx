import { ComponentPropsWithoutRef } from 'react';

import * as ToggleGroup from '@radix-ui/react-toggle-group';
import clsx from 'clsx';

import styles from './tagGroup.module.scss';

type Props = {
  tabs: Tab[];
} & ComponentPropsWithoutRef<typeof ToggleGroup.Root>;

type Tab = { value: string; label: string; disabled?: boolean };

export const TagGroup = ({ tabs, className, ...rest }: Props) => (
  <ToggleGroup.Root className={clsx(styles.group, className)} {...rest}>
    {tabs.map(({ value, label, disabled }) => (
      <ToggleGroup.Item key={value} value={value} className={styles.item} disabled={disabled}>
        {label}
      </ToggleGroup.Item>
    ))}
  </ToggleGroup.Root>
);
