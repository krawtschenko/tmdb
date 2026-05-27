import { ComponentPropsWithoutRef } from 'react';

import * as SelectRadix from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';

import styles from './select.module.scss';

type Option = { value: string; label: string; disabled?: boolean };

type Props = {
  placeholder?: string;
  options: Option[];
} & Omit<ComponentPropsWithoutRef<typeof SelectRadix.Root>, 'children'>;

export const Select = ({ placeholder = 'Sort by', options, ...rest }: Props) => (
  <SelectRadix.Root {...rest}>
    <SelectRadix.Trigger className={styles.trigger}>
      <SelectRadix.Value placeholder={placeholder} />
      <SelectRadix.Icon className={styles.icon}>
        <ChevronDown size={16} />
      </SelectRadix.Icon>
    </SelectRadix.Trigger>

    <SelectRadix.Portal>
      <SelectRadix.Content
        className={styles.content}
        align="end"
        position="popper"
        side="bottom"
        sideOffset={6}
        avoidCollisions={false}
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <SelectRadix.Viewport className={styles.viewport}>
          <SelectRadix.Group>
            <SelectRadix.Label className={styles.label}>{placeholder}</SelectRadix.Label>
            {options.map(({ value, label, disabled }) => (
              <div key={value}>
                <SelectRadix.Item className={styles.item} value={value} disabled={disabled}>
                  <SelectRadix.ItemText>
                    <span className={styles.itemText}>{label}</span>
                  </SelectRadix.ItemText>

                  <SelectRadix.ItemIndicator className={styles.itemIndicator}>
                    <Check size={14} />
                  </SelectRadix.ItemIndicator>
                </SelectRadix.Item>
              </div>
            ))}
          </SelectRadix.Group>
        </SelectRadix.Viewport>
      </SelectRadix.Content>
    </SelectRadix.Portal>
  </SelectRadix.Root>
);
