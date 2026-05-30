import { Dropdown, SearchInput, Tabs } from '@/components';

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
      <div className={styles.brand}>reel</div>
      <Tabs items={TABS} defaultValue="discover" />

      <div className={styles.search}>
        <SearchInput placeholder="Search films, people, collections…" />
      </div>

      <div className={styles.right}>
        <Dropdown name={name} email={email} />
      </div>
    </div>
  );
};
