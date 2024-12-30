import { Slot } from '@radix-ui/react-slot';
import type { ElementType, ReactNode } from 'react';

import type { AsChild, WithComp } from './slotable.types';

/**
 * HOC for creating slotable components (powered by ``@radix-ui/react-slot``).
 * @param baseComp
 * @param slot
 */
export function slotable<TComp extends ElementType, TProps = unknown>(
  baseComp: TComp,
  slot: (props: TProps & WithComp<TComp>) => ReactNode,
) {
  return ({ asChild, ...props }: TProps & AsChild) => {
    const Comp = asChild ? Slot : baseComp;

    // @ts-expect-error Types are inferred incorrectly
    return slot({ Comp, ...props });
  };
}
