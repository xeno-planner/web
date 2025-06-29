import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

import HtmlHeading from '@/src/components/ui/Heading';
import Profile from '@/src/components/ui/Profile';

import styles from './DashboardHeader.module.scss';
import type { DashboardHeaderProps } from './DashboardHeader.props';

const DashboardHeader: VariableFC.Legacy<
  'header',
  DashboardHeaderProps,
  'children'
> = ({ className, heading, sticky = true, ...props }) => {
  return (
    <header
      className={cn(
        styles.dashboardHeader,
        {
          'sticky top-0 z-[100] bg-primary-bg': sticky,
        },
        className,
      )}
      {...props}
    >
      {heading && (
        <HtmlHeading
          as={'h1'}
          className={cn(styles.heading)}
        >
          {heading}
        </HtmlHeading>
      )}

      <Profile />
    </header>
  );
};

export default DashboardHeader;
