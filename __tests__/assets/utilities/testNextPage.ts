import { type Metadata } from 'next';
import { type ReactNode } from 'react';
import { test } from 'vitest';

import { mockRouter } from '@/__tests__/assets/mocks';
import { expectToRender } from '@/__tests__/assets/utilities/expect-to-render.tsx';
import { injectMocks } from '@/__tests__/assets/utilities/injectMocks.ts';
import { testObject } from '@/__tests__/assets/utilities/testObject.ts';
import RQProvider from '@/src/components/providers/RQProvider/RQProvider.tsx';

interface ITestNextPageOptions {
  generateMetadata?: () => Promise<Metadata>;
}

/**
 * Contains all basic logic for testing simple Next
 * page.
 * @param page
 * @param options
 *
 * @example
 * testNextPage(<DashboardPage />);
 */
export const testNextPage = (
  page: ReactNode,
  options?: ITestNextPageOptions,
) => {
  injectMocks({
    mockingFn: () => {
      mockRouter();
    },
  });

  test('It renders', () => {
    expectToRender(page, {
      wrapper: RQProvider,
    });
  });

  test('Metadata is correct', () => {
    // Test metadata only if it is provided
    if (!options?.generateMetadata) {
      return;
    }

    options.generateMetadata().then(meta => testObject(meta));
  });
};