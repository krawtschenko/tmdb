import clsx from 'clsx';

import styles from './ratingBadge.module.scss';

type Props = {
  variant: 'inline' | 'pill';
  value: number;
  denom?: string;
  indicator?: 'ring' | 'dot';
};

export const RatingBadge = ({ variant, value, denom, indicator }: Props) => {
  const r = 7,
    circ = 2 * Math.PI * r;
  const frac = Math.max(0, Math.min(1, value / 10));

  const circle = (
    <svg className={styles.ring} width="16" height="16" viewBox="0 0 18 18">
      <circle className={styles.track} cx="9" cy="9" r={r} fill="none" strokeWidth="2.2" />
      <circle
        className={styles.fill}
        cx="9"
        cy="9"
        r={r}
        fill="none"
        strokeWidth="2.2"
        strokeDasharray={circ}
        strokeDashoffset={circ * (1 - frac)}
      />
    </svg>
  );

  return (
    <div className={clsx(styles.rate, styles[variant])}>
      {indicator === 'ring' && circle}
      {indicator === 'dot' && <span className={styles.dot} />}
      <span className={styles.num}>{value.toFixed(1)}</span>
      {denom && <span className={styles.denom}>/{denom}</span>}
    </div>
  );
};
