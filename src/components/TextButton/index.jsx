import { Button } from './styles';

export function TextButtonComponent({ children, ...rest }) {
   return(
      <Button 
         { ...rest }
      >
         {children}
      </Button>
   );
}