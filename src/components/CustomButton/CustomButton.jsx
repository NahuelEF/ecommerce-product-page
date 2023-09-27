import { Button } from "@mui/material";

export default function CustomButton({ children, onClick }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        border: "1px solid transparent",
        borderRadius: 0,
        textTransform: "none",
        color: "primary.contrastText",
        fontSize: 15,
        fontWeight: 400,
        display: "block",
        alignSelf: "stretch",
        "&:hover": {
          borderBottom: 1,
        },
      }}
    >
      {children}
    </Button>
  );
}
