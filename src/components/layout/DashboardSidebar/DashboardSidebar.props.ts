import type { ComponentProps } from 'react';

import type DashboardMenu from '@/src/components/layout/DashboardMenu';

export interface DashboardSidebarProps
  extends Pick<ComponentProps<typeof DashboardMenu>, 'variant'> {}
