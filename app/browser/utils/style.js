import { css } from "styled-components";

const defaultStyles = {
  primaryFontFamily: "'Open Sans', sans-serif",
  primaryFontSize: "16px"
};

const sizes = {
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 767
};

const media = ["lg", "md", "sm"].reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

media.xs = (...args) => css(...args);

export { defaultStyles, sizes, media };
