import React from 'react';
import { Box, Typography, List, ListItem, Grid } from '@mui/material';

const StaticFluidDispensingSystem = () => {
  return (
    <Box
      sx={{
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height to center vertically
        backgroundColor: 'transparent', // Transparent background
        paddingBottom:'250px',
        paddingTop:'50px'
        
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={10}>
          {/* Main container with full transparent background */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '30px',
              backgroundColor: 'rgba(0, 0, 0, 0.6)', // Transparent black background for the entire box
              borderRadius: '10px',
              border: '1px solid #fff', // Optional border for styling
              width: '80%', // Adjust the width if necessary
              maxWidth: '1200px', // Optional maximum width
            }}
          >
            {/* Left side: List */}
            <Box>
              <Typography variant="h4" sx={{ color: 'white', marginBottom: '20px' }}>
                Static Fluid Dispensing System
              </Typography>
              <List sx={{ color: 'white' }}>
                <ListItem>• High Accuracy Flow Meter for Measurement</ListItem>
                <ListItem>• 5-40 L/M Flowrate</ListItem>
                <ListItem>• 40 LPM Flow Capacity</ListItem>
                <ListItem>• Mounting Type: Floor Mounted</ListItem>
                <ListItem>• Power Coated Body (Seven Tank Process)</ListItem>
                <ListItem>• Memory Backup Of Almost One Year</ListItem>
                <ListItem>• Works On Different Protocols: CAN, UART, RS232, RS485</ListItem>
              </List>
            </Box>

            {/* Right side: Box with image and background */}
            <Box
              sx={{
                width: '500px', // Exact width
                height: '300px', // Exact height
                backgroundImage: 'url(../assets/PetrolPump.jpeg)', // Replace with your image path
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '8px',
                position: 'relative',
                // border: '2px solid white',     // Optional white border to match the style
              }}
            >
              {/* Optional: Overlaying text on image box */}
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  textAlign: 'center',
                  position: 'absolute',
                  bottom: 10,
                  left: 0,
                  right: 0,
                  padding: '10px',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black overlay on text
                  borderRadius: '0 0 8px 8px',
                }}
              >
                Static Fluid Dispensing System
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* New content added here */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '40px', // Space from the previous content
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={10}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '30px',
                backgroundColor: 'rgba(0, 0, 0, 0.6)', // Transparent black background for the entire box
                borderRadius: '10px',
                border: '1px solid #fff', // Optional border for styling
                width: '80%', // Adjust the width if necessary
                maxWidth: '1200px', // Optional maximum width
              }}
            >
              {/* Left side: Features */}
              <Box sx={{ marginRight: '20px' }}>
                <Typography variant="h4" sx={{ color: 'white', marginBottom: '20px' }}>
                  Features and Specifications
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" sx={{ color: 'white' }}>
                      Features
                    </Typography>
                    <List sx={{ color: 'white' }}>
                      <ListItem>• Cumulative Display for Totaliser (Shift / Day / Month / Year)</ListItem>
                      <ListItem>• Inbuilt Thermal Printer For Print slip</ListItem>
                      <ListItem>• Interim lock facility</ListItem>
                      <ListItem>• Able to detect error with buzzer indicator</ListItem>
                      <ListItem>• Tank level indication on display</ListItem>
                      <ListItem>• Magnetic door lock</ListItem>
                      <ListItem>• Audio: Speaker & Buzzer output for various function & error</ListItem>
                      <ListItem>• Backlit display, Easy to use in night</ListItem>
                      <ListItem>• Audio Broadcasting</ListItem>
                      <ListItem>• Data Backup: 1 Year One year data, Two types of Totalisers.</ListItem>
                      <ListItem>• Shift settlements</ListItem>
                      <ListItem>• Dispenser Type: DEF/Diesel/Bio Diesel/Petrol/other</ListItem>
                      <ListItem>• Density Senser to define Density of liquid</ListItem>
                      <ListItem>• Dispensing Type: Normal / Manual</ListItem>
                    </List>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" sx={{ color: 'white' }}>
                      Specifications
                    </Typography>
                    <List sx={{ color: 'white' }}>
                      <ListItem>• Input power supply: 230V / 3A</ListItem>
                      <ListItem>• Flow Rate: 5-40 L/M</ListItem>
                      <ListItem>• Hose Size: 20 mm EPDM</ListItem>
                      <ListItem>• Multi-Functional 6x6 keypad</ListItem>
                      <ListItem>• Larger segment LCD display with capable of display Up to 20 digits with 12 decimal points</ListItem>
                      <ListItem>• Production Capacity: 50 units per month</ListItem>
                      <ListItem>• Delivery Time: 2 weeks / ready delivery</ListItem>
                      <ListItem>• Available with multiple options: 1 Nozzle 1 Pump / 2 Nozzle 2 Pump / 4 Nozzle 4 Pump</ListItem>
                      <ListItem>• Electronics Protection: OVP / OCP / 2 KV Surge</ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default StaticFluidDispensingSystem;
