import { Input } from './styles';

export function InputComponent({ ...rest }) {
   return(
      <Input 
         { ...rest }
      />
   );
}