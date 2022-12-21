import Styled from 'styled-components';
import { devices } from '../../configs/devices';

export const Main = Styled.main`
   
   display: flex;
   justify-content: space-between;

   padding: 14rem;

   font-family: "Roboto";
   font-weight: 400;
   font-size: 1.6rem;

   color: ${({ theme }) => theme.TEXT_COLORS.PRIMARY};

   & .foodExplorerTitle {
      display: flex;
      align-items: center;
      gap: 2rem;

      font-size: 4rem;
      line-height: 5rem;

      font-weight: 700;

   };   
   
   @media ${devices.laptop} {
      display: flex;
      flex-direction: column;
      
      padding: 5rem;

      & .foodExplorerTitle {
         margin: 0 auto 5rem;
      };
   };

   @media ${devices.mobile} {
      display: flex;
      flex-direction: column;

      padding: 0;

      & .foodExplorerTitle {
         font-size: 3.5rem;
         margin: 5rem auto 5rem;
      };
   };
`;

export const AccessAccountContainer = Styled.article`

   width: 50rem;
   padding: 6.4rem;

   border-radius: 1.6rem;

   background: ${({ theme }) => theme.BACKGROUND_COLORS.SECONDARY};

   & .subtitle {
      font-family: 'Poppins';
      font-weight: 500;

      font-size: 3.2rem;
      line-height: 2.4rem;

      text-align: center;

      margin-bottom: 3.2rem;
   }

   @media ${devices.laptop} {
      margin: 0 auto;
   };

   @media ${devices.mobile} {
      max-width: 35rem;
      padding: 3rem;

      & .subtitle {
      margin-bottom: 5rem;
   }
   };

`;

export const LoginContainer = Styled.div`
   display: flex;
   flex-direction: column;
   gap: 3.5rem;
`;