import cn from 'classnames';
import type { ComponentProps } from 'react';

import { slotable } from '@/src/hoc';

import {
  type OverlayVariantsType,
  overlayVariants,
} from './Overlay.variants.ts';

interface OverlayProps extends ComponentProps<'div'> {}

const Overlay = slotable<'div', OverlayProps & OverlayVariantsType>(
  'div',
  ({ Comp, className, shrink, ...props }) => (
    <Comp
      className={cn(overlayVariants({ shrink }), className)}
      {...props}
    />
  ),
);

export default Overlay;
