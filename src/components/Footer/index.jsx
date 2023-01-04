import { TitleComponent } from '../../components/Title';
import { ParagraphComponent } from '../../components/Paragraph';
import { IconComponent } from '../Icon';

import imageIconFoodExplorer from '../../assets/GrayPolygonIcon.png';

import { Footer } from "./styles";

export function FooterComponent() {

   return(
      <Footer>
         <TitleComponent className="foodExplorerTitle">
            <IconComponent icon={imageIconFoodExplorer} className="foodExplorerIcon" />
            food explorer
         </TitleComponent>

         <ParagraphComponent className="footerDescription">
            © 2022 - Todos os direitos reservados.
         </ParagraphComponent>
      </Footer>
   );
}