import { ComponentPropsWithoutRef } from 'react';

import * as TabsRadix from '@radix-ui/react-tabs';
import clsx from 'clsx';

import styles from './tabs.module.scss';

type Props = {
  items: {
    label: string;
    value: string;
  }[];
} & ComponentPropsWithoutRef<typeof TabsRadix.Root>;

export const Tabs = ({ items, className, ...rest }: Props) => {
  return (
    <TabsRadix.Root className={clsx(styles.root, className)} {...rest}>
      <TabsRadix.List className={styles.list}>
        {items.map(({ label, value }) => (
          <TabsRadix.Trigger
            className={styles.trigger}
            value={value}
            key={value}
            onClick={() => alert(value)}
          >
            {label}
          </TabsRadix.Trigger>
        ))}
      </TabsRadix.List>
    </TabsRadix.Root>
  );
};
