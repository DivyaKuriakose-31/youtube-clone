import React, { useState } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

// Create a custom dark theme matching the YouTube dark style
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0f0f0f',
      paper: '#0f0f0f',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
  },
});

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* Top Navigation Bar */}
        <Navbar />
        
        {/* Main Body Area */}
        <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden', marginTop: '56px' }}>
          {/* Left Navigation Menu Drawer */}
          <Sidebar 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
          />
          {/* Main Video Content Grid Pane */}
          <Feed selectedCategory={selectedCategory} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;