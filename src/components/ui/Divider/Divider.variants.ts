import { type VariantProps, cva } from 'class-variance-authority';

export type DividerVariantsType = VariantProps<typeof dividerVariants>;

export const dividerVariants = cva('', {
  variants: {
    axis: {
      horizontal: 'w-full h-[1px]',
      vertical: 'h-full w-[1px]',
    },
  },

  defaultVariants: {
    axis: 'horizontal',
  },
});
