import { useState } from "react";
import { CartIcon, CloseIcon, MenuIcon } from "@/assets/icons/";
import Logo from "@/assets/icons/logo.svg";
import AvatarUser from "@/assets/images/image-avatar.png";
import { CustomButton } from "@/components";
import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";

const pages = ["Collections", "Men", "Women", "About", "Contact"];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "start",
}));

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="lg" sx={{ borderBottom: "2px solid", borderBottomColor:"primary.light" }}>
        <Toolbar disableGutters>
          <Box sx={{ mr: 2, display: { xs: "none", md: "flex" }, flexWrap: "nowrap" }} component="a" href="/">
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
            <Box
              sx={{
                maxWidth: "8.5625rem",
                ml: 1,
                display: { xs: "flex", md: "none" },
                flexWrap: "nowrap",
                alignSelf: "center",
              }}
              component="a"
              href="/"
            >
              <img src={Logo} alt="Logo of Sneakers" />
            </Box>
            <Drawer sx={{ flexGrow: 0 }} anchor="left" open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}>
              <DrawerHeader>
                <IconButton onClick={handleCloseNavMenu}>
                  <CloseIcon />
                </IconButton>
              </DrawerHeader>
              <List sx={{ width: "15.625rem" }}>
                {pages.map((page) => (
                  <ListItem key={page} disablePadding>
                    <ListItemButton>
                      <ListItemText
                        primary={page}
                        primaryTypographyProps={{ fontSize: 17, fontWeight: "fontWeightBold" }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, alignSelf: "stretch" }}>
            {pages.map((page) => (
              <CustomButton key={page} disableRipple>
                {page}
              </CustomButton>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", gap: "1.375rem" }}>
            <IconButton size="medium" aria-label="cart">
              <Badge badgeContent={2} color="secondary">
                <CartIcon />
              </Badge>
            </IconButton>
            <IconButton
              disableRipple
              sx={{ p: 0, border: "1px solid transparent", "&:hover": { borderColor: "secondary.main" } }}
            >
              <Avatar alt="Remy Sharp" src={AvatarUser} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
