import styled from "@emotion/styled";
import { ButtonBase } from "@mui/material";

export const CustomButton = styled(ButtonBase)(({ theme }) => ({
  borderRadius: 0,
  textTransform: "none",
  color: theme.palette.text.secondary,
  fontFamily: theme.typography.fontFamily,
  fontSize: "0.9375rem",
  fontWeight: theme.typography.fontWeightRegular,
  display: "block",
  alignSelf: "stretch",
  position: "relative",
  "&::after": {
    content: "''",
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 2,
    width: "100%",
    height: theme.spacing(0.5),
    backgroundColor: theme.palette.secondary.main,
    transform: "scale(0)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeInOut,
      delay: 0,
    }),
  },
  "&:hover": {
    color: theme.palette.text.primary,
  },
  "&:hover::after": {
    transform: "scale(1)",
  },
}));
