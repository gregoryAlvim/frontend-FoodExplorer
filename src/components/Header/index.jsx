import { FiSearch, FiLogOut } from "react-icons/fi";

import { TitleComponent } from '../../components/Title';
import { IconComponent } from '../Icon';
import { TextButtonComponent } from '../../components/TextButton';
import { ButtonComponent } from '../../components/Button';

import { ReceiptIcon } from '../../assets/app-icons/Receipt/index';
import imageIconFoodExplorer from '../../assets/PolygonIcon.png';

import { Header, SearchContainer, Input } from "./styles";

export function HeaderComponent() {

   let purchaseRequestsCart = 0;

   return(
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
            />
         </SearchContainer>
         
         <ButtonComponent 
            className="purchaseRequestsButton"
         >
            <ReceiptIcon />
            {`Meu pedido (${purchaseRequestsCart})`}
         </ButtonComponent>

         <TextButtonComponent className="logOutButton">
            <FiLogOut size={20} />
         </TextButtonComponent>
      </Header>
   );
}