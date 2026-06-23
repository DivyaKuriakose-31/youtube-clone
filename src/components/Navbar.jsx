import React, { useState } from 'react';
import { Stack, IconButton, Typography } from '@mui/material';
import { Search } from 'lucide-react';

const Navbar = ({ setSearchTerm }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      setSearchTerm(input);
    }
  };

  return (
    <Stack 
      direction="row" 
      alignItems="center" 
      p={2} 
      sx={{ position: 'sticky', background: '#0f0f0f', top: 0, justifyContent: 'space-between', zIndex: 10 }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        {/* Simple inline Red SVG for the YouTube Logo */}
        <svg viewBox="0 0 24 24" width="32" height="32" fill="red">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
        <Typography variant="h6" fontWeight="bold" sx={{ color: '#fff', display: { xs: 'none', sm: 'block' } }}>
          YouTube
        </Typography>
      </Stack>

      <form onSubmit={handleSubmit} style={{ display: 'flex', borderRadius: 20, border: '1px solid #303030', backgroundColor: '#121212', paddingLeft: 15 }}>
        <input
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ border: 'none', outline: 'none', width: '250px', background: 'transparent', color: '#fff', padding: '10px' }}
        />
        <IconButton type="submit" sx={{ p: '10px', color: '#fff' }}>
          <Search size={18} />
        </IconButton>
      </form>
    </Stack>
  );
};

export default Navbar;