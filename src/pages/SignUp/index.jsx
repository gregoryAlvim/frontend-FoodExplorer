import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

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

   const [ name, setName ] = useState("");
   const [ email, setEmail ] = useState("");
   const [ password, setPassword ] = useState("");
   const [ repeatPassword, setRepeatPassword ] = useState("");

   function redirectToSignIn() {
      navigate('/');
   }

   function handleSignUp() {
      api.post("/users/create-user", { name, email, password, repeatPassword })
      .then(response => {
         alert(response.data);
         redirectToSignIn();
      })
      .catch(error => {
         if (error.response) {
            alert(error.response.data.message);
         } else {
            alert("Não foi possível cadastrar o usuário, tente novamente mais tarde!");
         }
      });
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
               <LabelComponent
                  onChange={ event => setName(event.target.value) }
               >
                  Nome
                  <InputComponent type="text" placeholder="Exemplo: fulano de tal" />
               </LabelComponent>

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

               <LabelComponent
                  onChange={ event => setRepeatPassword(event.target.value) }
               >
                  Confirmar senha
                  <InputComponent type="password" placeholder="Digite a senha anterior" />
               </LabelComponent>

               <ButtonComponent onClick={handleSignUp}>
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