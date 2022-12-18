import { Label } from './styles';

export function LabelComponent({ children, ...rest }) {
   return(
      <Label
         { ...rest }
      >
         { children }
      </Label>
   );
}