import PropTypes from "prop-types";
import { PropsWithChildren, useMemo } from "react";
// @mui
import { CssBaseline, ThemeOptions, useTheme } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
//
import palette from "./palette";
import shadows from "./shadows";
import typography from "./typography";
import GlobalStyles from "./globalStyles";
import customShadows, { TCustomShadow } from "./customShadows";
import componentsOverride from "./overrides";

// ----------------------------------------------------------------------

type TThemeProvider = {} & PropsWithChildren;
export type TTheme = {
  customShadows: TCustomShadow;
} & ThemeOptions;

export default function ThemeProvider(props: TThemeProvider) {
  const { children } = props;
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme as any);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
