import Styled from 'styled-components';
import { devices } from '../../configs/devices';

export const Main = Styled.main`
   padding: 3.2rem 30rem 0;

   display: flex;
   flex-direction: column;

   & .backButton {
      width: 11rem;
      text-align: start;
      font-size: 2.4rem;

      font-family: 'Poppins';
      font-weight: 500;
      color: ${({ theme }) => theme.TEXT_COLORS.FAINT_GRAY};
      
   }

   & .dishImage {
      width: 40%;
      height: 40%;
   }

   @media ${devices.laptop} {
      padding: 3.2rem 10rem 0;
   }

   @media ${devices.mobile} {
      padding: 3.2rem 2rem 0;
   }
`;

export const Container = Styled.div`
   display: flex;
`;

export const DishInfoContainer = Styled.div`
   display: flex;
   flex-direction: column;

   color: ${({ theme }) => theme.TEXT_COLORS.FAINT_GRAY};

   & .dishDescription {
      font-size: 2.4rem;
      font-family: 'Poppins';
      font-weight: 400;
      
   }
`;

export const Span = Styled.span`

   &.dishInfoName {
      font-size: 4rem;
      font-family: 'Poppins';
      font-weight: 500;
   }

   &.dishPrice {
      font-size: 3.2rem;
      color: ${({theme}) => theme.TEXT_COLORS.FAINT_BLUE};
   }

`;