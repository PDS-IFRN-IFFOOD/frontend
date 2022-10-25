//imports de components
import Title from '../components/TitleComponent/Title'
import { SubTitle } from '../components/SubTitleComponent/SubTitle'
import Description from '../components/DescriptionComponent/DescriptionComponent'

// componentes Material UI
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


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

  const Item = styled(Paper)(({ theme }) => ({ 
    textAlign: 'center',
    margin: '20px',
  }));

  return (
      
    <ThemeProvider theme={theme}>
      <Grid 
        container spacing={4}
        direction="column"
        justifyContent="center"
        alignItems="center"
        
      >
        
        <Grid item xs={12} sx={{ backgroundColor: '#FFA301', padding: 6, width: 428, height: 107}} >
          <Title 
            title="Cadastrar produto" />
          </Grid> 


        <Grid item xs={12} sx={{height: 90, marginTop: 3, width: 390}} >
        <SubTitle
          text="Para cadastrar seus produtos," />
        <Description
          description="Digite os dados do seu produto para que você aumente suas vendas." />
          </Grid>

          <Box>
          <Grid 
            container spacing={3}
            direction="column"
            justifyContent="center"
            alignItems="center"
            padding={4}
            
          >
          
        <Grid  rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{width:350}}  >

          <Grid  >
            <Item>
              <TextField id="outlined-basic" label="Nome" variant="outlined" size='normal' fullWidth />
            </Item>
          </Grid>

          <Grid  >
            <Item>
              <TextField id="outlined-basic" label="Preço "   variant="outlined" fullWidth/>
            </Item>
          </Grid>

          <Grid  >
            <Item>
              <TextField id="outlined-basic" label="Descrição" variant="outlined" fullWidth />
            </Item>
          </Grid>        
        </Grid>
        <Grid item xs={12}>
        
          <Button color="primary"  variant="contained" size='large' sx={{color: 'white', fontSize: 14}}>
          
            CONFIRMAR
          </Button>
        
        
        </Grid>
        </Grid>
        </Box>

        </Grid>
        </ThemeProvider>
        
  )
}

export default ProductRegistration
