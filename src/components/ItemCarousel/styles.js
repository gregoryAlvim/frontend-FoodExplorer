import Styled from 'styled-components';
import { devices } from '../../configs/devices';

export const Container = Styled.div`
   position: relative;
   width: 30rem;
   height: 40rem;

   background: rgba(0, 0, 0, 0.32);

   border: 1px solid rgba(0, 0, 0, 0.65);
   
   & .heartButton {
      display: flex;
      justify-content: end;
      padding: 1.6rem;

      position: absolute;
   }
`;

export const Span = Styled.span`

   &.dishInfoName {
      font-family: 'Poppins';
      font-weight: 700;
      font-size: 2.3rem;

      color: ${({theme}) => theme.TEXT_COLORS.FAINT_GRAY};
   }

   &.dishPrice {
      font-size: 3.2rem;
      color: ${({theme}) => theme.TEXT_COLORS.FAINT_BLUE};
   }

`;

export const Section = Styled.section`
   display: flex;
   flex-direction: column;
   gap: 1.6rem;

   padding: 4rem;

   border-radius: 0.8rem;

   & .dishDescription {
      font-family: 'Roboto';
      font-size: 1.4rem;

      color: ${({theme}) => theme.TEXT_COLORS.GRAY_PRIMARY};
   }
`;

export const IncludeDishContainer = Styled.div`
   display: flex;
`;