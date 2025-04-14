import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip
} from '@mui/material';
import MoneyIcon from '@mui/icons-material/Money';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

interface DonationItem {
  id: number;
  name: string;
  category: 'mobilia' | 'alimento';
  totalNeeded: number;
  collected: number;
  peopleWaiting: number;
  priority: 'alta' | 'media' | 'baixa';
}

const MOCK_DONATION_ITEMS: DonationItem[] = [
  { id: 1, name: 'Cama de solteiro', category: 'mobilia', totalNeeded: 500, collected: 300, peopleWaiting: 200, priority: 'alta' },
  { id: 2, name: 'Armário', category: 'mobilia', totalNeeded: 300, collected: 100, peopleWaiting: 200, priority: 'media' },
  { id: 3, name: 'Mesa de jantar', category: 'mobilia', totalNeeded: 250, collected: 50, peopleWaiting: 200, priority: 'baixa' },
  { id: 4, name: 'Sofá', category: 'mobilia', totalNeeded: 300, collected: 105, peopleWaiting: 150, priority: 'media' },
  { id: 5, name: 'Cadeira', category: 'mobilia', totalNeeded: 1000, collected: 60, peopleWaiting: 400, priority: 'alta' },
  { id: 6, name: 'Geladeira', category: 'mobilia', totalNeeded: 200, collected: 5, peopleWaiting: 105, priority: 'alta' },
  { id: 7, name: 'Fogão', category: 'mobilia', totalNeeded: 205, collected: 10, peopleWaiting: 100, priority: 'alta' },
  { id: 8, name: 'Colchão', category: 'mobilia', totalNeeded: 500, collected: 25, peopleWaiting: 205, priority: 'alta' },
  { id: 9, name: 'Guarda-roupa', category: 'mobilia', totalNeeded: 300, collected: 20, peopleWaiting: 100, priority: 'media' },
  { id: 10, name: 'Mesa de escritório', category: 'mobilia', totalNeeded: 150, collected: 5, peopleWaiting: 100, priority: 'baixa' },
  { id: 11, name: 'Arroz (5kg)', category: 'alimento', totalNeeded: 2000, collected: 120, peopleWaiting: 800, priority: 'alta' },
  { id: 12, name: 'Feijão (1kg)', category: 'alimento', totalNeeded: 2000, collected: 100, peopleWaiting: 1000, priority: 'alta' },
  { id: 13, name: 'Óleo de cozinha', category: 'alimento', totalNeeded: 1500, collected: 90, peopleWaiting: 600, priority: 'alta' },
  { id: 14, name: 'Açúcar (5kg)', category: 'alimento', totalNeeded: 1000, collected: 60, peopleWaiting: 400, priority: 'media' },
  { id: 15, name: 'Farinha de trigo (1kg)', category: 'alimento', totalNeeded: 100, collected: 50, peopleWaiting: 500, priority: 'media' },
  { id: 16, name: 'Café (500g)', category: 'alimento', totalNeeded: 1000, collected: 40, peopleWaiting: 600, priority: 'media' },
  { id: 17, name: 'Leite em pó (400g)', category: 'alimento', totalNeeded: 1500, collected: 60, peopleWaiting: 900, priority: 'alta' },
  { id: 18, name: 'Macarrão (500g)', category: 'alimento', totalNeeded: 1500, collected: 75, peopleWaiting: 705, priority: 'media' },
  { id: 19, name: 'Sal (1kg)', category: 'alimento', totalNeeded: 800, collected: 40, peopleWaiting: 400, priority: 'baixa' },
  { id: 20, name: 'Extrato de tomate', category: 'alimento', totalNeeded: 1000, collected: 50, peopleWaiting: 500, priority: 'baixa' },
  { id: 21, name: 'Fubá (1kg)', category: 'alimento', totalNeeded: 800, collected: 30, peopleWaiting: 500, priority: 'media' },
  { id: 22, name: 'Sardinha em lata', category: 'alimento', totalNeeded: 1500, collected: 70, peopleWaiting: 800, priority: 'media' },
  { id: 23, name: 'Achocolatado (400g)', category: 'alimento', totalNeeded: 800, collected: 30, peopleWaiting: 500, priority: 'baixa' },
  { id: 24, name: 'Biscoito (400g)', category: 'alimento', totalNeeded: 1000, collected: 40, peopleWaiting: 600, priority: 'baixa' },
  { id: 25, name: 'Cesta básica completa', category: 'alimento', totalNeeded: 500, collected: 15, peopleWaiting: 350, priority: 'alta' },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'alta':
      return '#ffcdd2'; // Light red
    case 'media':
      return '#fff9c4'; // Light yellow
    case 'baixa':
      return '#c8e6c9'; // Light green
    default:
      return 'transparent';
  }
};

