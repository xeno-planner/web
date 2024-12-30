import { type VariantProps, cva } from 'class-variance-authority';

export type OverlayVariantsType = VariantProps<typeof overlayVariants>;

export const overlayVariants = cva('fixed', {
  variants: {
    shrink: {
      true: 'w-dvw h-dvh',
      false: '',
    },
  },

  defaultVariants: {
    shrink: true,
  },
});
