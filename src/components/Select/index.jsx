import { Select, Option } from './styles';

export function SelectComponent({ ...rest }) {
   return (
      <Select
         {...rest}
      >
         <Option value="Comida" hidden defaultValue>
            Tipo do prato
         </Option>

         <Option value="Comida">
            Comida
         </Option>

         <Option value="Sobremesa">
            Sobremesa
         </Option>

         <Option value="Bebida">
            Bebida
         </Option>
      </Select>
   );
}