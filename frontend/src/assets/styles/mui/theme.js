import { createTheme } from "@mui/material";

const primaryFont = "Open Sans, sans-serif";
const headingFont = "Oswald, sans-seri";

export const baseFontSize = 16;
export const fontSizes = {
  xxs: "0.75rem", // 12px
  xs: "0.8125rem", // 13px
  sm: "0.875rem", // 14px
  base: "1rem", // 16px
  md: "1.125rem", // 18px
  lg: "1.5rem", // 24px
  xl: "1.75rem", // 28px
  xxl: "2rem", // 32px
  xxxl: "2.25rem", // 36px
  xxxxl: "2.5rem", // 40px
};

const theme = createTheme({
  typography: {
    fontFamily: primaryFont,
    htmlFontSize: baseFontSize,
    h1: {
      fontFamily: headingFont,
      fontSize: fontSizes.xxxxl,
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: 1.21,
    },
    h2: {
      fontFamily: headingFont,
      fontSize: fontSizes.xxxl,
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: 1.22,
    },
    h3: {
      fontFamily: headingFont,
      fontSize: fontSizes.xxl,
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: 1.31,
    },
    h4: {
      fontFamily: headingFont,
      fontSize: fontSizes.xl,
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: 1.43,
    },
    h5: {
      fontFamily: headingFont,
      fontSize: fontSizes.lg,
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: 1.42,
    },
    h6: {
      fontFamily: headingFont,
      fontSize: fontSizes.md,
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: 1.78,
    },
  },
});

export default theme;
