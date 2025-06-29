import cn from 'classnames';
import { PropsWithChildren } from 'react';
import type { Defined, VariableFC } from 'xenopomp-essentials';

import styles from './Button.module.scss';
import type { ButtonProps } from './Button.props';

const Button: VariableFC.Legacy<
  'button',
  PropsWithChildren<ButtonProps>,
  'children'
> = ({
  className,
  children,
  variant = 'primary',
  thin = false,
  hollow = false,
  unstyled = false,
  ...props
}) => {
  const variantClassname: Record<
    Defined<typeof variant>,
    string | undefined
  > = {
    primary: styles.themePrimary,
    danger: styles.themeDanger,
  };

  return (
    <button
      className={cn(
        {
          [`${styles.uiButton}`]: !unstyled && true,
          [`${variantClassname[variant]}`]: !unstyled && true,
          [`${styles.thin}`]: !unstyled && thin,
          [`${styles.hollow}`]: !unstyled && hollow,
        },
        className,
      )}
      data-hollow={hollow}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
