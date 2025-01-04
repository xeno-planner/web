import type { Metadata } from 'next';
import type { FC, PropsWithChildren } from 'react';

import DashboardLayout from '@/src/components/layout/DashboardLayout';
import { PermissionsGuard } from '@/src/components/layout/PermissionsGuard';
import { NO_INDEX_PAGE } from '@/src/constants/seo.constants.ts';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Панель администратора',
    ...NO_INDEX_PAGE,
  };
}

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <DashboardLayout variant={'admin'}>
      <PermissionsGuard features={['canViewDbStatus']} />

      {children}
    </DashboardLayout>
  );
};

export default AdminLayout;
