import { type FC, PropsWithChildren } from 'react';

import type { ProdPortalProps } from './ProdPortal.props';

/**
 * Allows to render children only on certain
 * production mode.
 *
 * @param children
 * @param target
 * @constructor
 */
const ProdPortal: FC<PropsWithChildren<ProdPortalProps>> = ({
  children,
  target,
}) => {
  /** Production mode from .env file */
  const currentMode = process.env.NEXT_PUBLIC_PRODUCTION_MODE;

  /** If target mode matches current one, render children. */
  return <>{currentMode === target ? children : undefined}</>;
};

export default ProdPortal;
