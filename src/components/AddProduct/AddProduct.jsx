import { useState } from "react";
import { CartIcon, MinusIcon, PlusIcon } from "@/assets/icons";
import { Box, Button, IconButton, InputBase, Stack } from "@mui/material";
import styled from "@emotion/styled";

const FormProduct = styled(Box)({
  maxWidth: "27.8125rem",
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "stretch",
  gap: ".9375rem",
});

const ButtonGroup = styled(Stack)(({ theme }) => ({
  width: "9.8125rem",
  height: "3.4375rem",
  backgroundColor: theme.palette.primary.light,
  borderRadius: theme.shape.borderRadius,
  flex: "1 0 9.8125rem",

  "& .MuiIconButton-root": {
    width: "3.4375rem",
    borderRadius: theme.shape.borderRadius,
  },
}));

const CustomInput = styled(InputBase)(({ theme }) => ({
  "&.MuiInputBase-root": {
    justifyContent: "center",
  },
  "& .MuiInputBase-input": {
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: "1.28px",
    alignSelf: "center",
    flex: "1",
  },
}));

export const AddProduct = ({ handleClick }) => {
  const [products, setProducts] = useState(0);

  const removeProduct = () => products > 0 && setProducts(products - 1);

  const addProduct = () => setProducts(products + 1);

  return (
    <FormProduct component="form">
      <ButtonGroup direction="row" alignItems="stretch" justifyContent="space-between">
        <IconButton aria-label="remove a product" onClick={removeProduct}>
          <MinusIcon />
        </IconButton>
        <CustomInput
          type="text"
          readOnly
          value={products}
          fullWidth
          inputProps={{ "aria-label": "number of products" }}
        />
        <IconButton aria-label="add a product" onClick={addProduct}>
          <PlusIcon />
        </IconButton>
      </ButtonGroup>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<CartIcon />}
        size="large"
        onClick={() => handleClick(products)}
        sx={{
          width: "17.0625rem",
          textTransform: "none",
          fontSize: "1rem",
          fontWeight: "fontWeightBold",
          "& .MuiButton-startIcon": {
            marginRight: "1rem",
          },
          flex: "1 0 17.0625rem",
        }}
      >
        Add to cart
      </Button>
    </FormProduct>
  );
};
