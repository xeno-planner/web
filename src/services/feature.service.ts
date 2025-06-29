import type { AsyncReturnType } from 'xenopomp-essentials';

import { axiosWithAuth } from '@/src/api/interceptors.ts';

export type AppFeature = keyof AsyncReturnType<
  (typeof FeatureService)['getFeatures']
>;

export class FeatureService {
  static BASE_URL = '/user/features';

  static async getFeatures() {
    let canAccessAdminPage = true;
    let canViewDbStatus = true;

    // Check if user can access admin page or not
    await axiosWithAuth
      .get(`${this.BASE_URL}/can-access-admin-page`)
      .catch(() => {
        canAccessAdminPage = false;
      });

    await axiosWithAuth.get(`${this.BASE_URL}/can-view-db-status`).catch(() => {
      canViewDbStatus = false;
    });

    return {
      canAccessAdminPage,
      canViewDbStatus,
    };
  }
}
