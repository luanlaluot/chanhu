import { LoadingButton } from "@mui/lab";
import { Button, Container, Typography } from "@mui/material";
import Breadcrumbs from "components/breadcrumbs";
import HeaderBreadcrumbs from "components/header-breadcrumbs";
import Iconify from "components/iconify";
import Page from "components/page";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  let timeout: NodeJS.Timeout;
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (loading) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timeout = setTimeout(() => {
        setLoading(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [loading]);

  const openSnackBar = () => {
    enqueueSnackbar("Notification");
  };

  return (
    <Page title="UI">
      <Container maxWidth={false}>
        <HeaderBreadcrumbs
          heading="Calendar"
          links={[{ name: "General", href: "/general" }, { name: "Calendar" }]}
        />
      </Container>
    </Page>
  );
};

export default Dashboard;
