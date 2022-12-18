import { SubTitle } from './styles';

export function SubTitleComponent({ children, ...rest }) {
   return(
      <SubTitle
         { ...rest }
      >
         { children }
      </SubTitle>
   );
}