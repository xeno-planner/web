import cn from 'classnames';
import type { FC } from 'react';

import { DbStatusView } from '@/app/admin/components';
import DashboardHeader from '@/src/components/layout/DashboardHeader';
import StatGrid from '@/src/components/ui/StatGrid';

const AdminDashboardPage: FC<unknown> = () => {
  return (
    <main>
      <DashboardHeader
        heading='Состоние сервера'
        sticky
      />

      <section className={cn('p-[--p-level-2]')}>
        <StatGrid className={cn('!p-0')}>
          <DbStatusView />
        </StatGrid>
      </section>
    </main>
  );
};

export default AdminDashboardPage;
