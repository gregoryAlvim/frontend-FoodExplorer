import { Select, Option } from './styles';

export function SelectComponent({ optionSelected, ...rest }) {
   
   return (
      <Select
         {...rest}
      >
         <Option hidden defaultValue>
           { optionSelected ? optionSelected : "Tipo do prato"}
           
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