import { ComponentPropsWithoutRef } from 'react';

import * as SelectRadix from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';

import styles from './select.module.scss';
import { SelectItem } from './selectItem/selectItem';

type Option = { value: string; label: string; disabled?: boolean };

type Props = {
  placeholder?: string;
  options: Option[];
} & Omit<ComponentPropsWithoutRef<typeof SelectRadix.Root>, 'children'>;

export const Select = ({ placeholder, options, ...rest }: Props) => (
  <SelectRadix.Root {...rest}>
    <SelectRadix.Trigger className={styles.trigger}>
      <SelectRadix.Value placeholder={placeholder} />
      <SelectRadix.Icon className={styles.icon}>
        <ChevronDown size={16} />
      </SelectRadix.Icon>
    </SelectRadix.Trigger>

    <SelectRadix.Portal>
      <SelectRadix.Content className={styles.content}>
        <SelectRadix.Viewport className={styles.viewport}>
          {options.map(({ value, label, disabled }) => (
            <SelectItem disabled={disabled} key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectRadix.Viewport>
      </SelectRadix.Content>
    </SelectRadix.Portal>
  </SelectRadix.Root>
);
