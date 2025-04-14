import { SxProps, Theme } from '@mui/material';

export const homeStyles: Record<string, SxProps<Theme>> = {
  container: {
    py: 8,
    animation: 'fadeIn 0.8s ease-in-out',
  },
  headerBox: {
    textAlign: 'center',
    mb: 6,
  },
  mainTitle: {
    fontWeight: 'bold',
    mb: 2,
    color: 'primary.main',
  },
  subTitle: {
    maxWidth: 800,
    mx: 'auto',
    mb: 4,
    color: 'text.secondary',
  },
  sectionTitle: {
    mb: 4,
    fontWeight: 'medium',
    textAlign: 'center',
    color: 'primary.light',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    maxWidth: 345,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s, box-shadow 0.3s',
    backgroundColor: 'background.paper',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 20px rgba(0,0,0,0.6)',
    },
  },
  cardActionArea: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  cardMedia: {
    height: 180,
  },
  cardContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'background.paper',
  },
  cardTitle: {
    fontWeight: 'bold',
    color: 'primary.light',
  },
  cardDescription: {
    mb: 2,
    flexGrow: 1,
    color: 'text.secondary',
  },
  cardButtonBox: {
    display: 'flex',
    justifyContent: 'center',
    mt: 'auto',
  },
}; 