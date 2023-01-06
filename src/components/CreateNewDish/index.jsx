import { TextButtonComponent } from '../TextButton';
import { TitleComponent } from '../Title';

export function CreateNewDish({ isCreate, title }) {
   return (
      <>
         {isCreate ? null : <TextButtonComponent>{"< voltar"}</TextButtonComponent>}

         <TitleComponent>{title}</TitleComponent>
         
      </>
   );
}