import { alpha } from "@mui/material/styles";
import { TTheme } from "theme";

// ----------------------------------------------------------------------

export default function Backdrop(theme?: TTheme) {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme?.palette?.grey![800]!, 0.8),
        },
        invisible: {
          background: "transparent",
        },
      },
    },
  };
}
