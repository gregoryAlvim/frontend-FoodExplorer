import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';
import { ItemCarouselComponent } from '../../components/ItemCarousel';

import { HeaderComponent } from '../../components/Header';
import { SubTitleComponent } from '../../components/SubTitle';
import { ParagraphComponent } from '../../components/Paragraph';
import { CarouselComponent } from '../../components/Carousel';
import { FooterComponent } from '../../components/Footer';

import homeImage from '../../assets/app-icons/homeImage.png';

import { Main, Image, CoverPageContainer } from './styles';

export function Home() {

   const params = useParams();
   const navigate = useNavigate();

   const [search, setSearch] = useState("");
   const [dishes, setDishes] = useState([""]);

   useEffect(() => {

      async function fetchDishes() {
         const response = await api.get(`dishes/index-dishes?dishName=${search}`);
         setDishes(response.data);
      }

      fetchDishes();
   }, [search, params.id ? params.id : null]);


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

            {/* <CarouselComponent description="Pratos principais" selectCategory="Comida" searchHeader={search} />
            
            <CarouselComponent description="Sobremesas" selectCategory="Sobremesa" searchHeader={search} />

            <CarouselComponent description="Bebidas" selectCategory="Bebida" searchHeader={search} /> */}

            <CarouselComponent
               description="Pratos principais"
               arraylength={dishes.filter(dish => dish.category == "Comida").length}
            >
               {
                  dishes.filter(dish => dish.category == "Comida").map(dish => (
                     <div key={String(dish.id)} className="keen-slider__slide">
                        <ItemCarouselComponent
                           dishId={dish.id}
                           name={dish.name}
                           description={dish.description}
                           price={dish.price}
                           dishImage={dish.dishImage}
                        />
                     </div>
                  ))
               }
            </CarouselComponent>

            <CarouselComponent
               description="Sobremesas"
               arraylength={dishes.filter(dish => dish.category == "Sobremesa").length}
            >
               {
                  dishes.filter(dish => dish.category == "Sobremesa").map(dish => (
                     <div key={String(dish.id)} className="keen-slider__slide">
                        <ItemCarouselComponent
                           dishId={dish.id}
                           name={dish.name}
                           description={dish.description}
                           price={dish.price}
                           dishImage={dish.dishImage}
                        />
                     </div>
                  ))
               }
            </CarouselComponent>

            <CarouselComponent
               description="Bebidas"
               arraylength={dishes.filter(dish => dish.category == "Bebida").length}
            >
               {
                  dishes.filter(dish => dish.category == "Bebida").map(dish => (
                     <div key={String(dish.id)} className="keen-slider__slide">
                        <ItemCarouselComponent
                           dishId={dish.id}
                           name={dish.name}
                           description={dish.description}
                           price={dish.price}
                           dishImage={dish.dishImage}
                        />
                     </div>
                  ))
               }
            </CarouselComponent>
         </Main>

         <FooterComponent />
      </>
   );
}