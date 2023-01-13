
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiMinus, FiPlus, FiCameraOff } from 'react-icons/fi';

import { api } from '../../services/api';

import { HeaderComponent } from '../../components/Header';
import { TextButtonComponent } from '../../components/TextButton';
import { ButtonComponent } from '../../components/Button';
import { IconComponent } from '../../components/Icon';
import { ParagraphComponent } from '../../components/Paragraph';
import { Ingredients } from '../../components/Ingredients';
import { FooterComponent } from '../../components/Footer';

import noImage from '../../assets/noImage.png';

import { Main, Container, Span, PriceAndIncludeContainer, DishInfoContainer, IncludeDishContainer, IncludeDishButtonsContainer } from './styles';

export function DetailDish() {

   let amountDishIncluded = 1;

   const navigate = useNavigate();
   const params = useParams();

   const [dish, setDish] = useState();

   function handleComebackToPreviousPage() {
      navigate("/");
   }

   useEffect(() => {

      async function fetchDishes() {
         const response = await api.get(`dishes/show-dish/${params.id}`);
         setDish(response.data);
      }

      fetchDishes();
   }, []);

   return (
      <>
         <HeaderComponent />
         <Main>
            <TextButtonComponent onClick={handleComebackToPreviousPage} className="backButton">{"< voltar"}</TextButtonComponent>
            {
               dish && <Container className="dishData">
                  <IconComponent className="dishImage" icon={dish.dishImage ? `${api.defaults.baseURL}/files/${dish.dishImage}` : noImage} />

                  <DishInfoContainer>

                     <Span className="dishInfoName">{`${dish.name} >`}</Span>
                     <ParagraphComponent className="dishDescription"> {dish.description} </ParagraphComponent>

                     <Ingredients ingredientsData={dish.ingredientsData} />


                     <PriceAndIncludeContainer>

                        <Span className="dishPrice"> {`R$ ${dish.price}`} </Span>

                        <IncludeDishContainer>
                           <IncludeDishButtonsContainer>
                              <TextButtonComponent className="minusAndPlusButton">
                                 <FiMinus size={20} />
                              </TextButtonComponent>

                              <ParagraphComponent className="dishAmount">
                                 {String(amountDishIncluded).padStart(2, "0")}
                              </ParagraphComponent>

                              <TextButtonComponent className="minusAndPlusButton">
                                 <FiPlus size={20} />
                              </TextButtonComponent>
                           </IncludeDishButtonsContainer>

                           <ButtonComponent className="addButton">
                              incluir
                           </ButtonComponent>
                        </IncludeDishContainer>
                        
                     </PriceAndIncludeContainer>
                  </DishInfoContainer>
               </Container>
            }
         </Main>
         <FooterComponent className="footerComponent" />
      </>
   );
}