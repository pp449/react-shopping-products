import { css } from "styled-components";

const COLOR = {
  grey1: "#EAEAEA", //버튼
  grey2: "#0000001A", //selectBox border
  white: "#ffffff",
  black: "#000000",
};

const TEXT = {
  xLarge: css`
    font-size: 24px;
    line-height: 18px;
    font-weight: 800;
  `,
  large: css`
    font-size: 20px;
    line-height: 18px;
    font-weight: 800;
  `,
  medium: css`
    font-size: 18px;
    line-height: 18px;
    font-weight: 700;
  `,
  small: css`
    font-size: 16px;
    line-height: 18px;
    font-weight: 700;
  `,
  semiSmall: css`
    font-size: 14px;
    line-height: 18px;
    font-weight: 700;
  `,
  xSmall: css`
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
  `,
};

export const theme = {
  COLOR,
  TEXT,
};

export type ThemeType = typeof theme;
