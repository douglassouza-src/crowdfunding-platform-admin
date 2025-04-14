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
  Chip,
  alpha,
  styled
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import TokenIcon from '@mui/icons-material/Token';

// Estilização com tema cyberpunk
const CyberpunkTableContainer = styled(TableContainer)(({ theme }) => ({
  backgroundColor: '#0a0e17',
  border: '1px solid #00ffff',
  borderRadius: '0',
  boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)',
  marginBottom: theme.spacing(4),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.03) 0%, transparent 100%)',
    pointerEvents: 'none',
  }
}));

const CyberpunkTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: '#131b2e',
  '& th': {
    borderBottom: '2px solid #00ffff',
    color: '#00ffff',
    fontSize: '0.95rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  }
}));

const CyberpunkTableRow = styled(TableRow)(({ theme }) => ({
  borderBottom: '1px solid rgba(0, 255, 255, 0.15)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: alpha('#00ffff', 0.05),
    transform: 'translateX(4px)',
    '& td': {
      color: '#ffffff',
    }
  }
}));

const CyberpunkTableCell = styled(TableCell)(({ theme }) => ({
  color: '#b0b0b0',
  borderBottom: 'none',
  fontSize: '0.9rem',
  padding: theme.spacing(1.5, 2),
}));

const GlowingCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: 0,
  backgroundColor: '#131b2e',
  boxShadow: '0 0 15px rgba(0, 255, 255, 0.2)',
  border: '1px solid #00ffff',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 0 25px rgba(0, 255, 255, 0.4)',
    transform: 'translateY(-3px)',
  }
}));

const GlowingText = styled(Typography)(({ theme }) => ({
  color: '#00ffff',
  textShadow: '0 0 5px rgba(0, 255, 255, 0.5)',
}));

interface SmartContract {
  id: string;
  name: string;
  address: string;
  network: string;
  value: string;
  status: 'ativo' | 'pendente' | 'concluído' | 'erro';
  type: 'doação' | 'distribuição' | 'verificação';
  date: string;
  gasUsed: string;
}

const MOCK_CONTRACTS: SmartContract[] = [
  { 
    id: '0x78a9F1', 
    name: 'Doação Emergencial RS', 
    address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e', 
    network: 'Ethereum', 
    value: '5.25 ETH', 
    status: 'ativo', 
    type: 'doação',
    date: '08/06/2023',
    gasUsed: '0.0045 ETH'
  },
  { 
    id: '0xaF311c', 
    name: 'Distribuição Alimentos', 
    address: '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b', 
    network: 'Polygon', 
    value: '320 ETH', 
    status: 'ativo', 
    type: 'distribuição',
    date: '12/06/2023',
    gasUsed: '0.24 ETH'
  },
  { 
    id: '0xe591cB', 
    name: 'Verificação Beneficiários', 
    address: '0xfe21b4542c5a48ce05b3841b9e7bd43fb4aa8e1c', 
    network: 'Arbitrum', 
    value: '0.45 ETH', 
    status: 'concluído', 
    type: 'verificação',
    date: '01/06/2023',
    gasUsed: '0.0025 ETH'
  },
  { 
    id: '0x9cA44D', 
    name: 'Doação Mobília Vítimas', 
    address: '0x9876a5432bcdef1234567890abcdef1234567890', 
    network: 'Optimism', 
    value: '2.8 ETH', 
    status: 'ativo', 
    type: 'doação',
    date: '15/06/2023',
    gasUsed: '0.0032 ETH'
  },
  { 
    id: '0xb5dE47', 
    name: 'Distribuição Recursos', 
    address: '0x123456789abcdef0123456789abcdef012345678', 
    network: 'Polygon', 
    value: '850 ETH', 
    status: 'pendente', 
    type: 'distribuição',
    date: '18/06/2023',
    gasUsed: '0.15 ETH'
  },
  { 
    id: '0x7F19aB', 
    name: 'Verificação Identidades', 
    address: '0xabcdef123456789abcdef123456789abcdef1234', 
    network: 'Ethereum', 
    value: '1.2 ETH', 
    status: 'erro', 
    type: 'verificação',
    date: '05/06/2023',
    gasUsed: '0.0075 ETH'
  },
  { 
    id: '0xdE810f', 
    name: 'Doação Comunitária', 
    address: '0x0123456789abcdef0123456789abcdef01234567', 
    network: 'Base', 
    value: '3.5 ETH', 
    status: 'ativo', 
    type: 'doação',
    date: '19/06/2023',
    gasUsed: '0.0025 ETH'
  },
  { 
    id: '0x3bC72e', 
    name: 'Distribuição Emergencial', 
    address: '0xfedcba9876543210fedcba9876543210fedcba98', 
    network: 'Avalanche', 
    value: '450 AVAX', 
    status: 'concluído', 
    type: 'distribuição',
    date: '03/06/2023',
    gasUsed: '0.32 AVAX'
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'ativo':
      return { color: '#00ff9d', bg: alpha('#00ff9d', 0.1) };
    case 'pendente':
      return { color: '#ffcc00', bg: alpha('#ffcc00', 0.1) };
    case 'concluído':
      return { color: '#00ffff', bg: alpha('#00ffff', 0.1) };
    case 'erro':
      return { color: '#ff0066', bg: alpha('#ff0066', 0.1) };
    default:
      return { color: '#b0b0b0', bg: alpha('#b0b0b0', 0.1) };
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'doação':
      return <TokenIcon sx={{ fontSize: 18, color: '#00ff9d' }} />;
    case 'distribuição':
      return <SecurityIcon sx={{ fontSize: 18, color: '#ffcc00' }} />;
    case 'verificação':
      return <CodeIcon sx={{ fontSize: 18, color: '#00ffff' }} />;
    default:
      return null;
  }
};

