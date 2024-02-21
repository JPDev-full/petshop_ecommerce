import React from "react";
import { AppBar, Toolbar, Button, Menu, MenuItem } from "@mui/material";
import { LoginPage } from "../../pages/LoginPage";

export function SiteHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#00A3B4" }}>
      <Toolbar>
        <img
          src={"/images/logo.png"}
          alt="Logo Site"
          style={{
            maxWidth: "64px",
            maxHeight: "64px",
            margin: "3px 3px",
          }}
        />
        <Button
          color="inherit"
          sx={{ color: "#fff" }}
          style={{
            marginLeft: "70%",
          }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          aria-controls="menu-produtos"
          aria-haspopup="true"
          onClick={handleMenuClick}
          sx={{ color: "#fff" }}
          style={{
            marginLeft: "0.375rem",
          }}
        >
          Produtos
        </Button>
        <Menu
          id="menu-produtos"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Categoria 1</MenuItem>
          <MenuItem onClick={handleMenuClose}>Categoria 2</MenuItem>
          <MenuItem onClick={handleMenuClose}>Categoria 3</MenuItem>
        </Menu>
        <Button
          color="inherit"
          sx={{ color: "#fff" }}
          onClick={() => alert("Clicou em Contato")}
          style={{
            marginLeft: "0.375rem",
          }}
        >
          Contato
        </Button>
        <Button
          color="inherit"
          sx={{ backgroundColor: "#f8b195", color: "#333" }}
          onClick={<LoginPage />}
          style={{
            marginLeft: "0.375rem",
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
