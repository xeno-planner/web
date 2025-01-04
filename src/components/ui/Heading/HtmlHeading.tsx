import cn from 'classnames';
import { Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
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
    <Link href={`#${props.id ?? ''}`}>
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

        <LinkIcon
          className={cn('float-end', styles.icon)}
          size={'1rem'}
        />
      </HeadingComponent>
    </Link>
  );
};

export default HtmlHeading;
