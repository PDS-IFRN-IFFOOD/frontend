import './ProductRegistration.css'

//imports de components
import Title from '../components/TitleComponent/Title'
// import Button from '../components/ButtonComponent/Button'
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Input from '../components/InputComponent/Input'
import Description from '../components/DescriptionComponent/DescriptionComponent'
import { SubTitle } from '../components/SubTitleComponent/SubTitle'
import { ContentCopy } from '@mui/icons-material';

function ProductRegistration() {

  return (

    <div id='tela'>

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
      <Button variant="contained">
        Cadastrar
      </Button>
      </Grid>
      </Grid>
      </Box>

      </Grid>

      </div>
  )
}

export default ProductRegistration
