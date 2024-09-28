import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1e1e1e',
        color: 'white',
        padding: '20px 80px', // Adjust left and right padding for spacing
        marginTop: 'auto',
      }}
    >
      <Grid container spacing={3}>
        {/* Explore Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#f4f4f4' }}>
            Explore
          </Typography>
          <Link
            href="#"
            sx={{
              color: '#007bff', // Blue color for links
              textDecoration: 'none', // Remove underline
              '&:hover': {
                textDecoration: 'none', // Add underline on hover
              },
            }}
            display="block"
          >
            Home
          </Link>
          <Link
            href="#"
            sx={{
              color: '#007bff',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'none',
              },
            }}
            display="block"
          >
            Our Company
          </Link>
          <Link
            href="#"
            sx={{
              color: '#007bff',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'none',
              },
            }}
            display="block"
          >
            Contact Us
          </Link>
          <Link
            href="#"
            sx={{
              color: '#007bff',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'none',
              },
            }}
            display="block"
          >
            Privacy Policy
          </Link>
        </Grid>

        {/* Get In Touch Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#f4f4f4' }}>
            Get In Touch
          </Typography>
          <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', color: '#f4f4f4' }}>
            <EmailIcon sx={{ marginRight: 1, color: '#007bff' }} /> support@crudex.com
          </Typography>
          <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', color: '#f4f4f4' }}>
            <PhoneIcon sx={{ marginRight: 1, color: '#007bff' }} /> +91 8000118051
          </Typography>
          {/* <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', color: '#f4f4f4' }}>
            <WhatsAppIcon sx={{ marginRight: 1, color: '#007bff' }} /> +91 9558357688
          </Typography> */}
        </Grid>

        {/* Company Info Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#f4f4f4' }}>
            CRUDEX PRIVATE LIMITED
          </Typography>
          <Typography variant="body2" sx={{ color: '#f4f4f4' }}>
            Registered office: 3rd Floor, Rain Plaza Complex, Gotri Rd, nr. Shell Petrol Pump Krishna Nursing Home, Gotri, Vadodara, Gujarat 390021
 
          </Typography>
          {/* <Typography variant="body2" mt={2} sx={{ color: '#f4f4f4' }}>
            Factory Address: F-35, PHASE-2 INDUSTRIAL AREA, RAM NAGAR, CHANDAULI, 221008, India
          </Typography> */}
        </Grid>
      </Grid>

      {/* Logo Section */}
      <Box textAlign="center" mt={3}>
        <Typography variant="h4" color="primary">
          CRUDEX
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
