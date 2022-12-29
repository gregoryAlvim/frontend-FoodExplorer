
import { Button } from './styles';

export function ButtonComponent({ children, ...rest }) {
   return(
      <Button 
         { ...rest }
      >
         {children}
      </Button>
   );
}