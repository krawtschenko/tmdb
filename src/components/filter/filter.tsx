import { ComponentPropsWithoutRef } from 'react';

import * as Popover from '@radix-ui/react-popover';
import { Filter as FilterIcon, GemIcon } from 'lucide-react';

import styles from './filter.module.scss';

type Props = {} & ComponentPropsWithoutRef<typeof Popover.Root>;

export const Filter = ({ ...rest }: Props) => (
  <Popover.Root {...rest}>
    <Popover.Trigger asChild>
      <button className={styles.IconButton} aria-label="Update dimensions">
        <FilterIcon />
      </button>
    </Popover.Trigger>

    <Popover.Portal>
      <Popover.Content className={styles.Content} sideOffset={5}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <p className={styles.Text} style={{ marginBottom: 10 }}>
            Dimensions
          </p>
          <fieldset className={styles.Fieldset}>
            <label className={styles.Label} htmlFor="width">
              Width
            </label>
            <input className={styles.Input} id="width" defaultValue="100%" />
          </fieldset>
          <fieldset className={styles.Fieldset}>
            <label className={styles.Label} htmlFor="maxWidth">
              Max. width
            </label>
            <input className={styles.Input} id="maxWidth" defaultValue="300px" />
          </fieldset>
          <fieldset className={styles.Fieldset}>
            <label className={styles.Label} htmlFor="height">
              Height
            </label>
            <input className={styles.Input} id="height" defaultValue="25px" />
          </fieldset>
          <fieldset className={styles.Fieldset}>
            <label className={styles.Label} htmlFor="maxHeight">
              Max. height
            </label>
            <input className={styles.Input} id="maxHeight" defaultValue="none" />
          </fieldset>
        </div>
        <Popover.Close className={styles.Close} aria-label="Close">
          <GemIcon />
        </Popover.Close>
        <Popover.Arrow className={styles.Arrow} />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);
