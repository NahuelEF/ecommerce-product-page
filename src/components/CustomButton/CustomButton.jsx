import styled from "@emotion/styled";
import { ButtonBase } from "@mui/material";

export const CustomButton = styled(ButtonBase)(({ theme }) => ({
  borderBottom: `${theme.spacing(0.5)} solid transparent`,
  borderRadius: 0,
  textTransform: "none",
  color: theme.palette.text.secondary,
  fontFamily: theme.typography.fontFamily,
  fontSize: "0.9375rem",
  fontWeight: theme.typography.fontWeightRegular,
  display: "block",
  alignSelf: "stretch",
  "&:hover": {
    borderBottomColor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
  },
}));
