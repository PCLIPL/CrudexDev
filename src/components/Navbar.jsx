import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = [
  {
    name: 'Home',
    path: '/home',
  },
  {
    name: 'About Us',
    path: '/about',
  },
  {
    name: 'Products',
    path: '/products',
    submenu: [
      { name: 'Static Fluid Dispensing System', path: '/static-fluid' },
      { name: 'Mobile Fluid Dispensing System', path: '/mobile-fluid' },
      { name: 'Smart Fluid Dispensing System', path: '/smart-fluid' },
      { name: 'Diesel Exhaust Fluid Making System', path: '/def-making' },
      { name: 'Diesel Exhaust Fluid Dispenser', path: '/def-dispenser' },
      { name: 'Diesel Exhaust Fluid', path: '/def-fluid' },
    ],
  },
  {
    name: 'Contact Us',
    path: '/contact',
  },
  {
    name: 'Privacy Policy',
    path: '/policy',
  },
  {
    name: 'Refund Policy',
    path: '/refund',
  },
  {
    name: 'Terms And Condition',
    path: '/terms',
  },
  {
    name: 'Sign In',
    path: '/signin',
  },
];

const settings = [{ name: 'Profile' }, { name: 'Account' }, { name: 'Dashboard' }, { name: 'Logout' }];

function ResponsiveAppBar() {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleSubmenuOpen = (submenuName) => {
    setActiveSubmenu(submenuName);
  };

  const handleSubmenuClose = () => {
    setActiveSubmenu(null);
  };

  return (
    <AppBar position="sticky" sx={{ mr: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <div
                key={page.name}
                style={{ position: 'relative' }}
                onMouseEnter={() => page.submenu && handleSubmenuOpen(page.name)}
                onMouseLeave={handleSubmenuClose}
              >
                <Button
                  component={Link}
                  to={page.path}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>

                {page.submenu && activeSubmenu === page.name && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      backgroundColor: 'white',
                      boxShadow: 3,
                      zIndex: 10,
                    }}
                  >
                    {page.submenu.map((subitem) => (
                      <MenuItem
                        key={subitem.name}
                        component={Link}
                        to={subitem.path}
                        sx={{ color: 'black' }}
                      >
                        {subitem.name}
                      </MenuItem>
                    ))}
                  </Box>
                )}
              </div>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
 