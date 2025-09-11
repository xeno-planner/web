import { ComponentProps, ElementType, FC, ReactNode } from 'react';
import { WeakOmit } from 'xenopomp-essentials';

declare module 'xenopomp-essentials' {
  export namespace VariableFC {
    /**
     * Legacy port of VariableFC to React 18
     */
    export type Legacy<
      A extends ElementType,
      P = unknown,
      Ex extends keyof ComponentProps<A> | undefined = undefined,
    > = FC<P & WeakOmit<ComponentProps<A>, Ex>>;
  }

  export namespace FunctionalChildren {
    export type Legacy<Args extends any[]> =
      | ReactNode
      | ((...args: Args) => ReactNode);
  }
}
