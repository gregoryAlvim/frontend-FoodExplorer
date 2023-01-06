import Styled from 'styled-components';
import { devices } from '../../configs/devices';

export const Button = Styled.button`
   min-width: 20vw;
   height: 100%;
   margin: 0 auto;

   background: none;
   color: ${({ theme }) => theme.TEXT_COLORS.FAINT_GRAY};

   cursor: pointer;

   &:hover {
      transition-delay: 0.1s;
      opacity: 0.9;
      color: ${({ theme }) => theme.TEXT_COLORS.GRAY_PRIMARY};
   }

   @media ${devices.laptop} {
      width: 40vw;
      margin: 0 auto;
   }

   @media ${devices.mobile} {
      width: 80vw;
      margin: 0 auto;
   }

`;

export const Container = Styled.div`
   min-width: 20vw;
   height: 100%;

   background: rgba(0, 0, 0, 0.32);

   border: 1px solid rgba(0, 0, 0, 0.65);

   display: flex;
   align-items: center;
   

   &:hover {
      transition-delay: 0.1s;
      opacity: 0.9;
      background: rgba(0, 0, 0, 0.50);
      
   }

   &:focus {
      transition-delay: 0.1s;
      opacity: 0.9;
   }
   
   @media ${devices.laptop} {
      width: 40vw;
      margin: 0 auto;
   }

   @media ${devices.mobile} {
      width: 80vw;
      margin: 0 auto;
   }
`;