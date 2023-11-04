import product1 from "@/assets/images/image-product-1.jpg";
import product1thumbnail from "@/assets/images/image-product-1-thumbnail.jpg";
import product2thumbnail from "@/assets/images/image-product-2-thumbnail.jpg";
import product3thumbnail from "@/assets/images/image-product-3-thumbnail.jpg";
import product4thumbnail from "@/assets/images/image-product-4-thumbnail.jpg";
import {
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  ImageList,
  ImageListItem,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import { CartIcon, MinusIcon, PlusIcon } from "./assets/icons";
import { Header } from "./layout";
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
const IMAGES_PRODUCT = [
  {
    id: 1,
    src: product1thumbnail,
    alt: "Image product 1 thumbnail",
  },
  {
    id: 2,
    src: product2thumbnail,
    alt: "Image product 2 thumbnail",
  },
  {
    id: 3,
    src: product3thumbnail,
    alt: "Image product 3 thumbnail",
  },
  {
    id: 4,
    src: product4thumbnail,
    alt: "Image product 4 thumbnail",
  },
];

export default function App() {
  return (
    <>
      <Header />
      <Box component="main">
        <Container maxWidth="lg">
          <Box sx={{ minHeight: "658px", display: "flex", alignItems: "center", gap: "24px 40px" }}>
            <Box
              component="section"
              sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <Lightbox>
                <MainImage src={product1} alt="Sneakers" />
                <ImageList variant="standard" gap={31} cols={4} sx={{ my: 0 }}>
                  {IMAGES_PRODUCT.map((image) => (
                    <ImageListItem key={image.id} sx={{ borderRadius: "15px", overflow: "hidden" }}>
                      <img src={image.src} alt={image.src} />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Lightbox>
            </Box>
            <Box component="section" sx={{ width: "100%", display: "flex", flexFlow: "column nowrap" }}>
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
                  sole, they’ll withstand everything the weather can offer.
                </Typography>
                <Box
                  sx={{
                    width: { xs: "100%", md: "173px" },
                    display: "flex",
                    flexFlow: "row wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: { md: "10px" },
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
                      color="warning"
                      sx={{
                        height: "27px",
                        borderRadius: "5px",
                        backgroundColor: "secondary.light",
                        color: "secondary.main",
                        fontSize: "1rem",
                        fontWeight: "fontWeightBold",
                      }}
                    />
                  </Stack>
                  <Typography
                    component="s"
                    sx={{
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
              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexFlow: "row wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "15px",
                }}
              >
                <Stack
                  direction="row"
                  alignItems="stretch"
                  justifyContent="space-between"
                  sx={{
                    width: { xs: "100%", md: "9.8125rem" },
                    padding: ".7188rem 1rem",
                    backgroundColor: "primary.light",
                    borderRadius: "10px",
                  }}
                >
                  <IconButton aria-label="remove a product" disableRipple>
                    <MinusIcon />
                  </IconButton>
                  <CustomInput
                    id="count"
                    type="number"
                    readOnly
                    defaultValue="0"
                    fullWidth
                    inputProps={{ "aria-label": "number of products" }}
                  />
                  <IconButton aria-label="add a product" disableRipple>
                    <PlusIcon />
                  </IconButton>
                </Stack>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<CartIcon />}
                  size="large"
                  sx={{
                    width: { xs: "100%", md: "auto" },
                    padding: ".8438rem 4.8125rem",
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: "fontWeightBold",
                    "& .MuiButton-startIcon": {
                      marginRight: "1rem",
                    },
                  }}
                >
                  Add to cart
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
