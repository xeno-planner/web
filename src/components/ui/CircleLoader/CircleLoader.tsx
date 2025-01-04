'use client';

import { motion } from 'framer-motion';
import { Loader, type LucideProps } from 'lucide-react';
import { type FC } from 'react';

import type { CircleLoaderProps } from './CircleLoader.props';

const Icon = motion(Loader);

const CircleLoader: FC<CircleLoaderProps & Pick<LucideProps, 'size'>> = ({
  size = '1em',
}) => {
  return (
    <Icon
      size={size}
      initial={{
        rotate: '0turn',
      }}
      animate={{
        rotate: '1turn',
      }}
      transition={{
        ease: 'linear',
        duration: 2,
        delay: 0,
        repeat: Number.POSITIVE_INFINITY,
      }}
    />
  );
};

export default CircleLoader;
