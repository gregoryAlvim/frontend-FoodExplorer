import { useState, useEffect } from "react";
import { FiUpload } from "react-icons/fi";
import { useNavigate, useParams } from 'react-router-dom';

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

import { Main, Form, Span, Input, Container, ButtonsFormContainer } from './styles';

export function EditDish() {

   const navigate = useNavigate();
   const { id } = useParams();

   const [ingredients, setIngredients] = useState([]);
   const [newIngredient, setNewIngredient] = useState("");
   console.log(ingredients);

   const [name, setName] = useState("");
   const [price, setPrice] = useState("");
   const [category, setCategory] = useState("");
   const [description, setDescription] = useState("");
   const [dishImage, setDishImage] = useState(null);

   function handleAddIngredient() {
      setIngredients((prevState) => [...prevState, newIngredient]);
      setNewIngredient("");
   }

   async function handleRemoveIngredient(deleteIngredient) {
      setIngredients((prevState) => prevState.filter(ingredient => ingredient !== deleteIngredient));
      setNewIngredient("");
      console.log(ingredients);

      await api.delete(`ingredients/delete-ingredient/${deleteIngredient}`);
   }

   function handleComebackToPreviousPage() {
      navigate("/");
   }

   async function handleUpdateDish() {

      try {

         if (dishImage) {
            const fileDishImage = new FormData();
            fileDishImage.append("dishImage", dishImage);

            await api.patch(`dishes/update-dish-image/${id}`, fileDishImage);
         }

         const updatedDish = {
            name: name,
            description: description,
            category: category,
            price: price,
            ingredientsData: ingredients
         }

         const response = await api.put(`dishes/update-dish/${id}`, updatedDish);

         alert(response.data);

         handleComebackToPreviousPage();

      } catch (error) {

         if (error.response) {
            alert(error.response.data.message);
         } else {
            alert(" Algo deu errado ao atualizar os dados! ");
         }

      }
   }

   useEffect(() => {
      async function searchDishDataById() {

         const response = await api.get(`dishes/show-dish/${id}`);
         const { name, price, category, description, ingredientsData } = response.data;

         setName(name),
         setPrice(price),
         setCategory(category),
         setDescription(description),
         setIngredients(ingredientsData.map(ingredient => ingredient.name))

      }

      searchDishDataById();

   }, []);

   return (
      <>
         <HeaderComponent />
         {
            <Main>
               <TextButtonComponent onClick={handleComebackToPreviousPage} className="backButton">{"< voltar"}</TextButtonComponent>

               <TitleComponent className="titlePage"> Editar prato </TitleComponent>

               <Form>
                  <LabelComponent className="dishImage">
                     Imagem do prato
                     <Container className="dishImageContainer">
                        <FiUpload size={20} />
                        {dishImage ? dishImage.name : "Selecionar nova imagem"}
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
                        value={name}
                        placeholder="Ex: Salada Ceasar"
                        onChange={(event) => setName(event.target.value)}
                     />
                  </LabelComponent>

                  <LabelComponent className="dishCategory">
                     Categoria

                     <SelectComponent
                        optionSelected={category}
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
                           value={price}
                           placeholder="00,00"
                           onChange={(event) => setPrice(event.target.value)}
                        />
                     </Container>
                  </LabelComponent>

                  <LabelComponent className="dishDescription">
                     Descrição
                     <TextareaComponent
                        type="textarea"
                        value={description}
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        onChange={(event) => setDescription(event.target.value)}
                     />
                  </LabelComponent>

               </Form>
               <ButtonsFormContainer>
                  <ButtonComponent
                     className="saveNewDishButton"
                     onClick={handleUpdateDish}
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
         }
         <FooterComponent />
      </>
   );
}