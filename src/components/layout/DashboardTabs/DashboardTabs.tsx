import cn from 'classnames';
import type { FC, PropsWithChildren } from 'react';

import SettingGroup from '@/src/components/layout/SettingGroup';

import styles from './DashboardTabs.module.scss';
import type { DashboardTabsProps } from './DashboardTabs.props';

const DashboardTabs: FC<PropsWithChildren<DashboardTabsProps>> = ({
  children,
}) => {
  return (
    <SettingGroup
      forceBorder
      className={cn(styles.tabs)}
    >
      {children}
    </SettingGroup>
  );
};

export default DashboardTabs;
