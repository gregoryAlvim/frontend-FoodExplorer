
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';

import { HeaderComponent } from '../../components/Header';
import { TextButtonComponent } from '../../components/TextButton';
import { IconComponent } from '../../components/Icon';
import { ParagraphComponent } from '../../components/Paragraph';
import { Ingredients } from '../../components/Ingredients';
import { FooterComponent } from '../../components/Footer';

import { Main, Container, DishInfoContainer, Span } from './styles';

export function DetailDish() {

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
               dish && <Container>
                  <IconComponent className="dishImage" icon={dish.dishImage ? `${api.defaults.baseURL}/files/${dish.dishImage}` : noImage} />

                  <DishInfoContainer>

                     <Span className="dishInfoName">{ `${dish.name} >` }</Span>
                     <ParagraphComponent className="dishDescription"> { dish.description } </ParagraphComponent>

                     <Ingredients ingredientsData={dish.ingredientsData} />

                     <Span className="dishPrice"> { `R$ ${dish.price}` } </Span>
                  </DishInfoContainer>
               </Container>
            }
         </Main>
         <FooterComponent />
      </>
   );
}