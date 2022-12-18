import { Button } from './styles';

export function ButtonComponent({ ...rest }) {
   return(
      <Button 
         { ...rest }
      >

      </Button>
   );
}