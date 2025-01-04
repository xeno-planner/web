import type { FC, PropsWithChildren } from 'react';

import DashboardLayout from '@/src/components/layout/DashboardLayout';

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  return <DashboardLayout variant={'admin'}>{children}</DashboardLayout>;
};

export default AdminLayout;
