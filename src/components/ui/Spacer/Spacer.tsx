import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

const Spacer: VariableFC.Legacy<'div', unknown, 'children'> = ({
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
