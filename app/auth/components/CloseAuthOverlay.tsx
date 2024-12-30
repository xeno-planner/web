import cn from 'classnames';
import { X } from 'lucide-react';
import Link from 'next/link';
import type { FC } from 'react';

import Button from '@/src/components/ui/Button';

const CloseAuthOverlay: FC<unknown> = () => {
  return (
    <Link href={'/'}>
      <Button
        unstyled
        className={cn('p-5')}
      >
        <X />
      </Button>
    </Link>
  );
};

export default CloseAuthOverlay;
