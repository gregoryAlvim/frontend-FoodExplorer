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

import { Main, Form, Span, Input, Container, IngredientsContainer, ButtonsFormContainer } from './styles';

export function EditDish() {

   const navigate = useNavigate();
   const { id } = useParams();

   const [dishData, setDishData] = useState(null);

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
      const ingredientsFiltered = ingredients.filter(ingredient => ingredient.name !== deleteIngredient);
      setIngredients(ingredientsFiltered);
   }

   function handleComebackToPreviousPage() {
      navigate("/");
   }

   async function handleUpdateDish() {
     
      try {

         const fetchDish = await api.get(`dishes/show-dish/${id}`);
         setDishData(fetchDish.data);

         if (dishImage) {
            const fileDishImage = new FormData();
            fileDishImage.append("dishImage", dishImage);

            const response = await api.patch(`dishes/update-dish-image/${dishData.id}`, fileDishImage);
            setDishData(fetchDish.data.dishImage = response.data.dishImage);
         }

         const updatedDish = {
            name: name ?? dishData.name,
            description: description ?? dishData.description,
            price: price ?? dishData.price,
            dishImage: dishData.dishImage,
            category: category ?? dishData.category,
            ingredientsData: ingredients ?? dishData.ingredientsData,
         }

         await api.update(`dishes/update-dish/${dishData.id}`, updatedDish);

         handleComebackToPreviousPage();

      } catch (error) {

         if (error.response) {
            alert(error.response.data.message);
         } else {
            alert(" Algo deu errado ao buscar os pratos! ");
         }

      }
   
   }

   useEffect(() => {
      async function searchDishDataById() {
         try {
            
            const response = await api.get(`dishes/show-dish/${id}`);
            setDishData(response.data);

            if (dishData) {
               setName(dishData.name);
               setPrice(dishData.price);
               setCategory(dishData.category);
               setDescription(dishData.description);
               setIngredients(dishData.ingredientsData);
            }
   
         } catch (error) {
   
            if (error.response) {
               alert(error.response.data.message);
            } else {
               alert(" Algo deu errado ao buscar os pratos! ");
            }
   
         }
      }

      searchDishDataById();
   }, [dishData]);

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
                                 value={ingredient.name}
                                 onClick={event => handleRemoveIngredient(ingredient.name)}
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