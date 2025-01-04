'use client';

import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { Shield } from 'lucide-react';

import { dashboardMenuData } from '@/src/components/layout/DashboardMenu/dashboard.menu.data.ts';
import DashboardMenuItem from '@/src/components/layout/DashboardMenuItem';
import { Divider, Spacer } from '@/src/components/ui';

import styles from './DashboardMenu.module.scss';
import type { DashboardMenuProps } from './DashboardMenu.props';

const DashboardMenu: VariableFC<'nav', DashboardMenuProps, 'children'> = ({
  className,
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
        {dashboardMenuData.map(({ icon, href, children, ...props }, index) => (
          <DashboardMenuItem
            icon={icon}
            href={href}
            key={`[${index}] ${href.toString()}`}
            {...props}
          >
            {children}
          </DashboardMenuItem>
        ))}

        <Spacer className={cn('bg-red-500/0')} />
        <Divider />

        <DashboardMenuItem
          icon={Shield}
          href={'/admin/dashboard'}
        >
          Admin
        </DashboardMenuItem>
      </ul>
    </nav>
  );
};

export default DashboardMenu;
