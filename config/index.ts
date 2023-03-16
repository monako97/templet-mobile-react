import type { PartialConfigType } from 'PackageNameByCore';

const conf: PartialConfigType = {
  designSize: 375,
  importOnDemand: {
    'neko-ui': {
      transform: 'neko-ui/es/${member}',
      memberTransformers: ['dashed_case'],
    },
    lodash: {
      transform: 'lodash/${member}',
    },
  },
  proxy: [
    {
      context: ['/api/'],
      target: 'http://127.0.0.1:8001/',
      changeOrigin: true,
      pathRewrite: { '^/api/': '/' },
      secure: false,
    },
  ] as unknown as PartialConfigType['proxy'],
};

export default conf;
