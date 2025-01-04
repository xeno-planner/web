'use client';

import { useQuery } from '@tanstack/react-query';
import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';
import TextOverflow from 'react-text-overflow';

import CircleLoader from '@/src/components/ui/CircleLoader';
import { FeatureService } from '@/src/services/feature.service.ts';

import styles from './DashboardMenuItem.module.scss';
import type { DashboardMenuItemProps } from './DashboardMenuItem.props';

const DashboardMenuItem: VariableFC<
  typeof Link,
  DashboardMenuItemProps,
  'children'
> = ({
  href,
  className,
  children,
  icon: Icon,
  'aria-disabled': ariaDisabled,
  parent,
  isTab,
  reliesOn,
  ...props
}) => {
  const pathname = usePathname();

  const { data: isAvailable, isLoading } = useQuery({
    queryKey: ['request features', 'for', href.toString()],
    queryFn: () => FeatureService.featuresAvailable(reliesOn),
  });

  const isActive = (): boolean => {
    if (href === '/') {
      return href === pathname;
    }

    /** Check if target url is nested inside parent url. */
    if (parent) {
      return pathname?.startsWith(parent.toString());
    }

    return href.toString().startsWith(pathname);
  };

  const tabSize = useCallback(() => (isTab ? '1.1em' : '1.33em'), []);

  if (!isAvailable) {
    return false;
  }

  return (
    <li
      className={cn('w-full list-none', {
        '!w-fit': isTab,
      })}
    >
      <Link
        className={cn(
          styles.menuItem,
          {
            [`${styles.active}`]: isActive(),
            [`${styles.tabLike}`]: isTab,
          },
          className,
        )}
        href={href}
        aria-disabled={ariaDisabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <CircleLoader size={tabSize()} />
            <div className={cn('w-[13ch]')}></div>
          </>
        ) : (
          <>
            {Icon && (
              <Icon
                size={tabSize()}
                className={cn('flex-shrink-0')}
              />
            )}

            <span className={cn(styles.linkText, 'max-w-[13ch]')}>
              <TextOverflow text={children ?? ''} />
            </span>
          </>
        )}
      </Link>
    </li>
  );
};

export default DashboardMenuItem;
