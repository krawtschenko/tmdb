import { ComponentPropsWithoutRef } from 'react';

import * as Popover from '@radix-ui/react-popover';
import { SlidersHorizontal } from 'lucide-react';

import { Button, IconButton, TagGroup } from '@/components';

import styles from './filter.module.scss';

type ArrayOption = { value: string; label: string };

type Props = {
  count?: number;
  tags: ArrayOption[];
  rating: ArrayOption[];
  runtime: ArrayOption[];
} & ComponentPropsWithoutRef<typeof Popover.Root>;

export const Filter = ({ count, tags, rating, runtime, ...rest }: Props) => (
  <Popover.Root {...rest}>
    <Popover.Trigger asChild>
      {count ? (
        <IconButton
          icon={SlidersHorizontal}
          indicator="count"
          count={count}
          className={styles.trigger}
        />
      ) : (
        <IconButton icon={SlidersHorizontal} className={styles.trigger} />
      )}
    </Popover.Trigger>

    <Popover.Portal>
      <Popover.Content
        className={styles.content}
        align="end"
        side="bottom"
        sideOffset={6}
        avoidCollisions={false}
      >
        <div className={styles.header}>
          <span>Filters</span>
          <button className={styles.clear}>Clear all</button>
        </div>

        <div className={styles.body}>
          <div className={styles.section}>
            <span className={styles.label}>Year</span>
            <TagGroup className={styles.tags} type="multiple" tabs={tags} />
          </div>
          <div className={styles.section}>
            <span className={styles.label}>Rating</span>
            <TagGroup className={styles.tags} type="multiple" tabs={rating} />
          </div>
          <div className={styles.section}>
            <span className={styles.label}>Runtime</span>
            <TagGroup className={styles.tags} type="multiple" tabs={runtime} />
          </div>
        </div>

        <div className={styles.footer}>
          <span className={styles.count}>{count} active filters</span>
          <Button size="sm">Apply</Button>
        </div>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);
