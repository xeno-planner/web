'use client';

import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import { Divider, Spacer } from '@/src/components/ui';

import styles from './DashboardMenu.module.scss';
import type { DashboardMenuProps } from './DashboardMenu.props';
import { traverseNavItems } from './DashboardMenu.utils.tsx';
import {
  dashboardBottomMenuData,
  dashboardMenuData,
} from './dashboard.menu.data.ts';

const DashboardMenu: VariableFC<'nav', DashboardMenuProps, 'children'> = ({
  className,
  items = dashboardMenuData,
  bottomItems = dashboardBottomMenuData,
  ...props
}) => {
  return (
    <nav
      className={cn(
        'flex-grow flex overflow-y-auto select-none',
        styles.menu,
        className,
      )}
      {...props}
    >
      <ul className={cn('flex-grow flex flex-col')}>
        {traverseNavItems(items)}

        <Spacer className={cn('bg-red-500/0')} />
        <Divider />

        {traverseNavItems(bottomItems)}
      </ul>
    </nav>
  );
};

export default DashboardMenu;
