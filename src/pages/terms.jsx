import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import './termandcondition.css'; // For the background styling

const TermsAndConditions = () => {
  return (
    <Box className="terms-background">
      <Container maxWidth="lg">
        <Box className="terms-overlay">
          <Typography variant="h2" align="center" gutterBottom style={{ color: '#fff' }}>
            Terms & Conditions
          </Typography>
          <Typography variant="h5" gutterBottom style={{ color: '#fff', fontWeight: 'bold' }}>
            Product Specifications:
          </Typography>
          <Typography variant="body1" paragraph style={{ color: '#fff' }}>
            Product Design and manufacture as per the technical specifications, features, and functionalities
            of the fuel dispensers. Any customization available to customers and the process for requesting and
            approving customizations only after acceptance by the company.
          </Typography>

          <Typography variant="h4" align="center" gutterBottom style={{ color: '#fff' }}>
          Product Availability and Lead Time
          </Typography>

          
          <Typography variant="body1" paragraph style={{ color: '#fff' }}>
            An estimated lead time for processing orders, manufacturing the product, and delivering it to the
            customer. Note that lead times may vary based on factors such as customization given, raw material availability,
            and logistical considerations.
          </Typography>
          

          <Typography variant="h5" gutterBottom style={{ color: '#fff', fontWeight: 'bold' }}>
          Pricing and Payment Terms: 
          </Typography>
          <Typography variant="body1" paragraph style={{ color: '#fff' }}>
          The pricing structure for the product, including the base price, and any additional charges for customization or optional features, taxes, shipping costs will be charge extra.
          </Typography>
          <Typography variant="h5" gutterBottom style={{ color: '#fff', fontWeight: 'bold' }}>
          Payment Method:
          </Typography>
          <Typography variant="body1" paragraph style={{ color: '#fff' }}>
          payment methods accepted via cheque, Net Banking etc within payment deadlines, and consequences for late or failed payments, such as order processing delays or cancellation of the order.
          </Typography>


          <Typography variant="h5" gutterBottom style={{ color: '#fff', fontWeight: 'bold' }}>
            Order Placement and Acceptance:
          </Typography>
          <Typography variant="body1" paragraph style={{ color: '#fff' }}>
          Outline the process for customers to place orders for fuel dispensers, including order forms, pricing, and payment terms. Describe the acceptance criteria for orders, such as order confirmation, payment verification, and production scheduling. Production and An estimated standard lead time for manufacturing fuel dispensers are 3 to 4 weeks and may varies subject to raw material availability
          </Typography>


          <Typography variant="h5" gutterBottom style={{ color: '#fff', fontWeight: 'bold' }}>
            Delivery and Installation:
          </Typography>
          <Typography variant="body1" paragraph style={{ color: '#fff' }}>
          Delivery initiated after full payments, and responsibilities for handling and installation in scope of company.
          </Typography>


          <Typography variant="h5" gutterBottom style={{ color: '#fff', fontWeight: 'bold' }}>
            Warranty and Support:
          </Typography>
          <Typography variant="body1" paragraph style={{ color: '#fff' }}>
          The warranty coverage provided for fuel dispensers, including the duration of the warranty period, covered components is 1 year from the date of manufacturing. Company will be provide customer support services available, such as technical assistance, troubleshooting, and maintenance guidelines.
          </Typography>

          <Typography variant="h5" gutterBottom style={{ color: '#fff', fontWeight: 'bold' }}>
            Quality Assurance: 
          </Typography>
          <Typography variant="body1" paragraph style={{ color: '#fff' }}>
          Company will meet ISO standard for quality control processes implemented during manufacturing to ensure that fuel dispensers meet industry standards and customer requirements. Company meet all the testing, inspection, and certification of fuel dispensers before shipment.
          </Typography>
          

          <Typography variant="h4" align="center" gutterBottom style={{ color: '#fff' }}>
          Intellectual Property Rights
          </Typography>
           
          <Typography variant="body1" paragraph style={{ color: '#fff' }}>
          All the ownership rights and licensing terms for any intellectual property, designs, or proprietary technology associated with the fuel dispensers Include provisions for protecting confidential information and trade secrets exchanged during the manufacturing process is under the company.
          </Typography>

          <Typography variant="h4" align="center" gutterBottom style={{ color: '#fff'}}>
          Termination and Amendment:
          </Typography>

          <Typography variant="body1" paragraph style={{ color: '#fff' }}>
          Either party may terminate the manufacturing agreement, such as breach of contract, force majeure events, or mutual agreement.
          </Typography>

          <Typography variant="h5" gutterBottom style={{ color: '#fff', fontWeight: 'bold' }}>
          Termination and Amendment:
          </Typography>
          <Typography variant="body1" paragraph style={{ color: '#fff' }}>
          Company will meet ISO standard for quality control processes implemented during manufacturing to ensure that fuel dispensers meet industry standards and customer requirements. Company meet all the testing, inspection, and certification of fuel dispensers before shipment.
          </Typography>

          {/* Add more sections in the same format as needed */}
        </Box>
      </Container>
    </Box>
  );
};

export default TermsAndConditions;
