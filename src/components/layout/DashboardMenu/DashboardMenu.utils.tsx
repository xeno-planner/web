import DashboardMenuItem from '../DashboardMenuItem';

import type { DashboardMenuData } from './dashboard.menu.data.ts';

export const traverseNavItems = (items: DashboardMenuData) =>
  items.map(({ icon, href, children, ...props }, idx) => (
    <DashboardMenuItem
      icon={icon}
      href={href}
      key={`[${idx}] ${href.toString()}`}
      {...props}
    >
      {children}
    </DashboardMenuItem>
  ));
