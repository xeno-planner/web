import cn from 'classnames';
import type { FC } from 'react';

import {
  type DividerVariantsType,
  dividerVariants,
} from './Divider.variants.ts';

const Divider: FC<DividerVariantsType> = ({ axis }) => {
  return (
    <div
      aria-hidden
      className={cn(
        'bg-secondary-border flex-shrink-0',
        dividerVariants({ axis }),
      )}
    ></div>
  );
};

export default Divider;
