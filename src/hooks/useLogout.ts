'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { removeFromStorage as cleanAccessToken } from '@/src/services/auth-token.service.ts';
import { AuthService } from '@/src/services/auth.service.ts';
import { AUTH_PAGES } from '@/src/types/routes.ts';

export const useLogout = () => {
  const { push } = useRouter();

  const { mutate } = useMutation({
    mutationKey: ['profile', 'logout'],
    mutationFn: () => AuthService.logout(),
    onSuccess() {
      toast.info('Вы вышли из аккаунта.');
      cleanAccessToken();
      push(AUTH_PAGES.LOGIN);
    },
  });

  return mutate;
};
