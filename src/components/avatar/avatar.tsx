import { ComponentPropsWithoutRef } from 'react';

import * as AvatarRadix from '@radix-ui/react-avatar';
import clsx from 'clsx';
import { UserRound } from 'lucide-react';

import styles from './avatar.module.scss';

type Props = { avatarSrc?: string; size?: 'sm' | 'lg' } & ComponentPropsWithoutRef<
  typeof AvatarRadix.Root
>;

export const Avatar = ({ className, avatarSrc, size = 'sm', ...rest }: Props) => {
  return (
    <AvatarRadix.Root className={clsx(styles.avatar, styles[size], className)} {...rest}>
      <AvatarRadix.Image className={styles.img} src={avatarSrc} alt="avatar" />
      <AvatarRadix.Fallback className={styles.fallback}>
        <UserRound size={size === 'lg' ? 22 : 18} />
      </AvatarRadix.Fallback>
    </AvatarRadix.Root>
  );
};