const ContractsPage: React.FC = () => {
  // Valores mockados para os cards
  const totalContracts = MOCK_CONTRACTS.length;
  const totalValue = '1.925.20 ETH';
  const activeContracts = MOCK_CONTRACTS.filter(c => c.status === 'ativo').length;

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Box mb={4} sx={{ borderLeft: '4px solid #00ffff', pl: 2 }}>
        <GlowingText variant="h4"  gutterBottom>
          CONTRATOS INTELIGENTES
        </GlowingText>
        <Typography variant="subtitle1" color="#b0b0b0">
          Registro descentralizado de doações e distribuições
        </Typography>
      </Box>
      
      {/* Cards Resumo */}
      <Grid container spacing={2} sx={{ mb: 5 }}>
      <Grid size={{ xs: 12, md:4 }}>
      <GlowingCard sx={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <CodeIcon sx={{ fontSize: 40, color: '#00ffff', mr: 1 }} />
              <Typography variant="h6" component="h2" color="#00ffff">
                Total de Contratos
              </Typography>
            </Box>
            <Typography variant="h3" component="p" fontWeight="bold" color="#ffffff">
              {totalContracts}
            </Typography>
          </GlowingCard>
        </Grid>
        
        <Grid size={{ xs: 12, md: 4 }}>
        <GlowingCard sx={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <TokenIcon sx={{ fontSize: 40, color: '#00ff9d', mr: 1 }} />
              <Typography variant="h6" component="h2" color="#00ff9d">
                Valor Total
              </Typography>
            </Box>
            <Typography variant="h5" component="p" fontWeight="bold" color="#ffffff">
              {totalValue}
            </Typography>
          </GlowingCard>
        </Grid>
        
        <Grid size={{ xs: 12, md: 4 }}>
        <GlowingCard sx={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <SecurityIcon sx={{ fontSize: 40, color: '#ffcc00', mr: 1 }} />
              <Typography variant="h6" component="h2" color="#ffcc00">
                Contratos Ativos
              </Typography>
            </Box>
            <Typography variant="h3" component="p" fontWeight="bold" color="#ffffff">
              {activeContracts}
            </Typography>
          </GlowingCard>
        </Grid>
      </Grid>
      
      {/* Tabela de Contratos */}
      <Box mb={3} sx={{ borderLeft: '4px solid #00ffff', pl: 2 }}>
        <GlowingText variant="h5" gutterBottom>
          LISTAGEM DE CONTRATOS
        </GlowingText>
      </Box>
      
      <CyberpunkTableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="tabela de contratos">
          <CyberpunkTableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nome do Contrato</TableCell>
              <TableCell>Endereço</TableCell>
              <TableCell>Rede</TableCell>
              <TableCell align="center">Valor</TableCell>
              <TableCell align="center">Tipo</TableCell>
              <TableCell align="center">Data</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </CyberpunkTableHead>
          <TableBody>
            {MOCK_CONTRACTS.map((contract) => {
              const statusStyle = getStatusColor(contract.status);
              
              return (
                <CyberpunkTableRow key={contract.id}>
                  <CyberpunkTableCell sx={{ color: '#00ffff', fontFamily: 'monospace' }}>
                    {contract.id}
                  </CyberpunkTableCell>
                  <CyberpunkTableCell>{contract.name}</CyberpunkTableCell>
                  <CyberpunkTableCell sx={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>
                    {`${contract.address.substring(0, 8)}...${contract.address.substring(36)}`}
                  </CyberpunkTableCell>
                  <CyberpunkTableCell>{contract.network}</CyberpunkTableCell>
                  <CyberpunkTableCell align="center" sx={{ color: '#00ff9d' }}>
                    {contract.value}
                  </CyberpunkTableCell>
                  <CyberpunkTableCell align="center">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {getTypeIcon(contract.type)}
                      <Typography variant="body2" sx={{ ml: 0.5 }}>
                        {contract.type.charAt(0).toUpperCase() + contract.type.slice(1)}
                      </Typography>
                    </Box>
                  </CyberpunkTableCell>
                  <CyberpunkTableCell align="center">{contract.date}</CyberpunkTableCell>
                  <CyberpunkTableCell align="center">
                    <Chip 
                      label={contract.status.charAt(0).toUpperCase() + contract.status.slice(1)} 
                      size="small"
                      sx={{ 
                        backgroundColor: statusStyle.bg, 
                        color: statusStyle.color,
                        border: `1px solid ${statusStyle.color}`,
                        fontWeight: 'bold',
                        '&:hover': {
                          backgroundColor: alpha(statusStyle.color, 0.2),
                        }
                      }}
                    />
                  </CyberpunkTableCell>
                </CyberpunkTableRow>
              );
            })}
          </TableBody>
        </Table>
      </CyberpunkTableContainer>
      
      <Box mt={4} p={2} sx={{ 
        backgroundColor: '#131b2e',
        border: '1px solid #00ffff',
        borderLeft: '4px solid #00ffff',
        boxShadow: '0 0 15px rgba(0, 255, 255, 0.15)'
      }}>
        <Typography variant="subtitle2" color="#b0b0b0">
          <span style={{ color: '#00ffff' }}>Nota:</span> Todos os contratos são implementados seguindo o padrão ERC-1155 
          com multi-assinatura para garantir transparência e rastreabilidade de todas as doações. 
          O código fonte está disponível para auditoria pública.
        </Typography>
      </Box>
    </Container>
  );
};

export default ContractsPage; 