import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { useState, useEffect} from "react";
import "./ProductList.css"
import "./img/filazerologo.png"



const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
function formatMoney(number) {
  return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function ProductList() {

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const [products, setProducts] = useState([
		{ product_id: 2, name: "", price: 2, description: "", imagepath: ""}
	]);

  useEffect(() => {
		axios.get("http://localhost:5000/produtos")
			.then((response) => setProducts(response.data))
	});

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
        <img src="filazerologo.png" alt="Logo" />
        <h2>Fila Zero</h2>
      </center>
      
      <a href="/#/registrar"><span class="material-symbols-outlined">add</span><span>Registrar um produto</span></a>
      <a href="#"><span class="material-symbols-outlined">info</span><span>Conheça-nos</span></a>
      <a href="#"><span class="material-symbols-outlined">computer</span><span>Painel</span></a>
      <a href="#"><span class="material-symbols-outlined">computer</span><span>Painel</span></a>
      <a href="#"><span class="material-symbols-outlined">computer</span><span>Painel</span></a>
      
    </div>
    
    <div className="listagem">
    <Box sx={{ flexGrow: 1, maxWidth: 752 }} >

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2, }} variant="h3" component="div">
            Listagem de Produtos
          </Typography>
          <Demo>
            <List dense={dense}>
              {products.map((product) => (
                <ListItem
                  key={product.product_id}
                  secondaryAction={
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="src/assets/230446.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={product.name}
                    secondary={formatMoney(product.price/100)}
                  />
                </ListItem>
              ))}
            </List>
          </Demo>
        </Grid>
      </Grid>
      
    </Box>
    </div>

    </div>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </body>
    
  );
}
