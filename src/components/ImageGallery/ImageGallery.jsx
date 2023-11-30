import { useState } from "react";
import { NextIcon, PreviousIcon } from "@/assets/icons";
import { PRODUCT_IMAGES, PRODUCT_THUMBNAIL_IMAGES } from "@/constant/productImg";
import styled from "@emotion/styled";
import { Box, ButtonBase, Grid, IconButton } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  borderRadius: 15,
  color: theme.palette.primary.main,
  "& > img": {
    width: "100%",
    border: "2px solid transparent",
    borderRadius: "inherit",
    transition: theme.transitions.create("border", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp,
    }),
  },
  "&.Mui-focusVisible > img , &:hover > img ": {
    borderColor: theme.palette.secondary.main,
  },
  "&.Mui-disabled > img": {
    borderColor: theme.palette.secondary.main,
    opacity: 0.6,
  },
}));

const ImageSlider = styled("img")({
  width: "100%",
  boxSizing: "content-box",
  display: "block",
});

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  width: "2.625rem",
  backgroundColor: theme.palette.primary.main,
  "&:active, &:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

export const ImageGallery = () => {
  const [imageGallery, setImageGallery] = useState(0);

  const productImage = PRODUCT_IMAGES[imageGallery];

  const productLenght = PRODUCT_IMAGES.length - 1;

  const handleImage = (index) => setImageGallery(index);

  const handlePrevImage = () => setImageGallery(imageGallery === 0 ? productLenght : imageGallery - 1);

  const handleNextImage = () => setImageGallery(imageGallery === productLenght ? 0 : imageGallery + 1);

  return (
    <Box sx={{ maxWidth: "27.9375rem", flexGrow: 1 }}>
      <Grid
        container
        spacing={3.75}
        columns={4}
        alignItems="center"
        justifyContent="center"
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        <Grid item xs={4}>
          <ImageButton>
            <img src={productImage.src} alt={productImage.alt} />
          </ImageButton>
        </Grid>
        {PRODUCT_THUMBNAIL_IMAGES.map((product, index) => {
          const isSelected = imageGallery === index;

          return (
            <Grid key={product.id} item xs={1}>
              <ImageButton color="info" onClick={() => handleImage(index)} disabled={isSelected}>
                <img src={product.src} alt={product.alt} />
              </ImageButton>
            </Grid>
          );
        })}
      </Grid>
      <Box
        sx={{
          position: "relative",
          display: { xs: "flex", sm: "none" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ImageSlider src={productImage.src} alt={productImage.alt} />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            width: "100%",
            px: 2,
            display: "flex",
            alignItems: "stretch",
            justifyContent: "space-between",
          }}
        >
          <CustomIconButton aria-label="go to previous image" size="large" onClick={handlePrevImage}>
            <PreviousIcon />
          </CustomIconButton>
          <CustomIconButton aria-label="got to next image" size="large" onClick={handleNextImage}>
            <NextIcon />
          </CustomIconButton>
        </Box>
      </Box>
    </Box>
  );
};

/* 
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    <Button color="secondary" onClick={handleOpen}>
        Open modal
    </Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h2 id="modal-modal-title">Text in a modal</h2>
        <p id="modal-modal-description">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
      </Box>
    </Modal>
*/
