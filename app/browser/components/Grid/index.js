import styled, { css } from "styled-components";
import { media, sizes } from "../../utils/style";

const gutter = "10px";

export const Container = styled.div`
  max-width: 100%;
  ${media.sm`max-width: 750px;`} ${media.md`max-width: 970px;`} ${media.lg`max-width: 1170px;`} margin: 0 auto;
  padding-right: ${gutter};
  padding-left: ${gutter};
  margin-top: ${props => (props.marginTop ? props.marginTop : "auto")};
`;

export const Row = styled.div`
  margin-left: -${gutter};
  margin-right: -${gutter};
  display: flex;
  flex-wrap: wrap;
`;

const colMedia = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (size = 1) => {
    const width = `${size * 100}%`;
    const style = `
      flex: 0 0 ${width};
      max-width: ${width};
    `;
    return css`${media[label]`${style}`}`;
  };
  return accumulator;
}, {});

export const Column = styled.div`
  box-sizing: border-box;
  vertical-align: middle;
  padding-left: ${gutter};
  padding-right: ${gutter};
  margin-bottom: 20px;
  width: 100%;
  ${props => {
    return css`
      ${props.sm && colMedia.sm(props.sm)}
      ${props.md && colMedia.md(props.md)}
      ${props.lg && colMedia.lg(props.lg)}
      ${props.xs && colMedia.xs(props.xs)}
    `;
  }};
`;
