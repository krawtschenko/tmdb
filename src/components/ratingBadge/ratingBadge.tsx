import clsx from 'clsx';

import styles from './ratingBadge.module.scss';

type Props = {
  value: number;
  variant: 'inline' | 'pill';
  denom?: string;
  dot?: boolean;
};

export const RatingBadge = ({ value, denom, variant, dot }: Props) => {
  return (
    <span className={clsx(styles.rate, styles[variant])}>
      {dot && <span className={styles.dot} />}
      <span className={styles.num}>{value.toFixed(1)}</span>
      {denom && <span className={styles.denom}>/{denom}</span>}
    </span>
  );
};
