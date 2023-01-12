import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHeart, FiEdit, FiMinus, FiPlus, FiX } from 'react-icons/fi';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { IconComponent } from '../Icon';
import { ParagraphComponent } from '../Paragraph';
import { ButtonComponent } from '../Button';
import { TextButtonComponent } from '../TextButton';

import noImage from '../../assets/noImage.png';

import { Container, Span, Section, IncludeDishContainer, ButtonsContainer, ItemButton } from './styles';

export function ItemCarouselComponent({ dishId ,dishImage, name, description, price, handleSetMyRequests }) {

   const navigate = useNavigate();

   const { user } = useAuth();
   
   const [amountDish, setAmountDish] = useState(1);

   const isAdmin = user.role === "Admin";
   const dishImageURL = dishImage ? `${api.defaults.baseURL}/files/${dishImage}` : noImage;

   function redirectToUpdateDish() {
      navigate(`/update-dish/${dishId}`);
   }

   function redirectToDetailDish() {
      navigate(`/detail-dish/${dishId}`);
   }

   function handleDecreaseAmountDish() {
      amountDish <= 1 ? setAmountDish(1) : setAmountDish(amountDish - 1);
   }

   function handleIncreaseAmountDish() {
         setAmountDish(amountDish + 1);
   }

   async function handleDeleteDish() {
      const response = await api.delete(`/dishes/delete-dish/${dishId}`);

      alert(response.data);
      navigate(`/delete-dish/${dishId}`);
   }

   return (
      <Container>
         <ButtonsContainer>
            <TextButtonComponent className="buttons">
               <FiHeart size={20} />
            </TextButtonComponent>

            {
               isAdmin ? <TextButtonComponent 
                  className="buttons"
                  onClick={redirectToUpdateDish}
               >
                  <FiEdit size={20} />
               </TextButtonComponent> : null
            }
            
            {
               isAdmin ? <TextButtonComponent 
                  className="buttons"
                  onClick={handleDeleteDish}
               >
                  <FiX color={"#92000E"} size={20} />
               </TextButtonComponent> : null
            }
         </ButtonsContainer>

         <Section onClick={redirectToDetailDish}>
            
            <IconComponent className="dishImage" icon={dishImageURL} />

            <Span className="dishInfoName">{ `${name} >` }</Span>

            <ParagraphComponent className="dishDescription"> { description } </ParagraphComponent>

            <Span className="dishPrice"> { `R$ ${price}` } </Span>

         </Section>
            <IncludeDishContainer>
               <TextButtonComponent 
                  className="minusAndPlusButton"
                  onClick={handleDecreaseAmountDish}
               >
                  <FiMinus size={20} />
               </TextButtonComponent>

               <ParagraphComponent className="dishAmount">
                  {String(amountDish).padStart(2, "0")}
               </ParagraphComponent>

               <TextButtonComponent 
                  className="minusAndPlusButton"
                  onClick={handleIncreaseAmountDish}
               >
                  <FiPlus size={20} />
               </TextButtonComponent>

               <ButtonComponent 
                  className="addButton"
                  onClick={() => handleSetMyRequests({dishImageURL, amountDish, name, price})}
               >
                  incluir
               </ButtonComponent>
            </IncludeDishContainer>
      </Container>
   );
}