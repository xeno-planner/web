import cn from 'classnames';
import { TriangleAlert } from 'lucide-react';
import type { VariableFC } from 'xenopomp-essentials';

import type { WarningMessageProps } from './WarningMessage.props';

const WarningMessage: VariableFC.Legacy<'div', WarningMessageProps, 'role'> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      role={'alert'}
      className={cn(
        'flex items-center gap-[.4em] text-warning-font',
        className,
      )}
      {...props}
    >
      <TriangleAlert size={'1em'} />

      {children}
    </div>
  );
};

export default WarningMessage;
