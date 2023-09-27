import { useState } from "react";
import AvatarUser from "@/assets/images/image-avatar.png";
import Logo from "@/assets/icons/logo.svg";
import { MenuIcon, CartIcon } from "@/assets/icons/";
import { CustomButton } from "@/components";
import { AppBar, Avatar, Badge, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";

const pages = ["Collections", "Men", "Women", "About", "Contact"];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box component="a" href="/" sx={{ mr: 2, display: { xs: "none", md: "flex" }, flexWrap: "nowrap" }}>
            <img src={Logo} alt="Logo of Sneakers" />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <CustomButton key={page}>{page}</CustomButton>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", gap: "1.375rem" }}>
            <IconButton size="medium" aria-label="cart">
              <Badge badgeContent={2} color="error">
                <CartIcon />
              </Badge>
            </IconButton>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={AvatarUser} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
