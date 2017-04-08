import { WebpackConfigOptions } from '../webpack-config';

export function getUnofficialConfig(wco: WebpackConfigOptions) {
  const { appConfig } = wco;

  return {
    target: appConfig.webpackTarget
  }
}
