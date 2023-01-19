import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Listar from './pages/ProductList'
import Registrar from './pages/ProductRegistration'
import Editar from './pages/ProductEdit'
import Sobre from './pages/Sobre'

export default () => {

    return (
        <div>
        <Routes>

                <Route exact path="/" element={<Home />} />
                <Route exact path="/listagem" element={<Listar />} />
                <Route exact path="/sobre" element={<Sobre />} />
                <Route path="/registrar" element={<Registrar />} />
                <Route path="/editar" element={<Editar />} />

        </Routes>
        </div>
        
    );
}