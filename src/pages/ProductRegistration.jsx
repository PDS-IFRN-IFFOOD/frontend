//imports de components
import Title from '../components/TitleComponent/Title'
import { SubTitle } from '../components/SubTitleComponent/SubTitle'
import Description from '../components/DescriptionComponent/DescriptionComponent'
import './ProductRegistration.css'

// componentes Material UI
import Grid from '@mui/material/Grid';
import { accordionSummaryClasses, Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

//import de icones
import { Camera, ArrowCircleLeft } from 'phosphor-react'

//axios
import axios from 'axios';

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
    typography: {
      fontFamily: [
        'Josefin Sans',
        'sans-serif',
      ].join(','),
    },
  });

  const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    margin: '20px',
  }));

  const submitHandler = (event) => {
    event.preventDefault();
    const productName = event.target.productName.value;
    const productPrice = event.target.productPrice.value;
    const productDescription = event.target.productDescription.value;
    const imagepath = "MANOCU";
    axios.post("http://localhost:5000/produtos", {
      productDescription,
      productPrice,
      imagepath,
      productName

    })
  }

  return (

    <ThemeProvider theme={theme}>
      <Grid
        container spacing={4}
        direction="column"
        justifyContent="center"
        alignItems="center"

      >

        <Grid item xs={12} sx={{
          backgroundColor: '#FFA301', padding: 6, width: 428, height: 90
          , display: 'flex', gap: 1, flexDirection: 'row'
        }} >
          <div className='toptitle'>
            <ArrowCircleLeft size={40} color="white" weight="bold" />
            <Title title="Cadastrar Produto" />
          </div>
        </Grid>


        <Grid item xs={12} sx={{ height: 90, marginTop: 3, width: 390 }} >
          <SubTitle sx={{ fontFamily: 'Josefin Sans' }}
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

            <form action="" onSubmit={submitHandler}>
              <Grid rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ width: 350 }}  >
                <Grid  >
                  <Item>
                    <TextField id="productName" label="Nome" variant="outlined" size='normal' fullWidth />
                  </Item>
                </Grid>

                <Grid  >
                  <Item>
                    <TextField id="productPrice" label="Preço " variant="outlined" fullWidth />
                  </Item>
                </Grid>

                <Grid  >
                  <Item>
                    <TextField id="productDescription" label="Descrição" variant="outlined" fullWidth multiline rows={4} />
                  </Item>
                </Grid>

              </Grid>


            </form>

          </Grid>


          <Grid item xs={18} sx={{ textAlign: 'center' }} >
                <Button color='secondary' variant='contained' size='small' sx={{ color: 'black'}}>
                  <Camera size={20} color="black" weight="regular" />
                  Upload da imagem
                </Button>
          </Grid>

          <Grid item xs={18} sx={{padding: 4, textAlign: 'center' }} >
                <Button type='submit' color="primary" variant="contained" size='large' sx={{ color: 'white', fontSize: 14 }}>
                  CONFIRMAR
                </Button>
          </Grid>
          </Box>
        </Grid>




    </ThemeProvider>

  )
}


export default ProductRegistration
