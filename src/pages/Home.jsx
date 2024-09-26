import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  TextField,
} from "@mui/material";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          // backgroundColor: "lightgrey",
          opacity: "0.8",
          height: "100vh", // Ensures it takes up the full view height
          // Ensure this parent container is relatively positioned
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "20%", // Adjust the position as needed
            left: "5%",
            maxWidth: "400px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "#fff",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h3" gutterBottom>
            FUEL DISPENSER
          </Typography>
          <Typography variant="body1" gutterBottom>
            CrudeX is dedicated to offering a broad range of solutions that
            power vehicles, including conventional fuel and clean energy
            products that support gasoline, diesel, Petrol, DEF, etc., across
            the globe.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: "10px" }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>

      {/* Main Content Section */}
      <Container sx={{ mt: 2, backgroundColor: "lightgrey", maxWidth: "lg" }}>
        {/* About Us Section */}
        <Box sx={{ my: 5 }}>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            CrudeX is a leading provider of high precision advanced liquid
            dispensing equipment solutions to fueling and convenience retail
            customers worldwide. CrudeX is dedicated to offering a broad range
            of solutions that power vehicles, including conventional fuel and
            clean energy products that support gasoline, diesel, petrol, DEF,
            etc. across the globe.
          </Typography>
          <Typography variant="body1" paragraph>
            Our product range includes Static Fluid Dispensing System, Mobile
            Fluid Dispensing System, Customize Fluid Dispensing System with ERP
            System, RFID Integration and payment gateway, Diesel Exhaust Fluid
            Making Machines, Diesel Exhaust Fluid Dispensers, Diesel Exhaust
            Fluid ETC.
          </Typography>
          <Typography variant="body1" paragraph>
            CrudeX is recognized as a respected company for its highly
            professional in-built team focusing on the technology development of
            automated fluid dispensing equipment with customization in
            industrial as well as for commercial purposes.
          </Typography>
          <Typography variant="body1" paragraph>
            With over more than 15 years of experience in the industry, the
            company has gained a wealth of expertise and knowledge in associated
            dispensing disciplines. CrudeX has been bringing innovative Fluid
            Dispensing solutions for various industries with an in-house
            professional Technical team comprising of R&D, Design & Production
            engineers.
          </Typography>
        </Box>

        {/* Our Products Section */}
        <Box sx={{ my: 5 }}>
          <Typography variant="h4" gutterBottom>
            Our Products
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <img
                src="path-to-product1-image.jpg"
                alt="Product 1"
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <img
                src="path-to-product2-image.jpg"
                alt="Product 2"
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <img
                src="path-to-product3-image.jpg"
                alt="Product 3"
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box sx={{ backgroundColor: "transperant", py: 6 }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: "#fff" }}
          >
            Reach Us
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                margin="normal"
                required
                // InputLabelProps={{ sx: { color: "#fff" } }}
                sx={{ backgroundColor: "#fff" }}
              />
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                margin="normal"
                sx={{ backgroundColor: "#fff" }}
              />
              <TextField
                fullWidth
                label="Your Email"
                variant="outlined"
                margin="normal"
                required
                sx={{ backgroundColor: "#fff" }}
              />
              <TextField
                fullWidth
                label="Your Company"
                variant="outlined"
                margin="normal"
                sx={{ backgroundColor: "#fff" }}
              />
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                margin="normal"
                required
                sx={{ backgroundColor: "#fff" }}
              />
              <TextField
                fullWidth
                label="Your Question"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                required
                sx={{ backgroundColor: "#fff" }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: "16px" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
