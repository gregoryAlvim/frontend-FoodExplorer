import Styled from 'styled-components';
import { devices } from '../../configs/devices';

export const Select = Styled.select`
   width: 100%;
   height: 5rem;

   padding: 1.2rem;
   margin-top: 0.8rem;

   color: ${({ theme }) => theme.TEXT_COLORS.GRAY_PRIMARY};

   background: none;

   border-radius: 0.5rem;
   border: 1px solid ${({ theme }) => theme.TEXT_COLORS.PRIMARY};
   
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;

   cursor: pointer;
`;

export const Option = Styled.option`
   background: ${ ({ theme }) => theme.BACKGROUND_COLORS.PRIMARY };
`;
