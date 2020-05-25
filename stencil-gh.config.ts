import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { config as baseConfig } from './stencil.config';

// https://stenciljs.com/docs/config

export const config: Config = {
  ...baseConfig,
  outputTargets: [
    {
      type: 'www',
      dir: 'docs',
      polyfills: false,
      // comment the following line to disable service workers in production
      serviceWorker: null
    }
  ]
};
