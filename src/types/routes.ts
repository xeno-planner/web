/* eslint-disable no-unused-vars */

export enum DASHBOARD_PAGES {
  HOME = '/dashboard',
  TASKS = '/tasks',
  POMODORO = '/pomodoro',
  TIME_BLOCKING = '/time-blocking',
  SETTINGS = '/settings',
}

export enum AUTH_PAGES {
  LOGIN = '/auth/login',
}

export class ADMIN_PAGES {
  private static BASE_URL = '/admin';

  static DASHBOARD = `${this.BASE_URL}/dashboard`;
  static ANALYTICS = `${this.BASE_URL}/analytics`;
  static ROLES = `${this.BASE_URL}/roles`;
}

/* eslint-enable no-unused-vars */
