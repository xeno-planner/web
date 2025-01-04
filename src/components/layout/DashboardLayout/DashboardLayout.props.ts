import type { ComponentProps } from 'react';

import type DashboardMenu from '@/src/components/layout/DashboardMenu';

export interface DashboardLayoutProps
  extends Pick<ComponentProps<typeof DashboardMenu>, 'variant'> {}
