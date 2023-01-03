

import { FiHeart, FiMinus, FiPlus } from 'react-icons/fi';

import { IconComponent } from '../Icon';
import { ParagraphComponent } from '../Paragraph';
import { TextButtonComponent } from '../TextButton';

import { Container, Span, Section, IncludeDishContainer } from './styles';

export function ItemCarouselComponent({ dishImage, name, description, price }) {

   let amountDishIncluded = 1;

   return (
      <Container>
            <TextButtonComponent className="heartButton">
               <FiHeart />
            </TextButtonComponent>
         <Section>
            
            <IconComponent className="dishImage" icon={ dishImage } />

            <Span className="dishInfoName">{ `${name} >` }</Span>

            <ParagraphComponent className="dishDescription"> { description } </ParagraphComponent>

            <Span className="dishPrice"> { price } </Span>

            <IncludeDishContainer>
               <TextButtonComponent>
                  <FiMinus />
               </TextButtonComponent>

               <ParagraphComponent>
                  {amountDishIncluded}
               </ParagraphComponent>

               <TextButtonComponent>
                  <FiPlus />
               </TextButtonComponent>

               <TextButtonComponent>
                  incluir
               </TextButtonComponent>
            </IncludeDishContainer>
         </Section>
      </Container>
   );
}