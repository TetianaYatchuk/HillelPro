import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useTheme } from "@mui/material/styles";

export default function ButtonAppBar({ toggleDarkMode }) {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            &#128520; &#128520; &#128520;
          </Typography>
          <IconButton
            color="inherit"
            onClick={toggleDarkMode}
            aria-label="toggle dark mode"
          >
            <Brightness4Icon />
          </IconButton>
          <Button color="inherit">&#129322; &#128153; &#128155;</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
