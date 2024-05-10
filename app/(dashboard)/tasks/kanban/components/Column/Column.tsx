import cn from 'classnames';
import { type FC } from 'react';

import AddTask from '@/app/(dashboard)/tasks/list-view/AddTask.tsx';

import styles from './Column.module.scss';
import type { ColumnProps } from './Column.props';

const Column: FC<ColumnProps> = ({ groupName, destId }) => {
  return (
    <article className={cn(styles.column)}>
      <h2 className={cn(styles.groupName)}>{groupName}</h2>

      <section className={cn(styles.droppable)}></section>

      <AddTask
        destId={destId}
        isKanban
      />
    </article>
  );
};

export default Column;
