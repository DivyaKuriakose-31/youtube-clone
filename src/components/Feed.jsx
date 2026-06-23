import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Avatar } from '@mui/material';
import { CheckCircle2 } from 'lucide-react';
import { mockVideos } from '../mockData';

const Feed = ({ selectedCategory }) => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3, overflowY: 'auto', backgroundColor: '#0f0f0f' }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
        {mockVideos.map((video) => (
          <Card key={video.id} sx={{ backgroundColor: 'transparent', backgroundImage: 'none', boxShadow: 'none', borderRadius: 0, cursor: 'pointer' }}>
            
            {/* Thumbnail Box */}
            <Box sx={{ position: 'relative', width: '100%', paddingTop: '56.25%', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#272727' }}>
              <CardMedia component="img" image={video.thumbnail} alt={video.title} sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <Box sx={{ position: 'absolute', bottom: 8, right: 8, backgroundColor: 'rgba(0,0,0,0.8)', color: '#ffffff', padding: '2px 4px', borderRadius: '4px', fontSize: '12px', fontWeight: '500' }}>
                {video.duration}
              </Box>
            </Box>

            {/* Video Details Content area */}
            <CardContent sx={{ display: 'flex', padding: '12px 0 0 0', '&:last-child': { paddingBottom: 0 } }}>
              <Avatar sx={{ width: 36, height: 36, marginRight: '12px', backgroundColor: '#00acc1', fontSize: '14px', fontWeight: 'bold' }}>
                {video.channelAvatar}
              </Avatar>
              <Box>
                <Typography sx={{ fontSize: '14px', fontWeight: '600', color: '#ffffff', lineHeight: '20px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '4px' }}>
                  {video.title}
                </Typography>
                <Typography sx={{ fontSize: '12px', color: '#aaaaaa', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {video.channelName}
                  <CheckCircle2 size={12} fill="#aaaaaa" color="#0f0f0f" />
                </Typography>
                <Typography sx={{ fontSize: '12px', color: '#aaaaaa' }}>
                  {video.views} • {video.timestamp}
                </Typography>
              </Box>
            </CardContent>

          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Feed;