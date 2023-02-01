import { LoadingButton } from "@mui/lab";
import { Button, Container, Typography } from "@mui/material";
import Iconify from "components/iconify/Iconify";
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
        <Typography variant="h5">Hi, Dashboard</Typography>
        <Typography variant="h4">Hi, Dashboard</Typography>
        <Typography variant="h3">Hi, Dashboard</Typography>
        <Typography variant="h2">Hi, Dashboard</Typography>
        <Typography variant="h1">Hi, Dashboard</Typography>
        <Button variant="text">Button</Button>
        <Button variant="contained">Button</Button>
        <Button variant="outlined">Button</Button>
        <Button
          variant="outlined"
          color="success"
          startIcon={<Iconify icon="tabler:home" />}
        >
          Button
        </Button>
        <Button
          variant="outlined"
          color="warning"
          startIcon={<Iconify icon="tabler:home" />}
        >
          Button
        </Button>
        <Button
          variant="outlined"
          color="error"
          startIcon={<Iconify icon="tabler:plus" />}
        >
          Button
        </Button>
        <Button
          variant="outlined"
          color="error"
          startIcon={<Iconify icon="tabler:home" />}
          onClick={openSnackBar}
        >
          Button
        </Button>
        <LoadingButton loading={loading} onClick={() => setLoading(true)}>
          Loading Button
        </LoadingButton>
        <LoadingButton
          loading={loading}
          variant="outlined"
          onClick={() => setLoading(true)}
        >
          Loading Button
        </LoadingButton>
        <LoadingButton
          loading={loading}
          variant="contained"
          onClick={() => setLoading(true)}
        >
          Loading Button
        </LoadingButton>
      </Container>
    </Page>
  );
};

export default Dashboard;
