import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../hooks/auth';

import { IconFoodExplorerComponent } from '../../components/IconFoodExplorer';
import { TitleComponent } from '../../components/Title';
import { SubTitleComponent } from '../../components/SubTitle';
import { LabelComponent } from '../../components/Label';
import { InputComponent } from '../../components/Input';
import { ButtonComponent } from '../../components/Button';
import { TextButtonComponent } from '../../components/TextButton';

import { Main, AccessAccountContainer, LoginContainer } from './styles.js';

export function SignIn() {

   const data = useContext( AuthContext );

   const [ email, setEmail ] = useState("");
   const [ password, setPassword ] = useState("");

   const navigate = useNavigate();

   function redirectToCreateAccount() {
      navigate('create-account');
   }

   return (
      <Main>
         <TitleComponent className="foodExplorerTitle">
            <IconFoodExplorerComponent />
            food explorer
         </TitleComponent>

         <AccessAccountContainer>
            <SubTitleComponent className="subtitle">
               Faça login
            </SubTitleComponent>

            <LoginContainer>
               <LabelComponent
                  onChange={ event => setEmail(event.target.value) }
               >
                  E-mail
                  <InputComponent type="text" placeholder="Exemplo: exemplo@gmail.com" />
               </LabelComponent>

               <LabelComponent
                  onChange={ event => setPassword(event.target.value) }
               >
                  Senha
                  <InputComponent type="password" placeholder="No mínimo 6 caracteres" />
               </LabelComponent>

               <ButtonComponent>
                  Entrar
               </ButtonComponent>
               
               <TextButtonComponent 
                  onClick={redirectToCreateAccount}
               >
                  Criar uma conta
               </TextButtonComponent>
            </LoginContainer>

         </AccessAccountContainer>
      </Main>
   );
};