import { Input } from './styles';

export function InputComponent({ icon, ...rest }) {
   return(   
      <Input 
         { ...rest }
      />
   );
}