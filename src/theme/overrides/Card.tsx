// ----------------------------------------------------------------------

import { TTheme } from "theme";
import { Spacing } from "@mui/system";

export default function Card(theme?: TTheme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme?.customShadows.card,
          borderRadius: Number(theme?.shape?.borderRadius) * 2,
          position: "relative",
          zIndex: 0, // Fix Safari overflow: hidden with border radius
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: "h6" },
        subheaderTypographyProps: { variant: "body2" },
      },
      styleOverrides: {
        root: {
          padding: (theme?.spacing as Spacing)(3, 3, 0),
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: (theme?.spacing as Spacing)(3),
        },
      },
    },
  };
}
