import cn from 'classnames';
import { Link as LinkIcon } from 'lucide-react';
import { type ComponentProps, type FC } from 'react';

import styles from './HtmlHeading.module.scss';
import type { HtmlHeadingProps } from './HtmlHeading.props.ts';

const HtmlHeading: FC<HtmlHeadingProps & ComponentProps<'h1'>> = ({
  className,
  children,
  anchor,
  as: HeadingComponent,
  ...props
}) => {
  return (
    <HeadingComponent
      className={cn(
        styles.heading,
        {
          [`${styles.anchor}`]: anchor,
        },
        className,
      )}
      {...props}
    >
      {children}

      {anchor && (
        <LinkIcon
          className={cn('float-end', styles.icon)}
          size={'1rem'}
        />
      )}
    </HeadingComponent>
  );
};

export default HtmlHeading;
