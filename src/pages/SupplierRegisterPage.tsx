import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Box, 
  TextField, 
  Button, 
  Grid, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem,
  Stepper,
  Step,
  StepLabel,
  FormControlLabel,
  Checkbox,
  SelectChangeEvent
} from '@mui/material';

const SupplierRegisterPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    razaoSocial: '',
    nomeFantasia: '',
    cnpj: '',
    email: '',
    telefone: '',
    senha: '',
    confirmarSenha: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
    segmentoAtuacao: '',
    websiteEmpresa: '',
    possuiNotaFiscal: false,
    descricao: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name as string]: value
    });
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // Aqui você faria a integração com a API
    alert('Cadastro enviado com sucesso!');
  };

  const steps = ['Informações da Empresa', 'Endereço', 'Detalhes Adicionais'];

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                required
                label="Razão Social"
                name="razaoSocial"
                value={formData.razaoSocial}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                required
                label="Nome Fantasia"
                name="nomeFantasia"
                value={formData.nomeFantasia}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                required
                label="CNPJ"
                name="cnpj"
                value={formData.cnpj}
                onChange={handleChange}
                placeholder="00.000.000/0000-00"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                required
                label="Telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                required
                type="email"
                label="E-mail Corporativo"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                required
                type="password"
                label="Senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                required
                type="password"
                label="Confirmar Senha"
                name="confirmarSenha"
                value={formData.confirmarSenha}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 9 }}>
              <TextField
                fullWidth
                required
                label="Logradouro"
                name="logradouro"
                value={formData.logradouro}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <TextField
                fullWidth
                required
                label="Número"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Complemento"
                name="complemento"
                value={formData.complemento}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                required
                label="Bairro"
                name="bairro"
                value={formData.bairro}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                required
                label="Cidade"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <FormControl fullWidth required>
                <InputLabel>Estado</InputLabel>
                <Select
                  name="estado"
                  value={formData.estado}
                  label="Estado"
                  onChange={handleSelectChange}
                >
                  <MenuItem value="AC">Acre</MenuItem>
                  <MenuItem value="AL">Alagoas</MenuItem>
                  <MenuItem value="AP">Amapá</MenuItem>
                  <MenuItem value="AM">Amazonas</MenuItem>
                  <MenuItem value="BA">Bahia</MenuItem>
                  <MenuItem value="CE">Ceará</MenuItem>
                  <MenuItem value="DF">Distrito Federal</MenuItem>
                  <MenuItem value="ES">Espírito Santo</MenuItem>
                  <MenuItem value="GO">Goiás</MenuItem>
                  <MenuItem value="MA">Maranhão</MenuItem>
                  <MenuItem value="MT">Mato Grosso</MenuItem>
                  <MenuItem value="MS">Mato Grosso do Sul</MenuItem>
                  <MenuItem value="MG">Minas Gerais</MenuItem>
                  <MenuItem value="PA">Pará</MenuItem>
                  <MenuItem value="PB">Paraíba</MenuItem>
                  <MenuItem value="PR">Paraná</MenuItem>
                  <MenuItem value="PE">Pernambuco</MenuItem>
                  <MenuItem value="PI">Piauí</MenuItem>
                  <MenuItem value="RJ">Rio de Janeiro</MenuItem>
                  <MenuItem value="RN">Rio Grande do Norte</MenuItem>
                  <MenuItem value="RS">Rio Grande do Sul</MenuItem>
                  <MenuItem value="RO">Rondônia</MenuItem>
                  <MenuItem value="RR">Roraima</MenuItem>
                  <MenuItem value="SC">Santa Catarina</MenuItem>
                  <MenuItem value="SP">São Paulo</MenuItem>
                  <MenuItem value="SE">Sergipe</MenuItem>
                  <MenuItem value="TO">Tocantins</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <TextField
                fullWidth
                required
                label="CEP"
                name="cep"
                value={formData.cep}
                onChange={handleChange}
                placeholder="00000-000"
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormControl fullWidth required>
                <InputLabel>Segmento de Atuação</InputLabel>
                <Select
                  name="segmentoAtuacao"
                  value={formData.segmentoAtuacao}
                  label="Segmento de Atuação"
                  onChange={handleSelectChange}
                >
                  <MenuItem value="alimenticio">Alimentício</MenuItem>
                  <MenuItem value="farmaceutico">Farmacêutico</MenuItem>
                  <MenuItem value="higiene">Higiene e Limpeza</MenuItem>
                  <MenuItem value="vestuario">Vestuário</MenuItem>
                  <MenuItem value="materialEscolar">Material Escolar</MenuItem>
                  <MenuItem value="moveis">Móveis</MenuItem>
                  <MenuItem value="eletronicos">Eletrônicos</MenuItem>
                  <MenuItem value="outro">Outro</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Website da Empresa"
                name="websiteEmpresa"
                value={formData.websiteEmpresa}
                onChange={handleChange}
                placeholder="https://www.exemplo.com.br"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.possuiNotaFiscal}
                    onChange={handleCheckboxChange}
                    name="possuiNotaFiscal"
                    color="primary"
                  />
                }
                label="Fornece nota fiscal para doações"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                required
                multiline
                rows={4}
                label="Descrição da Empresa e Produtos"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                placeholder="Descreva brevemente sua empresa e quais produtos ou serviços deseja fornecer para doação..."
              />
            </Grid>
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
          Cadastro de Fornecedor
        </Typography>
        
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        
        <form onSubmit={activeStep === steps.length - 1 ? handleSubmit : undefined}>
          {renderStepContent(activeStep)}
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
            >
              Voltar
            </Button>
            
            {activeStep === steps.length - 1 ? (
              <Button 
                type="submit" 
                variant="contained" 
                color="primary"
              >
                Enviar Cadastro
              </Button>
            ) : (
              <Button 
                onClick={handleNext} 
                variant="contained" 
                color="primary"
              >
                Próximo
              </Button>
            )}
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default SupplierRegisterPage; 