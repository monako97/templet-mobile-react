import { lazy, type RouteConfig } from 'app:routes';

const routers: RouteConfig[] = [
  {
    path: '/',
    root: true,
    element: lazy(() => import('@/layout')),
    children: [
      {
        path: '/',
        element: lazy(() => import('@/pages')),
      },
      {
        path: 'home',
        children: [
          {
            path: 'dynamic/:id',
            element: lazy(() => import('@/pages/dynamic/$id')),
          },
          {
            path: 'dynamic/:id/:name',
            element: lazy(() => import('@/pages/dynamic/$id/$name')),
          },
        ],
      },
    ],
  },
];

export default routers;
