import {
  product1,
  product1Thumbnail,
  product2,
  product2Thumbnail,
  product3,
  product3Thumbnail,
  product4,
  product4Thumbnail,
} from "@/assets/images";
import { AddProduct } from "@/components";
import { Box, Chip, Container, ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Lightbox = styled("div")`
  width: 100%;
  max-width: 27.9375rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 30px;
`;

const MainImage = styled("img")`
  border-radius: 15px;
`;

const PRODUCT_IMAGES = [
  {
    id: 1,
    src: product1,
    alt: "Image of Product 1",
  },
  {
    id: 2,
    src: product2,
    alt: "Image of Producto 2",
  },
  {
    id: 3,
    src: product3,
    alt: "Image of Product 3",
  },
  {
    id: 4,
    src: product4,
    alt: "Image of Product 4",
  },
];

const PRODUCT_THUMBNAIL_IMAGES = [
  {
    id: 1,
    src: product1Thumbnail,
    alt: "Thumbnail image of Product 1",
  },
  {
    id: 2,
    src: product2Thumbnail,
    alt: "Thumbnail image of Producto 2",
  },
  {
    id: 3,
    src: product3Thumbnail,
    alt: "Thumbnail image of Product 3",
  },
  {
    id: 4,
    src: product4Thumbnail,
    alt: "Thumbnail image of Product 4",
  },
];

export default function Home({ addToCart }) {
  return (
    <Box component="main">
      <Container maxWidth="lg">
        <Box
          sx={{
            minHeight: "658px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: "1.5rem 2.5rem",
          }}
        >
          <Box
            component="section"
            sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <Lightbox>
              <MainImage src={product1} alt="Sneakers" />
              <ImageList variant="standard" gap={31} cols={4} sx={{ my: 0 }}>
                {PRODUCT_THUMBNAIL_IMAGES.map((image) => (
                  <ImageListItem key={image.id} sx={{ borderRadius: "15px", overflow: "hidden" }}>
                    <img src={image.src} alt={image.src} />
                  </ImageListItem>
                ))}
              </ImageList>
            </Lightbox>
          </Box>
          <Box
            component="section"
            sx={{ width: "100%", display: "flex", alignItems: "center", flexFlow: "column nowrap" }}
          >
            <Box sx={{ maxWidth: "26.5rem", mb: { xs: "1.5rem", md: "2.125rem" } }}>
              <Typography
                component="strong"
                variant="overline"
                gutterBottom
                sx={{
                  color: "secondary.main",
                  fontSize: ".875rem",
                  fontWeight: "fontWeightBold",
                  letterSpacing: 1.12,
                }}
              >
                Sneaker Company
              </Typography>
              <Typography variant="h1" gutterBottom sx={{ fontSize: "2.75rem", fontWeight: "fontWeightBold" }}>
                Fall Limited Edition Sneakers
              </Typography>
              <Typography
                paragraph
                sx={{
                  color: "text.secondary",
                  fontSize: "1rem",
                  fontWeight: "fontWeightMedium",
                  lineHeight: "1.625rem",
                }}
              >
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer
                sole, they'll withstand everything the weather can offer.
              </Typography>
              <Box
                sx={{
                  width: { sm: "100%", md: "173px" },
                  display: "flex",
                  flexFlow: "row wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  rowGap: "10px",
                }}
              >
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} useFlexGap>
                  <Typography
                    component="span"
                    sx={{ fontSize: "1.875rem", fontWeight: "fontWeightBold", lineHeight: "1.625rem" }}
                  >
                    $125.00
                  </Typography>
                  <Chip
                    label="50%"
                    size="small"
                    color="secondary"
                    sx={{
                      height: "1.6875rem",
                      borderRadius: 0.5,
                      bgcolor: "secondary.light",
                      color: "secondary.main",
                      fontSize: "1rem",
                      fontWeight: "fontWeightBold",
                    }}
                  />
                </Stack>
                <Typography
                  component="s"
                  sx={{
                    color: "text.secondary",
                    textDecorationLine: "line-through",
                    fontSize: "1rem",
                    fontWeight: "fontWeightBold",
                    letterSpacing: "0.48px",
                  }}
                >
                  $250.00
                </Typography>
              </Box>
            </Box>
            <AddProduct handleClick={addToCart} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
