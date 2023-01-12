
import {  useState, useEffect } from 'react';

import { TextButtonComponent } from '../../components/TextButton';
import { ButtonComponent } from '../../components/Button';
import { IconComponent } from '../../components/Icon';
import { LabelComponent } from '../../components/Label';
import { InputComponent } from '../../components/Input';

import pixIcon from '../../assets/app-icons/pixIcon.png';
import creditCardIcon from '../../assets/app-icons/creditCard.png';
import qrCodeIcon from '../../assets/app-icons/qrCode.png';

import { MainContainer, OptionsContainer, PixContainer, CreditContainer, SecretDataContainer } from './styles';

export function PaymentMethodComponent() {

   const QrCodeComponent = <PixContainer><IconComponent className="qrCode" icon={qrCodeIcon}/></PixContainer>;

   const CreditComponent = () => (
      <CreditContainer>
         <LabelComponent>
            Número do Cartão
            <InputComponent placeholder="0000 0000 0000 0000" />
         </LabelComponent>

         <SecretDataContainer>
            <LabelComponent>
               Validade
               <InputComponent placeholder="04/25" />
            </LabelComponent>

            <LabelComponent>
               CVC
               <InputComponent placeholder="04/25" />
            </LabelComponent>
         </SecretDataContainer>

         <ButtonComponent>Finalizar pagamento</ButtonComponent>
      </CreditContainer>
   );

   const [component, setComponent] = useState(QrCodeComponent);

   function handleChoicePix() {
      return  setComponent(QrCodeComponent);
   };

   function handleChoiceCredit() {
      return  setComponent(CreditComponent);
   };

   useEffect(() => {

   }, [component]);

   return (
      <MainContainer>
         <OptionsContainer>
            <TextButtonComponent 
               className="buttonPixAndCredit"
               onClick={handleChoicePix}
            >
               <IconComponent icon={pixIcon} />
               PIX
            </TextButtonComponent>

            <TextButtonComponent 
               className="buttonPixAndCredit"
               onClick={handleChoiceCredit}
            >
               <IconComponent icon={creditCardIcon} />
               Crédito
            </TextButtonComponent>
         </OptionsContainer>

         { component }
      </MainContainer>
   );
}