import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import './termandcondition.css'; // For the background styling

const Refund = () => {
  return (
    <Box className="terms-background">
      <Container maxWidth="md">
        <Box className="terms-overlay">
          <Typography variant="h2" align="center" gutterBottom style={{ color: '#fff' }}>
            Refund Policy
          </Typography>
          <Typography variant="h5" gutterBottom style={{ color: '#fff', fontWeight: 'bold' }}>
          Defective Equipment:
          </Typography>
          <Typography variant="body1" paragraph style={{ color: '#fff' }}>
          Refund or replacement will be will be not cover under provided for defective fuel dispensers. This may include manufacturing defects, malfunctioning components, or failures to meet specified quality standards.

          </Typography>


          <Typography variant="h5" gutterBottom style={{ color: '#fff', fontWeight: 'bold' }}>
          Warranty Coverage: 
          </Typography>
          <Typography variant="body1" paragraph style={{ color: '#fff' }}>
          Warranty coverage provided for fuel dispensers of 1 year from the date of manufacturing, which cover e.g. electronics parts and mechanical parts.
          </Typography>

          <Typography variant="h5" gutterBottom style={{ color: '#fff', fontWeight: 'bold' }}>
          Return and Exchange Policy:
          </Typography>
          <Typography variant="body1" paragraph style={{ color: '#fff' }}>
          Return and Exchange includes requirements for returning the equipment in its original condition and packaging, as well as any restocking fees or shipping costs. for return or exchange of a fuel dispenser.
          </Typography>


          <Typography variant="h5" gutterBottom style={{ color: '#fff', fontWeight: 'bold' }}>
          Refund Eligibility: 
          </Typography>
          <Typography variant="body1" paragraph style={{ color: '#fff' }}>
          Purchaser must specify information such as proof of purchase, compliance with installation and usage guidelines, and adherence to maintenance requirements for refunds.

          </Typography>
          <Typography variant="h5" gutterBottom style={{ color: '#fff', fontWeight: 'bold' }}>
          Legal Compliance: 
          </Typography>
          <Typography variant="body1" paragraph style={{ color: '#fff' }}>
          Refund policy complies with relevant laws and regulations governing product warranties, consumer rights, and refund practices in jurisdiction of Varanasi jurisdiction.
          </Typography>
          <Typography variant="h5" gutterBottom style={{ color: '#fff', fontWeight: 'bold' }}>
          Return Eligibility: 
          </Typography>
          <Typography variant="body1" paragraph style={{ color: '#fff' }}>
          No returns will normally be accepted after receipt of parts and after materials are ordered for parts, with exception of warranty items.
          </Typography>

          <Typography variant="h5" gutterBottom style={{ color: '#fff', fontWeight: 'bold' }}>
          Condition to Return:
          </Typography>
          <Typography variant="body1" paragraph style={{ color: '#fff' }}>
          If the Product is found to be defective or malfunctioning, customers may be eligible for a refund or exchange depending on the terms outlined by the company.
          </Typography>

          

          {/* Add more sections in the same format as needed */}
        </Box>
      </Container>
    </Box>
  );
};

export default Refund;
