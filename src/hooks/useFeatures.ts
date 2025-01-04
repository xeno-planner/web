import { useQuery } from '@tanstack/react-query';

import {
  type AppFeature,
  FeatureService,
} from '@/src/services/feature.service.ts';

export const useFeatures = () => {
  const { data, ...qry } = useQuery({
    queryKey: ['user', 'features'],
    queryFn: () => FeatureService.getFeatures(),
  });

  /**
   * Checks if certain features are available for user.
   * @param features
   */
  const featuresAvailable = (features?: AppFeature[]) => {
    // Features are not requested
    if (!features) {
      return true;
    }

    for (const feat of features) {
      if (!data?.[feat]) {
        return false;
      }
    }

    return true;
  };

  return { data, featuresAvailable, ...qry };
};
