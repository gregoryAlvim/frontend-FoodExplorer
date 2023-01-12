import Styled from 'styled-components';
import { devices } from '../../configs/devices';

export const MainContainer = Styled.div`
   width: 100%;
   height: 100%;

   margin-top: 3.2rem;

   border: 1px solid rgba(255, 255, 255, 0.1);
   background: transparent;
`;

export const OptionsContainer = Styled.div`
   display: flex;
   


   & .buttonPixAndCredit {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      
      width: 100%;
      height: 8.1rem;

      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 0;
   }
`;

export const PixContainer = Styled.div`
   height: 80%;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const CreditContainer = Styled.div`
   display: flex;
   flex-direction: column;
   gap: 3rem;

   margin: 5rem 9rem;
`;

export const SecretDataContainer = Styled.div`
   display: flex;
   align-items: center;
   gap: 3rem;
`;