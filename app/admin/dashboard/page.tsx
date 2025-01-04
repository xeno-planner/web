import cn from 'classnames';
import type { FC } from 'react';

import DashboardHeader from '@/src/components/layout/DashboardHeader';

const AdminDashboardPage: FC<unknown> = () => {
  return (
    <main>
      <DashboardHeader
        heading='Состоние сервера'
        sticky
      />

      <section className={cn('p-[--p-level-2]')}>Admin</section>
    </main>
  );
};

export default AdminDashboardPage;
