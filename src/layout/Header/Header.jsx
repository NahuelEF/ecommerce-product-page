import { useState } from "react";
import { CartIcon, CloseIcon, DeleteIcon, MenuIcon } from "@/assets/icons/";
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
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Popover,
  Toolbar,
  Typography,
} from "@mui/material";

const pages = ["Collections", "Men", "Women", "About", "Contact"];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "start",
}));

export default function Header({ countProducts }) {
  const [anchorElNav, setAnchorElNav] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenNavMenu = () => {
    setAnchorElNav(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const formatCurrency = (price) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const priceProduct = 125;
  const totalPrice = priceProduct * countProducts;

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { sm: "68px", md: "112px" },
          }}
        >
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
            <Drawer sx={{ flexGrow: 0 }} anchor="left" open={anchorElNav} onClose={handleCloseNavMenu}>
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

          <Box sx={{ mr: 7, display: { xs: "none", md: "flex" }, flexWrap: "nowrap" }} component="a" href="#">
            <img src={Logo} alt="Logo of Sneakers" />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, alignSelf: "stretch", flexGrow: 1, gap: 4 }}>
            {pages.map((page) => (
              <CustomButton key={page} disableRipple>
                {page}
              </CustomButton>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex", gap: "1.375rem" }}>
            <IconButton size="medium" aria-label="cart" aria-describedby={id} onClick={handleClick}>
              <Badge badgeContent={countProducts} color="secondary">
                <CartIcon />
              </Badge>
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              elevation={12}
              sx={{
                "& .MuiPopover-paper": { width: { xs: "100%", sm: "360px" }, height: "256px" },
              }}
            >
              <Typography sx={{ py: 3.375, px: 3, fontSize: ".9375rem", fontWeight: "fontWeightBold" }}>
                Cart
              </Typography>
              <Divider />
              {countProducts ? (
                <List>
                  <ListItem
                    secondaryAction={
                      <IconButton size="large">
                        <DeleteIcon />
                      </IconButton>
                    }
                    sx={{ bgcolor: "secondary.light" }}
                  >
                    <ListItemAvatar>
                      <Avatar>H</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Fall Limited Edition Sneakers"
                      secondary={`${formatCurrency(priceProduct)} x ${countProducts} ${formatCurrency(totalPrice)}`}
                    />
                  </ListItem>
                </List>
              ) : (
                <Box
                  sx={{
                    height: "calc(100% - 79px)",
                    p: 3,
                    display: "flex",
                    flexFlow: "column nowrap",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    align="center"
                    sx={{ color: "text.secondary", fontSize: ".9375rem", fontWeight: "fontWeightBold" }}
                  >
                    Your cart is empty.
                  </Typography>
                </Box>
              )}
            </Popover>
            <Avatar
              alt="Remy Sharp"
              src={AvatarUser}
              sx={{ p: 0, border: "1px solid transparent", "&:hover, &:active": { borderColor: "secondary.main" } }}
            />
          </Box>
        </Toolbar>
        <Divider sx={{ borderColor: { xs: "transparent", md: "primary.light" } }} />
      </Container>
    </AppBar>
  );
}
