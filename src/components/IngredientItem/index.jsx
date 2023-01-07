import {FiPlus, FiX } from 'react-icons/fi';

import { Container, Input, Button } from './styles';

export function IngredientItemComponent ({ isNew, value, onClick, ...rest }) {
   return (
      <Container isNew = {isNew}>
         <Input 
            type="text"
            value={value}
            readOnly={!isNew}
            {...rest}
         />

         <Button
            type="button"
            onClick={onClick}
            className={isNew ? 'button-add' : 'button-delete'}
         >
            { isNew ? <FiPlus /> : <FiX />}
         </Button>
      </Container>
   );
}