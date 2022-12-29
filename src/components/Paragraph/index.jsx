import { Paragraph } from './styles';

export function ParagraphComponent({ children, ...rest }) {
   return(
      <Paragraph
         { ...rest }
      >
         { children }
      </Paragraph>
   );
}