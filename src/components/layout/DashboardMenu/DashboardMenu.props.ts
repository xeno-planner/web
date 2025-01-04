import type { DashboardMenuData } from '@/src/components/layout/DashboardMenu/dashboard.menu.data.ts';

export interface DashboardMenuProps {
  variant?: 'default' | 'admin';

  items?: DashboardMenuData;
  bottomItems?: DashboardMenuData;
}
