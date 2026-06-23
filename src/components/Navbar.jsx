import React from 'react';
import { AppBar, Toolbar, Box, InputBase, IconButton, Avatar } from '@mui/material';
import { Menu, Search, Youtube } from 'lucide-react';

const Navbar = () => {
  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: '#0f0f0f', borderBottom: '1px solid #272727', zIndex: 1201 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'between', minHeight: '56px' }}>
        
        {/* Left Section: Logo controls */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton color="inherit">
            <Menu size={20} />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', color: '#ff0000', cursor: 'pointer' }}>
            <Youtube size={28} fill="#ff0000" />
            <Box component="span" sx={{ color: '#ffffff', fontWeight: 'bold', fontSize: '18px', marginLeft: '4px', letterSpacing: '-0.5px' }}>
              YouTube
            </Box>
          </Box>
        </Box>

        {/* Center Section: Search query box */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#121212', border: '1px solid #303030', borderRadius: '40px 0 0 40px', paddingLeft: 2, width: '100%', maxWidth: '500px' }}>
            <InputBase placeholder="Search" sx={{ width: '100%', fontSize: '14px', color: '#ffffff' }} />
          </Box>
          <IconButton sx={{ backgroundColor: '#222222', border: '1px solid #303030', borderLeft: 'none', borderRadius: '0 40px 40px 0', padding: '6px 20px', color: '#aaaaaa', '&:hover': { backgroundColor: '#333333' } }}>
            <Search size={18} />
          </IconButton>
        </Box>

        {/* Right Section: User utilities channel profile */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar sx={{ width: 32, height: 32, backgroundColor: '#ec407a', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer' }}>
            NI
          </Avatar>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;