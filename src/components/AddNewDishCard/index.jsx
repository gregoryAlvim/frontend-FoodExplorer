import { FiPlus } from 'react-icons/fi';

import { Container, Button } from './styles';

export function AddNewDishCardComponent({ ...rest }) {

   return (
         <Container
            {...rest}
         >
            <Button>
               <FiPlus size={60} />
            </Button>
         </Container>
   );
}