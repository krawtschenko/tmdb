import { ComponentPropsWithoutRef } from 'react';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import { Bookmark, Clock, Moon, SlidersHorizontal, Star, Sun, X } from 'lucide-react';

import { Avatar } from '@/components';

import styles from './dropdown.module.scss';

type Props = { name?: string; email?: string; theme?: 'light' | 'dark' } & ComponentPropsWithoutRef<
  typeof DropdownMenu.Root
>;

export const Dropdown = ({ name, email, theme = 'dark', ...rest }: Props) => {
  return (
    <DropdownMenu.Root {...rest}>
      <DropdownMenu.Trigger asChild>
        <Avatar />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={6}
          avoidCollisions
          className={styles.content}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <div className={styles.header}>
            <Avatar size="lg" />
            <div>
              <div className={styles.name}>{name}</div>
              <div className={styles.email}>{email}</div>
            </div>
          </div>
          <div className={styles.section}>
            <DropdownMenu.Item className={styles.item}>
              <Bookmark size={16} />
              <span>Your watchlist</span>
            </DropdownMenu.Item>
            <DropdownMenu.Item className={styles.item}>
              <Star size={16} />
              <span>Ratings & reviews</span>
            </DropdownMenu.Item>
            <DropdownMenu.Item className={styles.item}>
              <Clock size={16} />
              <span>Continue watching</span>
            </DropdownMenu.Item>
          </div>
          <div className={styles.section}>
            <DropdownMenu.Item className={styles.item}>
              <SlidersHorizontal size={16} />
              <span>Preferences</span>
            </DropdownMenu.Item>
            <DropdownMenu.Item className={styles.item}>
              {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
              <span>Appearance</span>
              <span className={styles.kbd}>{theme}</span>
            </DropdownMenu.Item>
          </div>
          <div className={styles.section}>
            <DropdownMenu.Item className={clsx(styles.item, styles.last)}>
              <X size={16} />
              <span>Sign out</span>
            </DropdownMenu.Item>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
