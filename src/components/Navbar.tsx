import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Button,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SmartContractIcon from '@mui/icons-material/AccountBalanceWallet';
import { Link as RouterLink } from 'react-router-dom';
import logoGiv3 from '../assets/giv3.png';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar>
        <Box 
          component={RouterLink} 
          to="/"
          sx={{ 
            flexGrow: 1, 
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none'
          }}
        >
          <Box
            component="img"
            src={logoGiv3}
            alt="Giv3 Logo"
            sx={{ 
              height: 40,
              mr: 1
            }}
          />
        </Box>
        
        {isMobile ? (
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem 
                onClick={handleClose} 
                component={RouterLink} 
                to="/dashboard"
              >
                <DashboardIcon sx={{ mr: 1 }} /> Painel
              </MenuItem>
              <MenuItem 
                onClick={handleClose} 
                component={RouterLink} 
                to="/contracts"
              >
                <SmartContractIcon sx={{ mr: 1 }} /> Contratos
              </MenuItem>
              <MenuItem 
                onClick={handleClose} 
                component={RouterLink} 
                to="/register/receiver"
              >
                Receber Doações
              </MenuItem>
              <MenuItem 
                onClick={handleClose} 
                component={RouterLink} 
                to="/register/supplier"
              >
                Fornecedor
              </MenuItem>
              <MenuItem 
                onClick={handleClose} 
                component={RouterLink} 
                to="/register/donor"
              >
                Doador
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Box>
            <Button 
              color="inherit" 
              component={RouterLink} 
              to="/dashboard"
              sx={{ mr: 1 }}
              startIcon={<DashboardIcon />}
            >
              Painel
            </Button>
            <Button 
              color="inherit" 
              component={RouterLink} 
              to="/contracts"
              sx={{ mr: 1 }}
              startIcon={<SmartContractIcon />}
            >
              Contratos
            </Button>
            <Button 
              color="inherit" 
              component={RouterLink} 
              to="/register/receiver"
              sx={{ mr: 1 }}
            >
              Receber Doações
            </Button>
            <Button 
              color="inherit" 
              component={RouterLink} 
              to="/register/supplier"
              sx={{ mr: 1 }}
            >
              Fornecedor
            </Button>
            <Button 
              color="inherit" 
              component={RouterLink} 
              to="/register/donor"
            >
              Doador
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 