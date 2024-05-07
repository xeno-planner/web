import cn from 'classnames';
import { type FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer.tsx';
import { isDragging } from '@/src/utils/react/data-attributes';

import BlocksList from '../BlocksList';
import NewBlockForm from '../NewBlockForm';
import TimeBlockEntry from '../TimeBlockEntry';

import styles from './TimeBlocking.module.scss';
import type { TimeBlockingProps } from './TimeBlocking.props';

const TimeBlocking: FC<TimeBlockingProps> = () => {
  return (
    <UiContainer
      margin={'0px'}
      maxWidth={'1362px'}
      as={'section'}
      className={cn(styles.timeBlocking)}
      {...isDragging(true)}
    >
      <BlocksList>
        <>
          {Array(20).fill(
            <TimeBlockEntry
              block={{
                id: 'amogus',
                duration: 36,
                color: 'coral',
                createdAt: new Date(),
                updatedAt: new Date(),
                name: 'Block name',
                order: 0,
              }}
            />,
          )}
        </>
      </BlocksList>

      <NewBlockForm />
    </UiContainer>
  );
};

export default TimeBlocking;