import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';
import { Suspense } from 'react';

// Layouts
import { MainLayout } from '@/layouts';

// Routers
import { HR_ROUTES } from './routers';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<Navigate to="/so-do-co-cau-to-chuc" replace />}
      />

      {HR_ROUTES.map(({ path, Component, title }) => (
        <Route key={path} element={<MainLayout title={title || ''} />}>
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<div>Loading</div>}>
                <Component />
              </Suspense>
            }
            loader={() => ({ title })}
          />
        </Route>
      ))}
    </Route>,
  ),
  {
    future: {
      v7_relativeSplatPath: true,
    },
  },
);
