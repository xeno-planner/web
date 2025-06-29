import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

import styles from './PriorityBadge.module.scss';
import type { PriorityBadgeProps } from './PriorityBadge.props';

const PriorityBadge: VariableFC.Legacy<'div', PriorityBadgeProps> = ({
  priority,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(styles.badge, className)}
      data-priority={priority || 'none'}
      {...props}
    >
      {children}
    </div>
  );
};

export default PriorityBadge;
