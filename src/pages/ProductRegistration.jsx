//imports de components
import Title from '../components/TitleComponent/Title'
import { SubTitle } from '../components/SubTitleComponent/SubTitle'
import Description from '../components/DescriptionComponent/DescriptionComponent'


// componentes Material UI
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function ProductRegistration() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#FFA301',
      },
      secondary: {
        main: '#F2CD00',
      },
      neutral: {
        main: '#C2C2C2',
      },
    },
  });

  return (
    
      
    <ThemeProvider theme={theme}>
      <Grid 
        container spacing={3}
        direction="column"
        justifyContent="center"
        alignItems="center"
        paddingTop= "100px"
      >

        <Grid item xs={12}>
        <Title 
          title="Cadastrar produto" />
          </Grid> 
        
        <Grid item xs={12}>
        <SubTitle
          text="Para cadastrar seus produtos," />
          </Grid> 

        <Grid item xs={12}>
        <Description
          description="Digite os dados do seu produto para que você aumente suas vendas." />
          </Grid>

          <Box>
          <Grid 
          container spacing={3}
          direction="column"
          justifyContent="center"
          alignItems="center"
          paddingTop= "100px"
          >
          
        <Grid item xs={12}>
        <TextField id="outlined-basic" label="Nome" variant="outlined" />
        </Grid> 

        <Grid item xs={12}>
        <TextField id="outlined-basic" label="Preço " variant="outlined" />
        </Grid> 

        <Grid item xs={12}>
        <TextField id="outlined-basic" label="Descrição" variant="outlined" />
        </Grid> 

        <Grid item xs={12}>
        
          <Button color="primary"  variant="contained">
          
            CADASTRAR
          </Button>
        
        
        </Grid>
        </Grid>
        </Box>

        </Grid>
        </ThemeProvider>
        
  )
}

export default ProductRegistration
