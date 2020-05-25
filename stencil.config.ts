import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/global/styles/breakpoints.scss',
        'src/global/styles/colors.scss'
      ]
    })
  ],
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      polyfills: false,
      dir: 'docs',
      // comment the following line to disable service workers in production
      serviceWorker: null
    }
  ]
};
