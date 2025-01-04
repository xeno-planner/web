import DashboardMenuItem from '../DashboardMenuItem';

import type { DashboardMenuData } from './dashboard.menu.data.ts';

export const traverseNavItems = (items: DashboardMenuData) =>
  items.map(({ icon, href, children, reliesOn, ...props }, idx) => {
    return (
      <DashboardMenuItem
        icon={icon}
        href={href}
        key={`[${idx}] ${href.toString()}`}
        reliesOn={reliesOn}
        {...props}
      >
        {children}
      </DashboardMenuItem>
    );
  });
