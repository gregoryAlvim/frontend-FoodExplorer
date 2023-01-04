

import { FiHeart, FiMinus, FiPlus } from 'react-icons/fi';

import { IconComponent } from '../Icon';
import { ParagraphComponent } from '../Paragraph';
import { ButtonComponent } from '../Button';
import { TextButtonComponent } from '../TextButton';

import noImage from '../../assets/noImage.png';

import { Container, Span, Section, IncludeDishContainer } from './styles';

export function ItemCarouselComponent({ dishImage, name, description, price }) {

   let amountDishIncluded = 1;

   return (
      <Container>
            <TextButtonComponent className="heartButton">
               <FiHeart size={20} />
            </TextButtonComponent>
         <Section>
            
            <IconComponent className="dishImage" icon={ dishImage ?? noImage } />

            <Span className="dishInfoName">{ `${name} >` }</Span>

            <ParagraphComponent className="dishDescription"> { description } </ParagraphComponent>

            <Span className="dishPrice"> { `R$ ${price}` } </Span>

            <IncludeDishContainer>
               <TextButtonComponent className="minusAndPlusButton">
                  <FiMinus size={20} />
               </TextButtonComponent>

               <ParagraphComponent className="dishAmount">
                  {String(amountDishIncluded).padStart(2, "0")}
               </ParagraphComponent>

               <TextButtonComponent className="minusAndPlusButton">
                  <FiPlus size={20} />
               </TextButtonComponent>

               <ButtonComponent className="addButton">
                  incluir
               </ButtonComponent>
            </IncludeDishContainer>
         </Section>
      </Container>
   );
}