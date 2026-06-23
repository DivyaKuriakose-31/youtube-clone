import React from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Code, Blocks, FileJson, Terminal, Cpu, Binary, Sigma, HelpCircle } from 'lucide-react';

const categories = [
  { name: 'All', icon: Home },
  { name: 'Coding', icon: Code },
  { name: 'React', icon: Blocks },
  { name: 'JavaScript', icon: FileJson },
  { name: 'Python', icon: Terminal },
  { name: 'Algorithms', icon: Cpu },
  { name: 'Physics', icon: Binary },
  { name: 'Mathematics', icon: Sigma },
  { name: 'Science', icon: HelpCircle },
];

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Box sx={{ width: '72px', backgroundColor: '#0f0f0f', borderRight: '1px solid #272727', overflowY: 'auto' }}>
      <List disablePadding>
        {categories.map((category) => {
          const IconComponent = category.icon;
          const isSelected = selectedCategory === category.name;
          
          return (
            <ListItemButton
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '12px 0', minHeight: '74px', backgroundColor: isSelected ? '#272727' : 'transparent', '&:hover': { backgroundColor: '#272727' } }}
            >
              <ListItemIcon sx={{ color: '#ffffff', minWidth: 'auto', marginBottom: '4px' }}>
                <IconComponent size={20} strokeWidth={isSelected ? 2.5 : 1.75} />
              </ListItemIcon>
              <ListItemText 
                primary={category.name} 
                primaryTypographyProps={{ fontSize: '10px', fontWeight: isSelected ? 'bold' : 'normal', textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '64px' }} 
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};

export default Sidebar;