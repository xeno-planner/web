import cn from 'classnames';
import { type FC, PropsWithChildren } from 'react';

import DashboardSidebar from '@/src/components/layout/DashboardSidebar';

import styles from './DashboardLayout.module.scss';
import type { DashboardLayoutProps } from './DashboardLayout.props';

const DashboardLayout: FC<PropsWithChildren<DashboardLayoutProps>> = ({
  children,
  variant = 'default',
}) => {
  return (
    <div className={cn(styles.wrapper)}>
      <DashboardSidebar variant={variant} />

      {children}
    </div>
  );
};

export default DashboardLayout;
