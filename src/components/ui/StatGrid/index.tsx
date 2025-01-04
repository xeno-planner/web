import cn from 'classnames';
import type { CSSProperties, ComponentProps } from 'react';

import styles from '@/src/components/ui/Statistics/Statistics.module.scss';
import { slotable } from '@/src/hoc';

const StatGrid = slotable<
  'article',
  ComponentProps<'article'> & {
    columnWidth?: string;
  }
>('article', ({ Comp, className, style, children, columnWidth, ...props }) => (
  <Comp
    className={cn(styles.grid, className)}
    style={
      {
        '--col-width': columnWidth,
      } as CSSProperties
    }
    {...props}
  >
    {children}
  </Comp>
));

export default StatGrid;