const getPriorityChipColor = (priority: string) => {
  switch (priority) {
    case 'alta':
      return 'error';
    case 'media':
      return 'warning';
    case 'baixa':
      return 'success';
    default:
      return 'default';
  }
};

const DashboardPage: React.FC = () => {
  // Valores mockados para os cards
  const totalReceived24h = 'R$ 15.250,00';
  const totalDonated24h = 'R$ 12.750,00';
  const totalFamiliesImpacted = 145;

  return (
    <Container sx={{ mt: 4, mb: 4}}>
      <Typography variant="h4" component="h1" gutterBottom>
        Nossos resultados
      </Typography>
      
      {/* Cards Financeiros */}
      <Grid container spacing={1} sx={{ mb: 4 }}>
        <Box sx={{ width: '33%', p: 1 }}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 2,
              borderLeft: '4px solid #2196f3',
            }}
            elevation={1}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <MoneyIcon sx={{ fontSize: 40, color: '#2196f3', mr: 1 }} />
              <Typography variant="h5" component="h2">
                Total Recebido (24h)
              </Typography>
            </Box>
            <Typography variant="h3" component="p" fontWeight="bold">
              {totalReceived24h}
            </Typography>
          </Paper>
        </Box>
        
        <Box sx={{ width: '33%', p: 1 }}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 2,
              borderLeft: '4px solid #4caf50',
            }}
            elevation={1}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <VolunteerActivismIcon sx={{ fontSize: 40, color: '#4caf50', mr: 1 }} />
              <Typography variant="h5" component="h2">
                Total Doado (24h)
              </Typography>
            </Box>
            <Typography variant="h3" component="p" fontWeight="bold">
              {totalDonated24h}
            </Typography>
          </Paper>
        </Box>
        
        <Box sx={{ width: '32%', p: 1 }}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 2,
              borderLeft: '4px solid #f44336',
            }}
            elevation={1}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <FamilyRestroomIcon sx={{ fontSize: 40, color: '#f44336', mr: 1 }} />
              <Typography variant="h5" component="h2">
                Famílias Impactadas
              </Typography>
            </Box>
            <Typography variant="h3" component="p" fontWeight="bold">
              {totalFamiliesImpacted}
            </Typography>
          </Paper>
        </Box>
      </Grid>
      
      {/* Tabela de Doações */}
      <Typography variant="h5" component="h2" gutterBottom>
        Lista de Itens para Doação
      </Typography>
      
      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="tabela de doações">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#3a3a3a' }}>
              <TableCell sx={{ color: 'white' }}>Item</TableCell>
              <TableCell sx={{ color: 'white' }}>Categoria</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Pessoas na Fila</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Quantidade Recebida</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Quantidade Necessária</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Faltando</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Prioridade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {MOCK_DONATION_ITEMS.map((item) => (
              <TableRow 
                key={item.id}
                sx={{ 
                  backgroundColor: getPriorityColor(item.priority),
                  '&:hover': {
                    backgroundColor: `${getPriorityColor(item.priority)}aa`,
                  },
                  color: 'black'
                }}
              >
                <TableCell component="th" scope="row" sx={{ color: 'black' }}>
                  {item.name}
                </TableCell>
                <TableCell sx={{ color: 'black' }}>
                  {item.category === 'mobilia' ? 'Mobília' : 'Alimento'}
                </TableCell>
                <TableCell align="center" sx={{ color: 'black' }}>{item.peopleWaiting}</TableCell>
                <TableCell align="center" sx={{ color: 'black' }}>R$ {item.collected},00</TableCell>
                <TableCell align="center" sx={{ color: 'black' }}>R$ {item.totalNeeded},00</TableCell>
                <TableCell align="center" sx={{ color: 'black' }}>R$ {item.totalNeeded - item.collected},00</TableCell>
                <TableCell align="center" sx={{ color: 'black' }}>
                  <Chip 
                    label={item.priority.charAt(0).toUpperCase() + item.priority.slice(1)} 
                    color={getPriorityChipColor(item.priority) as any}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DashboardPage; 