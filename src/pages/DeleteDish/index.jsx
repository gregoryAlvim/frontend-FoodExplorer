
import { useNavigate } from 'react-router-dom';

import { HeaderComponent } from '../../components/Header';
import { FooterComponent } from '../../components/Footer';

export function DeleteDish() {

   const navigate = useNavigate();

   function handleComebackToPreviousPage() {
      navigate("/");
   }

   return (
      <>
         <HeaderComponent />
         {   handleComebackToPreviousPage() }
         <FooterComponent />
      </>
   );
}