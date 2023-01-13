import Styled from 'styled-components';
import { devices } from '../../configs/devices';

export const Main = Styled.main`
   padding: 13.5rem 25rem 0;
   height: 100%;
   position: relative;

   display: flex;
   flex-direction: column;

   & .backButton {
      
      width: 11rem;
      text-align: start;
      font-size: 2.4rem;

      margin-bottom: 3rem;

      font-family: 'Poppins';
      font-weight: 500;
      color: ${({ theme }) => theme.TEXT_COLORS.FAINT_GRAY};
      
   }

   & .dishImage {
      width: 40rem;
      height: 40rem;
      border-radius: 50%;

      background-size: cover;
   }

   @media ${devices.laptop} {
      padding: 20rem 1rem 0;
   }

   @media ${devices.mobile} {
      padding: 30rem 2rem 0;
      
      & .dishImage {
         width: 70%;
         height: 70%;
      }
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
      min-width: 13rem;
      color: ${({theme}) => theme.TEXT_COLORS.FAINT_BLUE};
      margin-right: 2rem;
   }

   @media ${devices.laptop} {
      margin-right: 0rem;
   }

   @media ${devices.mobile} {
      &.dishInfoName {
         font-size: 3.7rem;
      }
   }

`;

export const Container = Styled.div`
   display: flex;
   gap: 4rem;

   @media ${devices.mobile} {
      flex-direction: column;
      align-items: center;
   }
`;

export const DishInfoContainer = Styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;

   color: ${({ theme }) => theme.TEXT_COLORS.FAINT_GRAY};

   & .dishDescription {
      font-size: 2rem;
      font-family: 'Poppins';
      font-weight: 400;
   }

   @media ${devices.mobile} {
      align-items: center;

      & .dishDescription {
         text-align: center;
      }
   }
`;

export const PriceAndIncludeContainer = Styled.div`
   display: flex;
   align-items: center;
   gap: 4rem;

   @media ${devices.laptop} {
      gap: .3rem;
   }
`;

export const IncludeDishContainer = Styled.div`
   display: flex;
   align-items: center;
   gap: 1.2rem;

   color: ${({theme}) => theme.TEXT_COLORS.GRAY_PRIMARY};

   & .addButton {
      width: 10rem;
   }
`;

export const IncludeDishButtonsContainer = Styled.div`
   display: flex;
   align-items: center;
   gap: 1.2rem;

   color: ${({theme}) => theme.TEXT_COLORS.GRAY_PRIMARY};

   & .minusAndPlusButton {
      display: flex;
      align-items: center;
      width: 3rem;
   }

   & .dishAmount {
      font-weight: 700;
      font-size: 2rem;
   }
`;
