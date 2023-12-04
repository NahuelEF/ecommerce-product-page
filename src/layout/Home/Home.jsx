import { AddProduct, Description, ImageGallery } from "@/components";
import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";

const Section = styled(Box)({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexFlow: "column nowrap",
});

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
          <Section component="section">
            <ImageGallery />
          </Section>
          <Section component="section">
            <Description />
            <AddProduct handleClick={addToCart} />
          </Section>
        </Box>
      </Container>
    </Box>
  );
}
