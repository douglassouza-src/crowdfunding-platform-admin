import React, { ReactNode } from 'react';
import { 
  Container, 
  Box, 
  CssBaseline,
  Link,
  Typography
} from '@mui/material';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Navbar />

      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      <Box 
        component="footer" 
        sx={{ 
          py: 3, 
          px: 2, 
          mt: 'auto', 
          backgroundColor: (theme) => theme.palette.background.paper,
          borderTop: '1px solid rgba(255, 255, 255, 0.12)'
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            <Link color="primary" href="/">
              Crowdfunding Platform
            </Link>{' '}
            {new Date().getFullYear()}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout; 