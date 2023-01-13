import PropTypes from "prop-types";
import { forwardRef } from "react";
// icons
import { Icon } from "@iconify/react";
// @mui
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

type TIconifyProps = {
  icon: string;
  width?: number;
  sx?: {};
};

const Iconify = forwardRef((props: TIconifyProps, ref) => {
  const { icon, width = 20, sx, ...other } = props;
  return (
    <Box
      ref={ref}
      component={Icon}
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  );
});

export default Iconify;
