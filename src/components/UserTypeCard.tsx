import React from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button, 
  Box,
  CardActionArea
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { UserType } from '../types';

interface UserTypeCardProps {
  type: UserType;
  title: string;
  description: string;
  imagePath: string;
  route: string;
}

const UserTypeCard: React.FC<UserTypeCardProps> = ({ 
  type, 
  title, 
  description, 
  imagePath,
  route 
}) => {
  const navigate = useNavigate();

  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 20px rgba(0,0,0,0.2)',
        },
      }}
    >
      <CardActionArea 
        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
        onClick={() => navigate(route)}
      >
        <CardMedia
          component="img"
          height="180"
          image={imagePath}
          alt={title}
        />
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
            {description}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto' }}>
            <Button 
              variant="contained" 
              color="primary"
              fullWidth
            >
              Selecionar
            </Button>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UserTypeCard; 