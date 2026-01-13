import { StructureChart } from '@/pages';
import { FC } from 'react';

export interface IRoute {
  path: string;
  Component: FC;
  title?: string;
}

export const HR_ROUTES: IRoute[] = [
  {
    path: '/so-do-co-cau-to-chuc',
    Component: StructureChart,
    title: 'Sơ đồ cơ cấu tổ chức',
  },
];
