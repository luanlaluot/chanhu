import { useState } from "react";
// @mui
import { styled } from "@mui/material/styles";
import {
  Input,
  Slide,
  Button,
  IconButton,
  InputAdornment,
  ClickAwayListener,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
// utils
import { bgBlur } from "../../../utils/cssStyles";
// component
import Iconify from "../../../components/iconify";
import { TTheme } from "theme";

// ----------------------------------------------------------------------

const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 92;

const StyledSearchbar = styled("div")(({ theme }: any) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  top: 0,
  left: 0,
  zIndex: 99,
  width: "100%",
  display: "flex",
  position: "absolute",
  alignItems: "center",
  height: HEADER_MOBILE,
  padding: theme.spacing(0, 3),
  [theme.breakpoints.up("md")]: {
    height: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

const FormControlStyle = styled(FormControl)(({ theme }: any) => ({
  width: "30%",
  [theme.breakpoints.down("lg")]: {
    width: "40%",
  },
}));

// ----------------------------------------------------------------------

export default function BranchSelection() {
  const [branch, setBranch] = useState<string | number>(1);

  return (
    <FormControlStyle>
      <InputLabel id="branch-select-label">Chi nhánh</InputLabel>
      <Select
        labelId="branch-select-label"
        id="branch-select"
        value={branch}
        label="Branch"
        onChange={(e) => setBranch(e.target.value)}
      >
        <MenuItem value={1}>Chi nhánh 1</MenuItem>
        <MenuItem value={2}>Chi nhánh 2</MenuItem>
      </Select>
    </FormControlStyle>
  );
}
