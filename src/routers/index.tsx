import DocxUploader from '@/components/UploadFile';
import { Text } from '@chakra-ui/react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

interface IRoute {
  path: string;
  Component: JSX.Element;
  title: string;
}

export const DASHBOARD_ROUTES: IRoute[] = [
  {
    path: '/',
    Component: (
      <>
        <Text>Dashboard</Text>
        <DocxUploader />
      </>
    ),
    title: 'Dashboard',
  },
];

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<DocxUploader />} />
    </Route>,
  ),
);
