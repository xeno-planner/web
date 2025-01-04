import type { DbStatus } from '@xeno-planner/backend-types/server-statuses.ts';

import { axiosWithAuth } from '@/src/api/interceptors.ts';

export class AnalyticsService {
  private static BASE_URL = '/admin/server-analytics';

  static async getDbStatus() {
    const res = await axiosWithAuth.get<DbStatus>(`${this.BASE_URL}/db/status`);
    return res.data.status;
  }
}
