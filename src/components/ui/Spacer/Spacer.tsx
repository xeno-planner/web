import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

const Spacer: VariableFC<'div', unknown, 'children'> = ({
  className,
  'aria-hidden': ariaHidden = true,
  ...props
}) => {
  return (
    <div
      className={cn('flex-grow', className)}
      aria-hidden={ariaHidden}
      {...props}
    ></div>
  );
};

export default Spacer;
