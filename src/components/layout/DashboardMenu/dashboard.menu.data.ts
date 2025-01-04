import {
  ArrowLeft,
  CalendarRange,
  LayoutDashboard,
  Settings,
  Shield,
  SquareKanban,
  Timer,
} from 'lucide-react';
import { type ComponentProps } from 'react';

import type DashboardMenuItem from '@/src/components/layout/DashboardMenuItem';
import { ADMIN_PAGES, DASHBOARD_PAGES } from '@/src/types/routes.ts';

export type DashboardMenuData = Array<ComponentProps<typeof DashboardMenuItem>>;

export const dashboardMenuData: DashboardMenuData = [
  {
    icon: LayoutDashboard,
    href: DASHBOARD_PAGES.HOME,
    children: 'Личный кабинет',
    'aria-disabled': false,
  },
  {
    icon: SquareKanban,
    href: `${DASHBOARD_PAGES.TASKS}/list-view`,
    parent: DASHBOARD_PAGES.TASKS,
    children: 'Задачи',
    'aria-disabled': false,
  },
  {
    icon: Timer,
    href: DASHBOARD_PAGES.POMODORO,
    children: 'Pomodoro',
    'aria-disabled': false,
  },
  {
    icon: CalendarRange,
    href: DASHBOARD_PAGES.TIME_BLOCKING,
    children: 'Распорядок дня',
    'aria-disabled': false,
  },
  {
    icon: Settings,
    href: DASHBOARD_PAGES.SETTINGS,
    children: 'Настройки',
    'aria-disabled': false,
  },
];

export const dashboardBottomMenuData: DashboardMenuData = [
  {
    icon: Shield,
    href: ADMIN_PAGES.DASHBOARD,
    children: 'Панель админа',
    'aria-disabled': false,
  },
];

export const adminBottomMenuData: DashboardMenuData = [
  {
    icon: ArrowLeft,
    href: DASHBOARD_PAGES.HOME,
    children: 'Назад',
  },
];
