import { ComponentPropsWithoutRef } from 'react';

import * as Toggle from '@radix-ui/react-toggle';
import clsx from 'clsx';
import { Bookmark, Check, Plus } from 'lucide-react';

import styles from './watchlistButton.module.scss';

type Props = {
  compact?: boolean;
  onDark?: boolean;
} & Omit<ComponentPropsWithoutRef<typeof Toggle.Root>, 'children'>;

export const WatchlistButton = ({ compact = false, onDark = false, className, ...rest }: Props) => (
  <Toggle.Root
    className={clsx(styles.btn, compact && styles.icon, onDark && styles.onDark, className)}
    aria-label={compact ? 'Save to watchlist' : undefined}
    {...rest}
  >
    {compact ? (
      <Bookmark size={16} />
    ) : (
      <>
        {rest.pressed ? <Check size={14} /> : <Plus size={14} />}
        {rest.pressed ? 'On Watchlist' : 'Watchlist'}
      </>
    )}
  </Toggle.Root>
);
