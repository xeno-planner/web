import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

import HtmlHeading from '@/src/components/ui/Heading';
import { columnType } from '@/src/components/ui/TaskTable/TaskTable.tsx';

import type { TGroupNameProps } from './TGroupName.props';

const TGroupName: VariableFC.Legacy<'th', TGroupNameProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <th
      className={cn(className)}
      {...columnType('group')}
      {...props}
    >
      <HtmlHeading as={'h2'}>{children}</HtmlHeading>
    </th>
  );
};

export default TGroupName;
