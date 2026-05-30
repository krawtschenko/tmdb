import { ComponentPropsWithoutRef, useState } from 'react';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import { Bookmark, Clock, Moon, SlidersHorizontal, Star, Sun, X } from 'lucide-react';

import { Avatar } from '@/components/avatar';

import styles from './dropdown.module.scss';

type Props = { theme?: 'light' | 'dark' } & ComponentPropsWithoutRef<typeof DropdownMenu.Root>;

export const Dropdown = ({ theme = 'dark', ...rest }: Props) => {
  return (
    <DropdownMenu.Root {...rest}>
      <DropdownMenu.Trigger asChild>
        <Avatar />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={6} avoidCollisions>
          <div className={styles.content}>
            <div className={styles.header}>
              <Avatar size="lg" />
              <div>
                <div className={styles.name}>Yevhenii Kravchenko</div>
                <div className={styles.email}>eugenykravchenko@icloud.com</div>
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
                <span>Your watchlist</span>
              </DropdownMenu.Item>
            </div>
            <div className={styles.section}>
              <DropdownMenu.Item className={styles.item}>
                <SlidersHorizontal size={16} />
                <span>Continue watching</span>
              </DropdownMenu.Item>
              <DropdownMenu.Item className={styles.item}>
                {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
                <span>Your watchlist</span>
                <span className={styles.kbd}>{theme}</span>
              </DropdownMenu.Item>
            </div>
            <div className={styles.section}>
              <DropdownMenu.Item className={clsx(styles.item, styles.last)}>
                <X size={16} />
                <span>Sign out</span>
              </DropdownMenu.Item>
            </div>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
