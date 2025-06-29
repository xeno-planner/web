import { ComponentProps, ElementType, FC } from 'react';
import { WeakOmit } from 'xenopomp-essentials';

declare module 'xenopomp-essentials' {
  export namespace VariableFC {
    export type Legacy<
      A extends ElementType,
      P = unknown,
      Ex extends keyof ComponentProps<A> | undefined = undefined,
    > = FC<P & WeakOmit<ComponentProps<A>, Ex>>;
  }
}
