import type { ServerStatusResponse } from '@xeno-planner/backend-types/extra.ts';
import cn from 'classnames';
import type { FC } from 'react';
import TextOverflow from 'react-text-overflow';

import { Spacer } from '@/src/components/ui';
import HtmlHeading from '@/src/components/ui/Heading';
import StatCell from '@/src/components/ui/StatCell';

import styles from './ServerStatusView.module.scss';

interface ServerStatusViewProps {
  status?: ServerStatusResponse | 'none';
  title?: string;
}

const ServerStatusView: FC<ServerStatusViewProps> = ({
  status = 'none',
  title,
}) => {
  return (
    <StatCell
      className={cn(
        styles.grid,
        '!flex !justify-start !items-center !flex-row',
        '!gap-[--p-level-3]',
      )}
    >
      <div
        aria-hidden
        className={cn(styles.status, styles[status])}
      ></div>

      <header>
        {title && (
          <HtmlHeading as={'h2'}>
            <TextOverflow text={title} />
          </HtmlHeading>
        )}
      </header>

      <Spacer />

      <div>Sus</div>
    </StatCell>
  );
};

export default ServerStatusView;
