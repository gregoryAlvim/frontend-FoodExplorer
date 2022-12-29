import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { IconComponent } from '../../components/Icon';
import { TitleComponent } from '../../components/Title';
import { SubTitleComponent } from '../../components/SubTitle';
import { LabelComponent } from '../../components/Label';
import { InputComponent } from '../../components/Input';
import { ButtonComponent } from '../../components/Button';
import { TextButtonComponent } from '../../components/TextButton';

import imageIconFoodExplorer from '../../assets/PolygonIcon.png';

import { Main, AccessAccountContainer, LoginContainer } from './styles.js';

export function SignIn() {

   const { signIn } = useAuth();

   const [ email, setEmail ] = useState("");
   const [ password, setPassword ] = useState("");

   const navigate = useNavigate();

   function redirectToCreateAccount() {
      navigate('create-account');
   }

   function handleSignIn() {
      signIn({ email, password });
   }

   return (
      <Main>
         <TitleComponent className="foodExplorerTitle">
            <IconComponent icon={imageIconFoodExplorer} />
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

               <ButtonComponent
                  onClick={handleSignIn}
               >
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