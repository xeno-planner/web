import { type FC, PropsWithChildren } from 'react';

/** Type for any provider component. */
export type ProviderType<T = {}> = FC<PropsWithChildren<T>>;
