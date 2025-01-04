import type { Metadata } from 'next';
import type { FC, PropsWithChildren } from 'react';

import DashboardLayout from '@/src/components/layout/DashboardLayout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Панель администратора',
  };
}

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  return <DashboardLayout variant={'admin'}>{children}</DashboardLayout>;
};

export default AdminLayout;
