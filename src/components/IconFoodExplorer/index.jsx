import { IconImage } from './styles';
import imageIconFoodExplorer from '../../assets/PolygonIcon.png';

export function IconFoodExplorerComponent({ ...rest }) {
   return(
      <IconImage src={imageIconFoodExplorer} {...rest} />
   );
}