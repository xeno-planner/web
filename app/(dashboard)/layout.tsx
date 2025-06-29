import { type Metadata } from 'next';
import type { FC, PropsWithChildren } from 'react';

import DashboardLayout from '@/src/components/layout/DashboardLayout';
import { NO_INDEX_PAGE } from '@/src/constants/seo.constants.ts';

export const metadata: Metadata = {
  ...NO_INDEX_PAGE,
};

const DashboardPageLayout: FC<PropsWithChildren> = ({ children }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default DashboardPageLayout;
