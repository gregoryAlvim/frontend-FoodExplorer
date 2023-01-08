import { useState, useEffect } from 'react';

import { api } from '../../services/api';

import { HeaderComponent } from '../../components/Header';
import { SubTitleComponent } from '../../components/SubTitle';
import { ParagraphComponent } from '../../components/Paragraph';
import { CarouselComponent } from '../../components/Carousel';
import { FooterComponent } from '../../components/Footer';

import homeImage from '../../assets/app-icons/homeImage.png';

import { Main, Image, CoverPageContainer } from './styles';

export function Home() {

   const [search, setSearch] = useState("");
   const [dishes, setDishes] = useState([""]);
   const [desserts, setDesserts] = useState([""]);
   const [drinks, setDrinks] = useState([""]);

   useEffect(() => {

      async function fetchDishes() {
         try {

            const response = await api.get(`dishes/index-dishes?dishName${search}`);
            // setDishes(response.data);
            const foodData = response.data.filter((dish) => dish.category === "Comida");
            setDishes(foodData);

            const dessertsData = response.data.filter((dish) => dish.category === "Sobremesa");
            setDesserts(dessertsData);

            const drinksData = response.data.filter((dish) => dish.category === "Bebida");
            setDrinks(drinksData);

         } catch (error) {

            if (error.response) {
               alert(error.response.data.message);
            } else {
               alert(" Algo deu errado ao buscar os pratos! ");
            }
         }
      }

      fetchDishes();

   }, [search]);

   return (
      <>
         <HeaderComponent />

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

            <CarouselComponent description="Pratos principais" selectCategory="Comida" dishes={dishes} />
            
            <CarouselComponent description="Sobremesas" selectCategory="Sobremesa" dishes={desserts} />

            <CarouselComponent description="Bebidas" selectCategory="Bebida" dishes={drinks} />
         </Main>

         <FooterComponent />
         {console.log(".")}
      </>
   );
}