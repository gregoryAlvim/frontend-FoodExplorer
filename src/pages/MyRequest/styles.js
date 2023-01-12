import Styled from 'styled-components';
import { devices } from '../../configs/devices';

export const MainContainer = Styled.div`

   & .backButton {
      display: flex;
      padding: 15rem 12.3rem 0;

      font-size: 2rem;

      font-family: 'Poppins';
      font-weight: 500;
      
      color: ${({ theme }) => theme.TEXT_COLORS.FAINT_GRAY};

      @media ${devices.mobile} {
         padding: 35rem 2rem 0;
      }
   }
`;

export const Main = Styled.main`
   display: flex;
   gap: 7.5rem;
   padding: 3rem 12.3rem;

   @media ${devices.mobile} {
      padding: 2rem 2rem 0;
      flex-direction: column;
   }
`;

export const MyRequestContainer = Styled.div`
   width: 44.4rem;
   height: 50rem;

   position: relative;

   overflow-y: auto;

   & .myRequestTitle {
      margin-bottom: 1.5rem;
   }
`;

export const DishItemContainer = Styled.div`
   
`;

export const DishInfoItemContainer = Styled.div`
   display: flex;
   align-items: center;
   gap: 1.3rem;
   position: relative;


   width: 40.4rem;
   height: 10.4rem;

   & .dishImage {
      width: 7.2rem;
   }
`;

export const DishNameAndButtonContainer = Styled.div`
   display: flex;
   align-items: start;
   flex-direction: column;
   justify-content: start;

   & .deleteDishButton {
      width: 4rem;
      font-size: 1.2rem;
      padding: 0;
      color: #AB4D55;
   }
`;

export const DishNameAndPriceContainer = Styled.div`

`;

export const PriceSpan = Styled.span`
   font-family: 'Poppins';
   font-weight: 500;
   font-size: 2rem;

   color: ${({ theme }) => theme.TEXT_COLORS.PRIMARY};

   &.dishPrice {
      font-weight: 400;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.TEXT_COLORS.GRAY_PRIMARY};
      margin-left: 1rem;
   }

   &.dishTotalPrice {
      font-weight: 500;
      font-size: 2rem;

      position: absolute;
      bottom: 0;
   }
`;


export const PaymentContainer = Styled.div`
   width: 53rem;
   height: 44rem;
   
`;