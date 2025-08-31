import cn from 'classnames';
import Link from 'next/link';
import type { VariableFC } from 'xenopomp-essentials';

import styles from './Actions.module.scss';

export const FormActions: VariableFC.Legacy<'footer', {}> = ({
  className,
  children,
  ...props
}) => {
  return (
    <footer
      className={cn(styles.actions, className)}
      {...props}
    >
      {children}
    </footer>
  );
};

export const FormLink: VariableFC.Legacy<typeof Link, {}> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Link
      className={cn(styles.formLink, className)}
      {...props}
    >
      {children}
    </Link>
  );
};
