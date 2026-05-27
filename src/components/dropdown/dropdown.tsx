import clsx from 'clsx';

import styles from './dropdown.module.scss';

type Props = {
  className?: string;
};

export const Dropdown = ({ className }: Props) => {
  return <div className={clsx(styles.root, className)} />;
};
