import { IconImage } from './styles';

export function IconComponent({ icon:Icon, ...rest }) {
   return(
      Icon ? <IconImage src={Icon} {...rest} /> : <></>
   );
}