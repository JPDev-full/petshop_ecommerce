import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export function SiteFooter() {
  return (
    <AppBar
      position="inherit"
      sx={{ backgroundColor: "#f2f2f2" }}
      style={{ maxHeight: "300px", marginTop: "50px" }}
    >
      <Toolbar>
        <Typography variant="body1" sx={{ color: "#555" }} align="center">
          &copy; 2024 Pet Shop. Todos os direitos reservados.
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
