import { ComponentPropsWithoutRef, useState } from 'react';

import * as Popover from '@radix-ui/react-popover';
import { SlidersHorizontal } from 'lucide-react';

import { Button, IconButton, TagGroup } from '@/components';

import styles from './filter.module.scss';

type Option = { value: string; label: string; checked: boolean };

export type Options = Record<string, Option[]>;

type Props = {
  options: Options;
  onApply: (options: Options) => void;
} & ComponentPropsWithoutRef<typeof Popover.Root>;

export const Filter = ({ options, onApply, ...rest }: Props) => {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState<Options>(options);

  const count = Object.values(options)
    .flat()
    .filter((o) => o.checked).length;

  function handleOpenChange(next: boolean) {
    if (next) setPending(options);
    setOpen(next);
  }

  function updatePending(key: keyof Options, values: string[]) {
    setPending((prev) => ({
      ...prev,
      [key]: prev[key].map((o) => ({ ...o, checked: values.includes(o.value) })),
    }));
  }

  function clearHandler() {
    setPending((prev) => {
      const next: Options = {};

      for (const key in prev) {
        next[key] = prev[key].map((o) => ({ ...o, checked: false }));
      }

      return next;
    });
  }

  function applyHandler() {
    onApply(pending);
    setOpen(false);
  }

  return (
    <Popover.Root {...rest} open={open} onOpenChange={handleOpenChange}>
      <Popover.Trigger asChild>
        <IconButton icon={SlidersHorizontal} count={count} className={styles.trigger} />
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
            <button className={styles.clear} onClick={clearHandler}>
              Clear all
            </button>
          </div>

          <div className={styles.body}>
            {Object.entries(pending).map(([key, opts]) => (
              <div key={key} className={styles.section}>
                <span className={styles.label}>{key}</span>
                <TagGroup
                  className={styles.tags}
                  type="multiple"
                  tabs={opts}
                  value={opts.filter((o) => o.checked).map((o) => o.value)}
                  onValueChange={(v) => updatePending(key, v)}
                />
              </div>
            ))}
          </div>

          <div className={styles.footer}>
            <span className={styles.count}>{count} active filters</span>
            <Button size="sm" onClick={applyHandler}>
              Apply
            </Button>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
