import { css } from 'styled-components';

const displaySizes = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

export const minWidth = Object.keys(displaySizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (min-width: ${displaySizes[label]}px) {
      ${css(...args)};
    }
  `;
  acc[label].asString = 'screen and (min-width: ' + displaySizes[label] + 'px)';

  return acc;
}, {});
