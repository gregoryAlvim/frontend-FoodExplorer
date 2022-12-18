import { Title } from './styles';

export function TitleComponent({ children, ...rest }) {
   return(
      <Title
         { ...rest }
      >
         { children }
      </Title>
   );
}