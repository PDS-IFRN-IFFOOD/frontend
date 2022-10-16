import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

//imports de components
import Title from './components/TitleComponent/Title'
import Button from './components/ButtonComponent/Button'
import Input from './components/InputComponent/Input'

function App() {

  return (
   <div>
      <Title 
        title="Cadastrar produto" />

      <Input 
        placeholder="Nome do produto" />

      <Input
        placeholder="Preço do produto" />

      <Input 
        placeholder="Descrição" />

      <Button
        text="Confirmar" />

   </div>
  )
}

export default App
