import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import UserTypeCard from '../components/UserTypeCard';
import { UserType } from '../types';
import { homeStyles } from '../styles/HomePageStyles';

// Imagens temporárias até termos imagens reais
const PLACEHOLDER_IMAGES = {
  [UserType.RECEIVER]: 'https://images.pexels.com/photos/6591162/pexels-photo-6591162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  [UserType.SUPPLIER]: 'https://images.pexels.com/photos/4440892/pexels-photo-4440892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  [UserType.DONOR]:    'https://images.pexels.com/photos/7654184/pexels-photo-7654184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
};

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={homeStyles.container}>
      <Box sx={homeStyles.headerBox}>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={homeStyles.mainTitle}
        >
          Tecnologia em financiamento coletivo
        </Typography>
        <Typography 
          variant="h5" 
          color="text.secondary"
          sx={homeStyles.subTitle}
        >
          Conectando doadores, fornecedores e pessoas em necessidades para fazer a diferença global.
        </Typography>
      </Box>

      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom 
        sx={homeStyles.sectionTitle}
      >
        Como você deseja participar?
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Box >
          <UserTypeCard
            type={UserType.RECEIVER}
            title="Receber Doações"
            description="Inscreva sua instituição ou projeto para receber doações. Liste os produtos que você precisa com seus respectivos códigos NCM."
            imagePath={PLACEHOLDER_IMAGES[UserType.RECEIVER]}
            route="/register/receiver"
          />
        </Box>

        <Box>
          <UserTypeCard
            type={UserType.SUPPLIER}
            title="Fornecedor"
            description="Cadastre-se como fornecedor e ofereça produtos com seus códigos NCM para serem adquiridos por doadores e distribuídos para os necessitados."
            imagePath={PLACEHOLDER_IMAGES[UserType.SUPPLIER]}
            route="/register/supplier"
          />
        </Box>

        <Box>
          <UserTypeCard
            type={UserType.DONOR}
            title="Doador"
            description="Ajude diretamente escolhendo produtos para doar. Você pode visualizar o progresso de cada campanha e a diferença que sua contribuição está fazendo."
            imagePath={PLACEHOLDER_IMAGES[UserType.DONOR]}
            route="/register/donor"
          />
        </Box>
      </Grid>
    </Container>
  );
};

export default HomePage; 