import * as React from 'react';
import { lazyImport, Navigate } from 'plugin-runtime';
import type { RouterProps } from 'plugin-runtime';

const routers = [
  {
    path: '*',
    root: true,
    children: [
      {
        path: 'home',
        children: [
          {
            path: 'dynamic',
            children: [
              {
                path: ':id',
                element: React.createElement(lazyImport('dynamic/$id')),
                children: [
                  {
                    path: ':name',
                    element: React.createElement(lazyImport('dynamic/$id/$name'))
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        path: '*',
        element: React.createElement(Navigate, {
          to: '/home',
          replace: true
        })
      }
    ]
  }
] as RouterProps[];

export default routers;
