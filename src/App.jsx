import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VideoCard from './components/VideoCard';

// Local temporary placeholder dataset
const MOCK_VIDEOS = [
  {
    id: { videoId: 'mock1' },
    snippet: {
      title: 'Build a Responsive React Application with Material UI',
      channelTitle: 'Code Masterclass',
      thumbnails: { high: { url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&q=80' } }
    }
  },
  {
    id: { videoId: 'mock2' },
    snippet: {
      title: 'Advanced CSS Grid and Flexbox Layout Techniques',
      channelTitle: 'Design Essentials',
      thumbnails: { high: { url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&q=80' } }
    }
  },
  {
    id: { videoId: 'mock3' },
    snippet: {
      title: 'JavaScript Closures and Scope Explained Simply',
      channelTitle: 'Dev Tutorials',
      thumbnails: { high: { url: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500&q=80' } }
    }
  },
  {
    id: { videoId: 'mock4' },
    snippet: {
      title: 'Getting Started with Vite and React Ecosystem in 2026',
      channelTitle: 'Web Stack',
      thumbnails: { high: { url: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&q=80' } }
    }
  }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState(MOCK_VIDEOS); // Use mock data initially

  useEffect(() => {
    // Dynamically filter mock items when a category or search changes
    const keyword = searchTerm || selectedCategory;
    const filtered = MOCK_VIDEOS.filter(video => 
      video.snippet.title.toLowerCase().includes(keyword.toLowerCase()) ||
      video.snippet.channelTitle.toLowerCase().includes(keyword.toLowerCase())
    );
    
    // If we match anything, update the state; otherwise keep the list visible
    setVideos(filtered.length > 0 ? filtered : MOCK_VIDEOS);
  }, [selectedCategory, searchTerm]);

  return (
    <Box sx={{ backgroundColor: '#0f0f0f', minHeight: '100vh', color: '#fff' }}>
      <Navbar setSearchTerm={setSearchTerm} />

      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
          <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </Box>

        <Box p={3} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
          <Typography variant="h4" fontWeight="bold" mb={3} sx={{ color: 'white' }}>
            {searchTerm ? `Search Results for: ${searchTerm}` : selectedCategory} <span style={{ color: '#F31503' }}>videos</span>
          </Typography>

          <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
            {videos.map((item, idx) => (
              <Box key={idx}>
                {item.id?.videoId && <VideoCard video={item} />}
              </Box>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default App;