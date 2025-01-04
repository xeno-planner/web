'use client';

import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import { AdminMenu } from '@/app/admin/components';
import { Divider, Spacer } from '@/src/components/ui';

import styles from './DashboardMenu.module.scss';
import type { DashboardMenuProps } from './DashboardMenu.props';
import { traverseNavItems } from './DashboardMenu.utils.tsx';
import { dashboardMenuData } from './dashboard.menu.data.ts';

const DashboardMenu: VariableFC<'nav', DashboardMenuProps, 'children'> = ({
  className,
  items,
  bottomItems,
  variant = 'default',
  ...props
}) => {
  // Setup default items

  switch (variant) {
    case 'default': {
      items = dashboardMenuData;
      break;
    }

    case 'admin': {
      break;
    }
  }

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
        {traverseNavItems(items ?? [])}

        <Spacer />

        {bottomItems && bottomItems.length > 0 && (
          <>
            <Divider />

            {traverseNavItems(bottomItems ?? [])}
          </>
        )}

        <AdminMenu variant={variant} />
      </ul>
    </nav>
  );
};

export default DashboardMenu;
