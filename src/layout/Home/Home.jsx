import { AddProduct, ImageGallery } from "@/components";
import { Box, Chip, Container, Stack, Typography } from "@mui/material";

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
            <ImageGallery />
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
