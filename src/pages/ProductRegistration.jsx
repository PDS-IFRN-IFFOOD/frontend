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
    <body>
    <div className='container'>
    <header>
      <div className="left">
        <h3>Fila <span>Zero</span></h3>
      </div>
      <div className="right">
        <a href="#" className="sair_btn">Sair</a>
      </div>
    </header>

  

    <div className="sidebar">
      <center>
        <h2>Fila Zero</h2>
      </center>
      
      <a href="/#/registrar"><span class="material-symbols-outlined">home</span><span>Início</span></a>
      <a href="/#/registrar"><span class="material-symbols-outlined">add</span><span>Registrar um produto</span></a>
      <a href="#/sobre"><span class="material-symbols-outlined">info</span><span>Conheça-nos</span></a>
      <a href="#/editar"><span class="material-symbols-outlined">edit</span><span>Editar</span></a>
      <a href="#"><span class="material-symbols-outlined">person</span><span>Usuário</span></a>
      <a href="#/listagem"><span class="material-symbols-outlined">list</span><span>Lista de produtos</span></a>
      
    </div>
    
    <div className="listagem">

    <ThemeProvider theme={theme}>
      <Grid
        container spacing={4}
        direction="column"


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





          <Grid item xs={18} sx={{paddingLeft: 15 }} >
                <Button color='secondary' variant='contained' size='small' sx={{ color: 'black'}}>
                  <Camera size={20} color="black" weight="regular" />
                  Upload da imagem
                </Button>
          </Grid>

          <Grid item xs={18} sx={{paddingLeft: 15, paddingTop: 5 }} >
                <Button type='submit' color="primary" variant="contained" size='large' sx={{ color: 'white', fontSize: 14 }}>
                  CONFIRMAR
                </Button>
          </Grid>
          </form>

        </Grid>
          </Box>
        </Grid>




    </ThemeProvider>
    </div>

</div>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>

  )
}


export default ProductRegistration
