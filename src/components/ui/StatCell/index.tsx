import cn from 'classnames';
import type { ComponentProps } from 'react';

import styles from '@/src/components/ui/Statistics/Statistics.module.scss';
import { slotable } from '@/src/hoc';

const StatCell = slotable<'div', ComponentProps<'div'>>(
  'div',
  ({ Comp, className, children, ...props }) => (
    <Comp
      className={cn(styles.block, className)}
      {...props}
    >
      {children}
    </Comp>
  ),
);

export default StatCell;
