import { WebpackConfigOptions } from '../webpack-config';

export function getUnofficialConfig(wco: WebpackConfigOptions) {
  const { projectRoot, buildOptions, appConfig } = wco;

  return {
    target: appConfig.webpackTarget
  }
}
