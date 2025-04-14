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
  Radio,
  RadioGroup,
  Divider,
  SelectChangeEvent
} from '@mui/material';

const DonorRegisterPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    tipoPessoa: 'fisica',
    nome: '',
    cpfCnpj: '',
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
    interesseDoacao: '',
    comoConheceu: '',
    preferenciaContato: 'email'
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

  const steps = ['Informações Pessoais', 'Endereço', 'Preferências'];

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <FormControl component="fieldset">
                <Typography variant="subtitle1" gutterBottom>Tipo de Pessoa</Typography>
                <RadioGroup
                  row
                  name="tipoPessoa"
                  value={formData.tipoPessoa}
                  onChange={handleChange}
                >
                  <FormControlLabel value="fisica" control={<Radio />} label="Pessoa Física" />
                  <FormControlLabel value="juridica" control={<Radio />} label="Pessoa Jurídica" />
                </RadioGroup>
              </FormControl>
            </Grid>
            
            <Grid size={{ xs: 12 }}>
              <Divider sx={{ my: 1 }} />
            </Grid>
            
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                required
                label={formData.tipoPessoa === 'fisica' ? "Nome Completo" : "Razão Social"}
                name="nome"
                value={formData.nome}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                required
                label={formData.tipoPessoa === 'fisica' ? "CPF" : "CNPJ"}
                name="cpfCnpj"
                value={formData.cpfCnpj}
                onChange={handleChange}
                placeholder={formData.tipoPessoa === 'fisica' ? "000.000.000-00" : "00.000.000/0000-00"}
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
                label="E-mail"
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
            <Grid size={{ xs: 12 }}>
              <FormControl fullWidth required>
                <InputLabel>Áreas de Interesse para Doação</InputLabel>
                <Select
                  name="interesseDoacao"
                  value={formData.interesseDoacao}
                  label="Áreas de Interesse para Doação"
                  onChange={handleSelectChange}
                >
                  <MenuItem value="saude">Saúde</MenuItem>
                  <MenuItem value="educacao">Educação</MenuItem>
                  <MenuItem value="assistenciaSocial">Assistência Social</MenuItem>
                  <MenuItem value="meioAmbiente">Meio Ambiente</MenuItem>
                  <MenuItem value="animais">Proteção aos Animais</MenuItem>
                  <MenuItem value="cultura">Cultura</MenuItem>
                  <MenuItem value="desastres">Desastres Naturais</MenuItem>
                  <MenuItem value="qualquer">Qualquer Área</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <FormControl fullWidth>
                <InputLabel>Como conheceu a plataforma?</InputLabel>
                <Select
                  name="comoConheceu"
                  value={formData.comoConheceu}
                  label="Como conheceu a plataforma?"
                  onChange={handleSelectChange}
                >
                  <MenuItem value="redesSociais">Redes Sociais</MenuItem>
                  <MenuItem value="indicacao">Indicação de Amigos</MenuItem>
                  <MenuItem value="busca">Busca na Internet</MenuItem>
                  <MenuItem value="noticia">Notícia/Reportagem</MenuItem>
                  <MenuItem value="evento">Evento</MenuItem>
                  <MenuItem value="outro">Outro</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>Preferência de Contato</Typography>
              <RadioGroup
                row
                name="preferenciaContato"
                value={formData.preferenciaContato}
                onChange={handleChange}
              >
                <FormControlLabel value="email" control={<Radio />} label="E-mail" />
                <FormControlLabel value="telefone" control={<Radio />} label="Telefone" />
                <FormControlLabel value="whatsapp" control={<Radio />} label="WhatsApp" />
              </RadioGroup>
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
          Cadastro de Doador
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

export default DonorRegisterPage; 