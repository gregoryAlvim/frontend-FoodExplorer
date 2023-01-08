import { FiSearch, FiLogOut } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { TitleComponent } from '../../components/Title';
import { IconComponent } from '../Icon';
import { TextButtonComponent } from '../../components/TextButton';
import { ButtonComponent } from '../../components/Button';

import { ReceiptIcon } from '../../assets/app-icons/Receipt/index';
import imageIconFoodExplorer from '../../assets/PolygonIcon.png';

import { Container, Header, SearchContainer, Input } from "./styles";

export function HeaderComponent({onChange}) {

   const navigate = useNavigate();

   let purchaseRequestsCart = 0;
   const { signOut } = useAuth();

   function handleSignOut() {
      signOut();
      navigate("/");
   }

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
            >
               <ReceiptIcon />
               {`Meu pedido (${purchaseRequestsCart})`}
            </ButtonComponent>

            <TextButtonComponent onClick={handleSignOut} className="logOutButton">
               <FiLogOut size={20} />
            </TextButtonComponent>
         </Header>
      </Container>
   );
}