'use client';

import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

import HtmlHeading from '@/src/components/ui/Heading';

import styles from './AuthForm.module.scss';
import type { AuthFormProps } from './AuthForm.props';

const AuthForm: VariableFC.Legacy<'form', AuthFormProps> = ({
  onSubmit,
  className,
  children,
  heading,
  style,
  allowDefaultEvent,
  ...props
}) => {
  return (
    <form
      onSubmit={ev => {
        // Prevent default only
        // if user disallow it (default behaviour).
        if (!allowDefaultEvent) {
          ev.preventDefault();
        }

        onSubmit?.(ev);
      }}
      className={cn(styles.auth, className)}
      style={{
        width: 'min(600px, 100%)',
        // height: 'fit-content',
        ...style,
      }}
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

      {children && <div className={cn(styles.body)}>{children}</div>}
    </form>
  );
};

export default AuthForm;
