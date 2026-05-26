import clsx from 'clsx';

import styles from './component.module.scss';

type Props = {
  className?: string;
};

export const Component = ({ className }: Props) => {
  return <div className={clsx(styles.root, className)} />;
};
