import cn from 'classnames';
import type { FC } from 'react';

import { DbStatusView } from '@/app/admin/components';
import DashboardHeader from '@/src/components/layout/DashboardHeader';
import { Stack } from '@/src/components/ui';
import StatGrid from '@/src/components/ui/StatGrid';

const AdminDashboardPage: FC<unknown> = () => {
  return (
    <main>
      <DashboardHeader
        heading='Состоние сервера'
        sticky
      />

      <section className={cn('p-[--p-level-2]')}>
        <Stack
          maxWidth={'800px'}
          alignStack={'left'}
          insets={'0px'}
        >
          <StatGrid
            className={cn('!p-0')}
            columnWidth={'400px'}
          >
            <DbStatusView />
          </StatGrid>
        </Stack>
      </section>
    </main>
  );
};

export default AdminDashboardPage;
