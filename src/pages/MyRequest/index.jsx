import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { HeaderComponent } from '../../components/Header';
import { SubTitleComponent } from '../../components/SubTitle';
import { IconComponent } from '../../components/Icon';
import { TextButtonComponent } from '../../components/TextButton';
import { PaymentMethodComponent } from '../../components/PaymentMethod';
import { FooterComponent } from '../../components/Footer';

import { MainContainer, Main, MyRequestContainer, DishItemContainer, DishInfoItemContainer, DishNameAndButtonContainer, DishNameAndPriceContainer, PriceSpan, PaymentContainer } from './styles';

export function MyRequest() {

   const navigate = useNavigate();

   const [searchParams] = useSearchParams();
   const Requests = JSON.parse(searchParams.get("requestData"));
   const [requestData, setRequestData] = useState(Requests);

   let TotalPrice = 0;

   function calcTotalPrice() {
      for (let i = 0; i < requestData.length; i++) {
         TotalPrice += (requestData[i].amountDish * requestData[i].price.replace(",", "."));
      }

      return String(TotalPrice.toFixed(2)).replace(".", ",");
   }

   function handleComebackToPreviousPage() {
      navigate("/");
   }

   function handleRemoveDishByName(dishName) {
      setRequestData(requestData.filter(dish => dish.name != dishName));
   }

   useEffect(() => {

   }, [requestData]);

   return (
      <MainContainer>
         <HeaderComponent
            quantityOrdersCart={requestData.length}
         />

         <TextButtonComponent onClick={handleComebackToPreviousPage} className="backButton">{"< voltar"}</TextButtonComponent>

         <Main>
            <MyRequestContainer>
               <SubTitleComponent className="myRequestTitle">Meu Pedido</SubTitleComponent>

               {
                  requestData.map((request, index) => (
                     <DishItemContainer key={String(index)}>
                        <DishInfoItemContainer>
                           <IconComponent className="dishImage" icon={request.dishImageURL} />
                           <DishNameAndButtonContainer>
                              <DishNameAndPriceContainer>
                                 <PriceSpan className="amountDishAndName">{`${request.amountDish} x ${request.name}`}</PriceSpan>
                                 <PriceSpan className="dishPrice">{`R$ ${request.price}`}</PriceSpan>
                              </DishNameAndPriceContainer>

                              <TextButtonComponent
                                 className="deleteDishButton"
                                 onClick={() => handleRemoveDishByName(request.name)}
                              >
                                 Excluir
                              </TextButtonComponent>
                           </DishNameAndButtonContainer>
                        </DishInfoItemContainer>
                     </DishItemContainer>
                  ))
               }

               <PriceSpan className="dishTotalPrice">{`Total: ${calcTotalPrice()}`}</PriceSpan>
            </MyRequestContainer>

            <PaymentContainer>
               <SubTitleComponent>Pagamento</SubTitleComponent>

               <PaymentMethodComponent />

            </PaymentContainer>

         </Main>
         
         <FooterComponent />
      </MainContainer>
   );
}