import { useState, useEffect } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { FiSearch, FiLogOut } from "react-icons/fi";

import { useAuth } from '../../hooks/auth';

import { TitleComponent } from '../../components/Title';
import { IconComponent } from '../Icon';
import { TextButtonComponent } from '../../components/TextButton';
import { ButtonComponent } from '../../components/Button';

import { ReceiptIcon } from '../../assets/app-icons/Receipt/index';
import imageIconFoodExplorer from '../../assets/PolygonIcon.png';

import { Container, Header, SearchContainer, Input } from "./styles";

export function HeaderComponent({onChange, quantityOrdersCart = 0, myRequestData}) {

   const navigate = useNavigate();

   const [quantityOrdersShoppingCart, setQuantityOrdersShoppingCart] = useState(quantityOrdersCart);

   const { user, signOut } = useAuth();
   const isAdmin = user.role === "Admin";

   function handleSignOut() {
      signOut();
      navigate("/");
   }

   function redirectToMyRequest() {
      navigate({
         pathname: `/my-request`,
         search: createSearchParams({requestData: myRequestData}).toString()
      });
   }

   function redirectToPurchaseRequests() {
      navigate(`/purchase-requests`);
   }

   useEffect(() => {
      setQuantityOrdersShoppingCart(quantityOrdersCart);
   }, [quantityOrdersCart]);

   return(
      <Container>
         <Header>
            <TitleComponent className="foodExplorerTitle">
               <IconComponent icon={imageIconFoodExplorer} className="foodExplorerIcon" />
               food explorer
            </TitleComponent>

            <TextButtonComponent className="myFavoritesText">
               Meus favoritos
            </TextButtonComponent>

            <SearchContainer>
               <FiSearch
                  size={20}
               />
               <Input
                  type="text" 
                  placeholder="Busque pelas opções de pratos" 
                  onChange={onChange}
               />
            </SearchContainer>
            
            <ButtonComponent 
               className="purchaseRequestsButton"
               onClick={ isAdmin ? redirectToPurchaseRequests : redirectToMyRequest }
            >
               <ReceiptIcon />
               { isAdmin ? `Pedidos (${quantityOrdersShoppingCart})` : `Meu pedido (${quantityOrdersShoppingCart})`}
            </ButtonComponent>

            <TextButtonComponent onClick={handleSignOut} className="logOutButton">
               <FiLogOut size={20} />
            </TextButtonComponent>
         </Header>
      </Container>
   );
}