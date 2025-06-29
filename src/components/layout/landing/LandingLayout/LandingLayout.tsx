import cn from 'classnames';
import { type FC, PropsWithChildren } from 'react';

import styles from '@/app/main-page.module.scss';
import LandingHeader from '@/src/components/layout/landing/LandingHeader';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer.tsx';

import type { LandingLayoutProps } from './LandingLayout.props';

const LandingLayout: FC<PropsWithChildren<LandingLayoutProps>> = ({
  children,
  wrapper,
}) => {
  return (
    <main className={cn(styles.mainPage)}>
      <LandingHeader />

      <UiContainer
        {...wrapper}
        as={'section'}
        maxWidth={'1600px'}
        margin={'0px'}
        className={cn(styles.body, wrapper?.className)}
      >
        {children}
      </UiContainer>
    </main>
  );
};

export default LandingLayout;
