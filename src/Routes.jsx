import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './pages/ProductList'
import Registrar from './pages/ProductRegistration'
import Editar from './pages/ProductEdit'

export default () => {

    return (
        <div>
        <Routes>

                <Route exact path="/" element={<Home />} />
                <Route path="/registrar" element={<Registrar />} />
                <Route path="/editar" element={<Editar />} />

        </Routes>
        </div>
        
    );
}