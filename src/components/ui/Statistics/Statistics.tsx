'use client';

import cn from 'classnames';
import { type FC } from 'react';

import CircleLoader from '@/src/components/ui/CircleLoader';
import StatCell from '@/src/components/ui/StatCell';
import StatGrid from '@/src/components/ui/StatGrid';
import WarningMessage from '@/src/components/ui/WarningMessage';
import { useProfile } from '@/src/hooks/useProfile.ts';

import type { StatisticsProps } from './Statistics.props';

const Statistics: FC<StatisticsProps> = () => {
  const { data, isLoading } = useProfile();

  return (
    <StatGrid>
      {isLoading ? (
        <div className={cn('col-span-full')}>
          <CircleLoader />
        </div>
      ) : data?.statistics.length ? (
        data.statistics.map(({ label, value }, index) => (
          <StatCell
            key={`[${index}]: ${label}`}
            className={cn('whitespace-break-spaces')}
          >
            <strong>{value}</strong>

            <span>{label}</span>
          </StatCell>
        ))
      ) : (
        <div className={cn('flex-center col-span-full')}>
          <WarningMessage>Статистика не найдена!</WarningMessage>
        </div>
      )}
    </StatGrid>
  );
};

export default Statistics;
