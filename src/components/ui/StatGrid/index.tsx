import cn from 'classnames';
import type { ComponentProps } from 'react';

import styles from '@/src/components/ui/Statistics/Statistics.module.scss';
import { slotable } from '@/src/hoc';

const StatGrid = slotable<'article', ComponentProps<'article'>>(
  'article',
  ({ Comp, className, ...props }) => (
    <Comp
      className={cn(styles.grid, className)}
      {...props}
    />
  ),
);

export default StatGrid;
