import type { LucideIcon } from 'lucide-react';
import type Link from 'next/link';
import type { ComponentProps } from 'react';

import type { AppFeature } from '@/src/services/feature.service.ts';

export interface DashboardMenuItemProps {
  icon?: LucideIcon;

  /** Indicates parent url in group. */
  parent?: ComponentProps<typeof Link>['href'];

  /**
   * If true, component will be styled
   * as tab control entry.
   */
  isTab?: boolean;

  children?: string;

  // List of features that should be available for item to render
  reliesOn?: AppFeature[];
}
