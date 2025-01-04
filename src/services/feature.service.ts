import { axiosWithAuth } from '@/src/api/interceptors.ts';

export class FeatureService {
  private static BASE_URL = '/user/features';

  static async getFeatures() {
    let canAccessAdminPage = true;

    // Check if user can access admin page or not
    await axiosWithAuth
      .get(`${this.BASE_URL}/can-access-admin-page`)
      .catch(() => {
        canAccessAdminPage = false;
      });

    return {
      canAccessAdminPage,
    };
  }
}
