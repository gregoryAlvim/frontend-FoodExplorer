import { useNavigate } from "react-router-dom";

import { IconFoodExplorerComponent } from '../../components/IconFoodExplorer';
import { TitleComponent } from '../../components/Title';
import { SubTitleComponent } from '../../components/SubTitle';
import { LabelComponent } from '../../components/Label';
import { InputComponent } from '../../components/Input';
import { ButtonComponent } from '../../components/Button';
import { TextButtonComponent } from '../../components/TextButton';

import { Main, AccessAccountContainer, LoginContainer } from './styles.js';

export function SignUp() {
   
   const navigate = useNavigate();

   function redirectToSignIn() {
      navigate('/');
   }

   return (
      <Main>
         <TitleComponent className="foodExplorerTitle">
            <IconFoodExplorerComponent />
            food explorer
         </TitleComponent>

         <AccessAccountContainer>
            <SubTitleComponent className="subtitle">
               Crie sua conta
            </SubTitleComponent>

            <LoginContainer>
               <LabelComponent>
                  Nome
                  <InputComponent type="text" placeholder="Exemplo: fulano de tal" />
               </LabelComponent>

               <LabelComponent>
                  E-mail
                  <InputComponent type="text" placeholder="Exemplo: exemplo@gmail.com" />
               </LabelComponent>

               <LabelComponent>
                  Senha
                  <InputComponent type="password" placeholder="No mínimo 6 caracteres" />
               </LabelComponent>

               <ButtonComponent>
                  Criar conta
               </ButtonComponent>
               
               <TextButtonComponent onClick={redirectToSignIn}>
                  Já tenho uma conta
               </TextButtonComponent>
            </LoginContainer>

         </AccessAccountContainer>
      </Main>
   );
};