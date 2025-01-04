import { transliterate } from '@xenopomp/advanced-utils';
import { kebabCase } from 'change-case';
import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';

import HtmlHeading from '@/src/components/ui/Heading';

/** Automatically creates MDX components for headings. */
const getHeadingComponents = () => {
  const components: MDXComponents = {};

  for (let i = 1; i <= 5; i++) {
    components[`h${i}`] = ({ children }) => {
      const id = kebabCase(
        typeof children === 'string' ? transliterate(children) : children,
      );

      return (
        <Link href={`#${id}`}>
          <HtmlHeading
            as={`h${i as 1 | 2 | 3 | 4 | 5}`}
            id={id}
            anchor
          >
            {children}
          </HtmlHeading>
        </Link>
      );
    };
  }

  return components;
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...getHeadingComponents(),
    ...components,
  };
}
