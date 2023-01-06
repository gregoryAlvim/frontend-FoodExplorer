import { useNavigate } from 'react-router-dom';

import { HeaderComponent } from '../../components/Header';
import { CreateNewDish } from '../../components/CreateNewDish'
import { FooterComponent } from '../../components/Footer';

export function NewDish() {

   return (
      <>
         <HeaderComponent />
            <CreateNewDish isCreate title="Cadastrar novo prato" />
         <FooterComponent />
      </>
   );
}