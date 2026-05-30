import { ComponentPropsWithoutRef } from 'react';

import clsx from 'clsx';
import { Search } from 'lucide-react';

import { useSearchShortcut } from '@/hooks';

import style from './searchInput.module.scss';

type Props = {
  kbd?: string;
} & ComponentPropsWithoutRef<'input'>;

const isMac = typeof navigator !== 'undefined' && /Mac/i.test(navigator.userAgent);

export const SearchInput = ({
  className,
  placeholder,
  kbd = isMac ? '⌘K' : '⌃K',
  ...rest
}: Props) => {
  const ref = useSearchShortcut<HTMLInputElement>();

  return (
    <div className={clsx(style.field, className)}>
      <Search className={style.icon} size={18} />
      <input ref={ref} className={style.input} placeholder={placeholder} {...rest} />
      {kbd && <span className={style.kbd}>{kbd}</span>}
    </div>
  );
};
