/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
import 'styled-components';
import { css, ThemedCssFunction, DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    media: {
      screenMinEm: { [key in keyof typeof screenMinEm]: string };
      screenMaxEm: { [key in keyof typeof screenMaxEm]: string };
    };
    mediaScreenMin: {
      [key in keyof typeof breakpoints]: ThemedCssFunction<DefaultTheme>;
    };
    mediaScreenMax: {
      [key in keyof typeof breakpoints]: ThemedCssFunction<DefaultTheme>;
    };
    containerWidth: number;
  }
}

export const breakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 769,
  tabletL: 1024,
  desktop: 1200,
  desktopM: 1440,
  desktopL: 2560,
};

export const screenMinEm = {
  mobileS: `(min-width: ${breakpoints.mobileS / 16}em)`,
  mobileM: `(min-width: ${breakpoints.mobileM / 16}em)`,
  mobileL: `(min-width: ${breakpoints.mobileL / 16}em)`,
  tablet: `(min-width: ${breakpoints.tablet / 16}em)`,
  laptop: `(min-width: ${breakpoints.tabletL / 16}em)`,
  laptopL: `(min-width: ${breakpoints.desktop / 16}em)`,
  desktop: `(min-width: ${breakpoints.desktopM / 16}em)`,
  desktopL: `(min-width: ${breakpoints.desktopL / 16}em)`,
};

export const screenMaxEm = {
  mobileS: `(max-width: ${breakpoints.mobileS / 16}em)`,
  mobileM: `(max-width: ${breakpoints.mobileM / 16}em)`,
  mobileL: `(max-width: ${breakpoints.mobileL / 16}em)`,
  tablet: `(max-width: ${breakpoints.tablet / 16}em)`,
  laptop: `(max-width: ${breakpoints.tabletL / 16}em)`,
  laptopL: `(max-width: ${breakpoints.desktop / 16}em)`,
  desktop: `(max-width: ${breakpoints.desktopM / 16}em)`,
  desktopL: `(max-width: ${breakpoints.desktopL / 16}em)`,
};

export const mediaScreenMin = (
  Object.keys(breakpoints) as (keyof typeof breakpoints)[]
).reduce((mediaMin, size) => {
  mediaMin[size] = (first: any, ...interpolations: any[]) => css`
    @media (min-width: ${breakpoints[size]}px) {
      ${css(first, ...interpolations)}
    }
  `;
  return mediaMin;
}, {} as { [key in keyof typeof breakpoints]: ThemedCssFunction<DefaultTheme> });

export const mediaScreenMax = (
  Object.keys(breakpoints) as (keyof typeof breakpoints)[]
).reduce((mediaMax, size) => {
  mediaMax[size] = (first: any, ...interpolations: any[]) => css`
    @media (max-width: ${breakpoints[size]}px) {
      ${css(first, ...interpolations)}
    }
  `;
  return mediaMax;
}, {} as { [key in keyof typeof breakpoints]: ThemedCssFunction<DefaultTheme> });

const theme: DefaultTheme = {
  media: {
    screenMaxEm,
    screenMinEm,
  },
  mediaScreenMin,
  mediaScreenMax,
  containerWidth: 1024,
};

export default theme;
