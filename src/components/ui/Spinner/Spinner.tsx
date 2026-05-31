import clsx from 'clsx';

import styles from './spinner.module.scss';

type Props = {
  size?: 'sm' | 'md' | 'lg';
};

export const Spinner = ({ size = 'md' }: Props) => {
  return <span className={clsx(styles.spin, styles[size])}></span>;
};
