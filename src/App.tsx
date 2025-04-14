import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import AppRoutes from './routes';
import theme from './styles/theme';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <AppRoutes />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
