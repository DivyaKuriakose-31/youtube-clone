import React from 'react';
import { Stack, Button } from '@mui/material';
import { Home, Compass, PlaySquare, Music, Gamepad, Tv } from 'lucide-react';

const categories = [
  { name: 'New', icon: <Home size={18} /> },
  { name: 'Trending', icon: <Compass size={18} /> },
  { name: 'Coding', icon: <PlaySquare size={18} /> },
  { name: 'Music', icon: <Music size={18} /> },
  { name: 'Gaming', icon: <Gamepad size={18} /> },
  { name: 'Movies', icon: <Tv size={18} /> },
];

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '92vh' },
      flexDirection: { md: 'column' },
      backgroundColor: '#0f0f0f',
      px: { sx: 0, md: 2 },
      minWidth: '200px'
    }}
  >
    {categories.map((category) => (
      <Button
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory ? '#f00' : 'transparent',
          color: '#fff',
          justifyContent: 'flex-start',
          borderRadius: '10px',
          margin: '5px 0',
          textTransform: 'none',
          padding: '10px 20px'
        }}
        key={category.name}
        startIcon={category.icon}
      >
        <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>
          {category.name}
        </span>
      </Button>
    ))}
  </Stack>
);

export default Sidebar;