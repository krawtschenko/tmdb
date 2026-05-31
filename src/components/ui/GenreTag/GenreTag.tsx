import styles from './genreTag.module.scss';

type Props = {
  text: string;
};

export const GenreTag = ({ text }: Props) => {
  return (
    <span className={styles.genre}>
      <span className={styles.marker} />
      {text}
    </span>
  );
};
