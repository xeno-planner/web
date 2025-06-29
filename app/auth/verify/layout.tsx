import cn from 'classnames';
import { type FC, PropsWithChildren } from 'react';

import AuthForm from '@/src/components/ui/auth/AuthForm';
import FieldList from '@/src/components/ui/auth/FieldList';

const VerificationPageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AuthForm>
      <FieldList className={cn('items-center')}>{children}</FieldList>
    </AuthForm>
  );
};

export default VerificationPageLayout;
