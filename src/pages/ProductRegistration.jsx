import './ProductRegistration.css'

//imports de components
import Title from '../components/TitleComponent/Title'
import Button from '../components/ButtonComponent/Button'
import Input from '../components/InputComponent/Input'
import Description from '../components/DescriptionComponent/DescriptionComponent'
import { SubTitle } from '../components/SubTitleComponent/SubTitle'

function ProductRegistration() {

  return (
   <div className='tela'>
    
      <Title 
        title="Cadastrar produto" />

      <SubTitle
        text="Para cadastrar seus produtos," />

      <Description 
        description="Digite os dados do seu produto para que você aumente suas vendas." />

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

export default ProductRegistration
