import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: '300px' }, boxShadow: 'none', borderRadius: '12px', backgroundColor: '#0f0f0f' }}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{ width: '100%', height: 180, borderRadius: '12px', objectFit: 'cover' }}
      />
      <CardContent sx={{ backgroundColor: '#0f0f0f', height: '106px', px: 1, pt: 1 }}>
        {/* Main Video Title - Changed color to pure white */}
        <Typography variant="subtitle1" fontWeight="bold" sx={{ color: '#FFFFFF', lineHeight: '1.3rem', mb: 0.5 }}>
          {snippet?.title?.slice(0, 60) || "Video Title"}
        </Typography>
        
        {/* Channel Name - Changed color to light gray for high contrast readability */}
        <Typography variant="subtitle2" sx={{ color: '#AAAAAA', fontWeight: 'bold' }}>
          {snippet?.channelTitle || "Channel Name"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;