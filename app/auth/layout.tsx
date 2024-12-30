import type { PropsWith } from '@xenopomp/advanced-types';
import cn from 'classnames';
import type { Metadata } from 'next';
import { type FC } from 'react';

import Overlay from '@/src/components/ui/Overlay/Overlay.tsx';
import { NO_INDEX_PAGE } from '@/src/constants/seo.constants.ts';
import { generateOpenGraph } from '@/src/utils/seo';

import CloseAuthOverlay from './components/CloseAuthOverlay.tsx';

export async function generateMetadata(): Promise<Metadata> {
  const description =
    'Войдите в систему, чтобу получить доступ к полному функционалу.';

  return {
    // title,
    description,
    openGraph: generateOpenGraph({
      // title,
      description,
    }),
    ...NO_INDEX_PAGE,
  };
}

const AuthLayout: FC<PropsWith<'children', {}>> = ({ children }) => {
  return (
    <main className={cn('h-dvh flex-center p-[1rem]')}>
      <Overlay
        shrink={false}
        asChild
        className={cn('top-0 right-0')}
      >
        <div aria-hidden>
          <CloseAuthOverlay />
        </div>
      </Overlay>

      {children}
    </main>
  );
};

export default AuthLayout;
