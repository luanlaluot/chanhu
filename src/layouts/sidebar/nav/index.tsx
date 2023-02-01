import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// @mui
import {
  Avatar,
  Box,
  Drawer,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
// mock
// import account from "../../../_mock/account";
// hooks
import useResponsive from "../../../hooks/useResponsive";
// components
// import Logo from "../../../components/logo";
// import NavSection from "../../../components/nav-section";
// import Scrollbar from "../../../components/scrollbar";
//
import navConfig from "./config";
import Scrollbar from "components/scrollbar/Scrollbar";
import Logo from "components/logo/Logo";
import account from "_mock/account";
import NavSection from "components/nav-section/NavSection";
import Iconify from "components/iconify/Iconify";

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const StyledAccount = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2, 2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav }: any) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive("up", "lg");

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
        <Logo />
      </Box>

      <Box sx={{ mb: 1, mx: 2.5 }}>
        <Link underline="none">
          <StyledAccount>
            <Avatar src={account.photoURL} alt="photoURL" />
            <Box
              sx={{ ml: 2, display: "flex", flex: 1, flexDirection: "column" }}
            >
              <Typography
                fontWeight={"bold"}
                variant="subtitle2"
                sx={{ color: "text.primary" }}
              >
                {account.displayName}
              </Typography>

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {account.role}
              </Typography>
            </Box>
            <IconButton>
              <Iconify icon="tabler:logout" />
            </IconButton>
          </StyledAccount>
        </Link>
      </Box>
      <NavSection data={navConfig} />
      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: "background.default",
              borderRightStyle: "dashed",
            },
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}