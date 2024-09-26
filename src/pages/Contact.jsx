import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    subject: '',
    question: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); // Here you can integrate an API call to send the form data
    // You might want to reset the form or give feedback to the user here
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundImage: `url('/path-to-your-background-image.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '600px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '40px',
          borderRadius: '10px',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ color: '#fff', marginBottom: '20px', fontWeight: 'bold' }}
        >
          Contact Us
        </Typography>

        <Grid container spacing={2}>
          {/* Input Fields with handleChange */}
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Your Name*"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={formData.name}
              sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="phone"
              label="Phone Number"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={formData.phone}
              sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Your Email*"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={formData.email}
              sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="company"
              label="Your Company"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={formData.company}
              sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="subject"
              label="Subject*"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={formData.subject}
              sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="question"
              label="Your Question*"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              onChange={handleChange}
              value={formData.question}
              sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ borderRadius: '5px', padding: '10px', fontWeight: 'bold' }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactUs;
