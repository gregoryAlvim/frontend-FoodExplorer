import { useState, useEffect } from 'react';

import { HeaderComponent } from '../../components/Header';
import { SubTitleComponent } from '../../components/SubTitle';
import { ParagraphComponent } from '../../components/Paragraph';
import { CarouselComponent } from '../../components/Carousel';
import { FooterComponent } from '../../components/Footer';

import homeImage from '../../assets/app-icons/homeImage.png';

import { Main, Image, CoverPageContainer } from './styles';

export function Home() {

   const [search, setSearch] = useState("");

   return (
      <>
         <HeaderComponent 
            onChange={(event) => setSearch(event.target.value)}
         />

         <Main>
            <CoverPageContainer>
               <Image src={homeImage} />

               <SubTitleComponent className="subtitle">
                  Sabores inigualáveis
               </SubTitleComponent>

               <ParagraphComponent className="paragraph">
                  Sinta o cuidado do preparo com ingredientes selecionados
               </ParagraphComponent>
            </CoverPageContainer>

            <CarouselComponent description="Pratos principais" selectCategory="Comida" searchHeader={search} />
            
            <CarouselComponent description="Sobremesas" selectCategory="Sobremesa" searchHeader={search} />

            <CarouselComponent description="Bebidas" selectCategory="Bebida" searchHeader={search} />
         </Main>

         <FooterComponent />
      </>
   );
}