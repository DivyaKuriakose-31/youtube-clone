import React, { useState } from 'react';
import { AppBar, Toolbar, Box, InputBase, IconButton, Avatar } from '@mui/material';
import { Menu, Search, Video } from 'lucide-react'; // Swapped to Video to resolve the Rollup error

const Navbar = ({ setSelectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSelectedCategory(searchTerm);
      setSearchTerm('');
    }
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: '#0f0f0f', borderBottom: '1px solid #272727', zIndex: 1201 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', minHeight: '56px' }}>
        
        {/* Left Section: Branding */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton color="inherit">
            <Menu size={20} />
          </IconButton>
          <Box 
            onClick={() => setSelectedCategory('All')} 
            sx={{ display: 'flex', alignItems: 'center', color: '#ff0000', cursor: 'pointer' }}
          >
            <Video size={28} fill="#ff0000" /> {/* Red Video Stream Branding */}
            <Box component="span" sx={{ color: '#ffffff', fontWeight: 'bold', fontSize: '18px', marginLeft: '4px', letterSpacing: '-0.5px' }}>
              YouTube
            </Box>
          </Box>
        </Box>

        {/* Center Section: Controlled Form Input Box */}
        <Box 
          component="form" 
          onSubmit={handleSubmit}
          sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'center' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#121212', border: '1px solid #303030', borderRadius: '40px 0 0 40px', paddingLeft: 2, width: '100%', maxWidth: '500px' }}>
            <InputBase 
              placeholder="Search" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ width: '100%', fontSize: '14px', color: '#ffffff' }} 
            />
          </Box>
          <IconButton 
            type="submit"
            sx={{ backgroundColor: '#222222', border: '1px solid #303030', borderLeft: 'none', borderRadius: '0 40px 40px 0', padding: '6px 20px', color: '#aaaaaa', '&:hover': { backgroundColor: '#333333' } }}
          >
            <Search size={18} />
          </IconButton>
        </Box>

        {/* Right Section: Profile utilities */}
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