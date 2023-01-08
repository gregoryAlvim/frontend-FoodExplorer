import { useState, useEffect } from "react";
import { FiUpload } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { HeaderComponent } from '../../components/Header';
import { TextButtonComponent } from '../../components/TextButton';
import { TitleComponent } from '../../components/Title';
import { LabelComponent } from '../../components/Label';
import { InputComponent } from '../../components/Input';
import { SelectComponent } from '../../components/Select';
import { IngredientItemComponent } from '../../components/IngredientItem';
import { TextareaComponent } from '../../components/Textarea';
import { ButtonComponent } from '../../components/Button';
import { FooterComponent } from '../../components/Footer';

import { Main, Form, Span, Input, Container, IngredientsContainer, ButtonsFormContainer } from './styles';

export function NewDish() {

   const navigate = useNavigate();

   const [ingredients, setIngredients] = useState([]);
   const [newIngredient, setNewIngredient] = useState("");

   const [name, setName] = useState("");
   const [price, setPrice] = useState("");
   const [category, setCategory] = useState("");
   const [description, setDescription] = useState("");
   const [dishImage, setDishImage] = useState(null);

   function handleAddIngredient() {
      setIngredients(prevState => [...prevState, newIngredient]);
      setNewIngredient("");
   }

   function handleRemoveIngredient(deleteIngredient) {
      const ingredientsFiltered = ingredients.filter(ingredient => ingredient !== deleteIngredient);
      setIngredients(ingredientsFiltered);
   }

   function handleComebackToPreviousPage() {
      navigate("/");
   }

   async function handleCreateNewDish() {
     
      try {

         const response = await api.post("dishes/create-dish", { name, description, price, category, ingredients});
         const { dishId, message } = response.data;
        
         const fileDishImage = new FormData();
         fileDishImage.append("dishImage", dishImage);

         await api.patch(`dishes/update-dish-image/${dishId}`, fileDishImage);

         alert(message);

         handleComebackToPreviousPage();

      } catch (error) {

         if (error.response) {
            alert(error.response.data.message);
         } else {
            alert(" Algo deu errado ao buscar os pratos! ");
         }

      }
   
   }

   return (
      <>
         <HeaderComponent />

         <Main>
            <TextButtonComponent onClick={handleComebackToPreviousPage} className="backButton">{"< voltar"}</TextButtonComponent>

            <TitleComponent className="titlePage"> Cadastrar novo prato </TitleComponent>

            <Form>
               <LabelComponent className="dishImage">
                  Imagem do prato
                  <Container className="dishImageContainer">
                     <FiUpload size={20} />
                     {dishImage ? dishImage.name : "Selecionar imagem"}
                     <Input 
                        className="dishInputImage" 
                        type="file"
                        onChange={(event) => setDishImage(event.target.files[0])} />
                  </Container>
               </LabelComponent>

               <LabelComponent className="dishName">
                  Nome
                  <InputComponent
                     type="text"
                     placeholder="Ex: Salada Ceasar"
                     onChange={(event) => setName(event.target.value)}
                  />
               </LabelComponent>
               
               <LabelComponent className="dishCategory">
                  Categoria

                  <SelectComponent 
                     onChange={(event) => setCategory(event.target.value)}
                  />
               </LabelComponent>

               <LabelComponent className="dishIngredients">

                  Ingredientes
                  <Container className="IngredientsContainer">
                     {
                        ingredients.map((ingredient, index) => (
                           <IngredientItemComponent
                              key={String(index)}
                              value={ingredient}
                              onClick={event => handleRemoveIngredient(ingredient)}
                           />
                        ))
                     }

                     <IngredientItemComponent
                        isNew
                        placeholder="Adicionar"
                        onChange={event => setNewIngredient(event.target.value)}
                        value={newIngredient}
                        onClick={handleAddIngredient}
                     />
                  </Container>

               </LabelComponent>

               <LabelComponent className="dishPrice">
                  Preço
                  <Container>
                     <Span>R$</Span>
                     <Input
                        type="text"
                        placeholder="00,00"
                        onChange={(event) => setPrice(event.target.value)}
                     />
                  </Container>
               </LabelComponent>

               <LabelComponent className="dishDescription">
                  Descrição
                  <TextareaComponent
                     type="textarea"
                     placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                     onChange={(event) => setDescription(event.target.value)}
                  />
               </LabelComponent>

            </Form>
            <ButtonsFormContainer>
               <ButtonComponent 
                  className="saveNewDishButton"
                  onClick={handleCreateNewDish}
               >
                  Salvar
               </ButtonComponent>

               <ButtonComponent
                  onClick={handleComebackToPreviousPage}
               >
                  Cancelar
               </ButtonComponent>
            </ButtonsFormContainer>
         </Main>
         <FooterComponent />
      </>
   );
}