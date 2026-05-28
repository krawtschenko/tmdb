import { ComponentPropsWithoutRef, useState } from 'react';

import * as Popover from '@radix-ui/react-popover';
import { SlidersHorizontal } from 'lucide-react';

import { Button, IconButton, TagGroup } from '@/components';

import styles from './filter.module.scss';

type ArrayOption = { value: string; label: string };

export type FilterValue = {
  tags: string[];
  rating: string[];
  runtime: string[];
};

type Props = {
  count?: number;
  tags: ArrayOption[];
  rating: ArrayOption[];
  runtime: ArrayOption[];
  value?: FilterValue;
  onApply?: (value: FilterValue) => void;
} & ComponentPropsWithoutRef<typeof Popover.Root>;

export const Filter = ({ count, tags, rating, runtime, value, onApply, ...rest }: Props) => {
  const emptyValue: FilterValue = { tags: [], rating: [], runtime: [] };

  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState<FilterValue>(value ?? emptyValue);

  function handleOpenChange(nextOpen: boolean) {
    if (nextOpen) setPending(value ?? emptyValue);
    setOpen(nextOpen);
  }

  function applyHandler() {
    onApply?.(pending);
    setOpen(false);
  }

  function clearHandler() {
    setPending(emptyValue);
  }

  return (
    <Popover.Root {...rest} open={open} onOpenChange={handleOpenChange}>
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
        <Popover.Content align="end" side="bottom" sideOffset={6} avoidCollisions={false}>
          <div className={styles.content}>
            <div className={styles.header}>
              <span>Filters</span>
              <button className={styles.clear} onClick={clearHandler}>
                Clear all
              </button>
            </div>
            <div className={styles.body}>
              <div className={styles.section}>
                <span className={styles.label}>Year</span>
                <TagGroup
                  className={styles.tags}
                  type="multiple"
                  tabs={tags}
                  value={pending.tags}
                  onValueChange={(v) => setPending((p) => ({ ...p, tags: v }))}
                />
              </div>
              <div className={styles.section}>
                <span className={styles.label}>Rating</span>
                <TagGroup
                  className={styles.tags}
                  type="multiple"
                  tabs={rating}
                  value={pending.rating}
                  onValueChange={(v) => setPending((p) => ({ ...p, rating: v }))}
                />
              </div>
              <div className={styles.section}>
                <span className={styles.label}>Runtime</span>
                <TagGroup
                  className={styles.tags}
                  type="multiple"
                  tabs={runtime}
                  value={pending.runtime}
                  onValueChange={(v) => setPending((p) => ({ ...p, runtime: v }))}
                />
              </div>
            </div>
            <div className={styles.footer}>
              <span className={styles.count}>
                {pending.tags.length + pending.rating.length + pending.runtime.length} active
                filters
              </span>
              <Button size="sm" onClick={applyHandler}>
                Apply
              </Button>
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
