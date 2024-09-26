import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";

const AboutSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "transperant",
        // maxWidth:"md",
        width:"md",
        maxHeight:"md",
        color: "#fff",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <Container>
        {/* Section 1 - Text on Left, Image on Right */}
        <Grid container spacing={4} sx={{ marginBottom: "50px" }}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h4" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body1" paragraph>
                CrudeX is a leading provider of high precision advance liquid
                dispensing equipment solutions for fueling and convenience retail outlets worldwide.
                CrudeX is dedicated to offering a broad range of solutions that power vehicles.
              </Typography>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              src="/path-to-image1.jpg" // Replace with your image path
              alt="About Us"
            />
          </Grid>
        </Grid>

        {/* Section 2 - Image on Left, Text on Right */}
        <Grid container spacing={4} sx={{ marginBottom: "50px" }}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              src="/path-to-image2.jpg" // Replace with your image path
              alt="Our Vision"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h4" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body1" paragraph>
                Since the inception of our company, we have been able to build a team
                of skilled professionals to enhance and polish their skills in the most
                efficient manner.
              </Typography>
              <Button variant="contained" color="primary">
                Discover More
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Section 3 - Text on Left, Image on Right */}
        <Grid container spacing={4} sx={{ marginBottom: "50px" }}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h4" gutterBottom>
                Quality Assurance
              </Typography>
              <Typography variant="body1" paragraph>
                Our team is committed to delivering exceptional business results
                for our customers through innovation and continuous improvement.
              </Typography>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              src="/path-to-image3.jpg" // Replace with your image path
              alt="Quality Assurance"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
