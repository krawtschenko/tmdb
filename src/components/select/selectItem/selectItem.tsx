import { ComponentPropsWithoutRef, forwardRef } from 'react';

import * as SelectRadix from '@radix-ui/react-select';
import { Check } from 'lucide-react';

import styles from './selectItem.module.scss';

type Props = ComponentPropsWithoutRef<typeof SelectRadix.Item>;

export const SelectItem = forwardRef<HTMLDivElement, Props>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <SelectRadix.Item className={styles.Item} {...props} ref={forwardedRef}>
        <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
        <SelectRadix.ItemIndicator className={styles.ItemIndicator}>
          <Check />
        </SelectRadix.ItemIndicator>
      </SelectRadix.Item>
    );
  },
);

SelectItem.displayName = 'SelectItem';
