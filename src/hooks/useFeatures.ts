import { useQuery } from '@tanstack/react-query';

import { FeatureService } from '@/src/services/feature.service.ts';

export const useFeatures = () => {
  return useQuery({
    queryKey: ['user', 'features'],
    queryFn: () => FeatureService.getFeatures(),
  });
};
