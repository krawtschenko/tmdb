import { Bell } from 'lucide-react';
import Image from 'next/image';

import logo from '@/assets/icons/logo.png';
import { IconButton, SearchInput, Tabs } from '@/components';

import { Dropdown } from '../dropdown';
import styles from './header.module.scss';

type Props = {
  active?: string;
  name?: string;
  email?: string;
};

export const Header = ({ name, email }: Props) => {
  const TABS = [
    { label: 'Discover', value: 'discover' },
    { label: 'Films', value: 'films' },
    { label: 'People', value: 'people' },
    { label: 'Watchlist', value: 'watchlist' },
  ];

  return (
    <div className={styles.header}>
      <div className={styles.brand}>
        <Image src={logo} alt="logo" width={30} />
        reel
      </div>
      <Tabs items={TABS} defaultValue="discover" />

      <div className={styles.search}>
        <SearchInput placeholder="Search for a movie, tv show, person…" />
      </div>

      <div className={styles.right}>
        <IconButton icon={Bell} variant="ghost" dot />
        <Dropdown name={name} email={email} />
      </div>
    </div>
  );
};
