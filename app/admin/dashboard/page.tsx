import type { FC } from 'react';

import DashboardHeader from '@/src/components/layout/DashboardHeader';

const AdminDashboardPage: FC<unknown> = () => {
  return (
    <main>
      <DashboardHeader
        heading='Главная'
        sticky
      />
      Admin
    </main>
  );
};

export default AdminDashboardPage;
