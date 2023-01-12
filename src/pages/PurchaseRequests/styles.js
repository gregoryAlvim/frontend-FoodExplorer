import Styled from 'styled-components';
import { devices } from '../../configs/devices';

export const MainContainer = Styled.main`

   & .backButton {
      display: flex;
      padding: 15rem 8rem 0;

      font-size: 2rem;

      font-family: 'Poppins';
      font-weight: 500;
      
      color: ${({ theme }) => theme.TEXT_COLORS.FAINT_GRAY};

      @media ${devices.mobile} {
         padding: 35rem 2rem 0;
      }
   }

   & .titlePage {
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 3.2rem;
      margin-bottom: 3.2rem;
   }
`;

export const MainRequestsContainer = Styled.div`

   width: 113rem;
   height: 40rem;
   margin: 0 auto;
   
`;

export const Table = Styled.table`
   
   width: 100%;
   
   border: 2px solid #192227;
   border-collapse: collapse;
   
`;

export const THead = Styled.thead` 
`;

export const TBody = Styled.tbody`
   text-align: center;
`;

export const Tr = Styled.tr` 
`;

export const Th = Styled.th`
   padding: 2rem 2.4rem;
   border: 1px solid #192227;
   font-weight: 700;
   font-size: 1.4rem;
   color: ${({ theme }) => theme.TEXT_COLORS.FAINT_GRAY};
   text-align: start;
`;

export const Td = Styled.td`
   padding: 1.6rem 2.4rem;
   border: 1px solid #192227;
   color: ${({ theme }) => theme.TEXT_COLORS.GRAY_PRIMARY};

   &.requestStatus {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 0.8rem;
   }
`;