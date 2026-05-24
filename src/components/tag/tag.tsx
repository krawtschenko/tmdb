import { ComponentPropsWithoutRef } from 'react';

import * as Toggle from '@radix-ui/react-toggle';
import clsx from 'clsx';

import styles from './tag.module.scss';

type Props = ComponentPropsWithoutRef<typeof Toggle.Root>;

export const Tag = ({ className, ...rest }: Props) => {
  return <Toggle.Root className={clsx(styles.tag, className)} {...rest} />;
};
