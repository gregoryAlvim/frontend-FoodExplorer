import Styled from 'styled-components';

export const Label = Styled.label`
   display: flex;
   flex-direction: column;

   font-weight: 400;
   line-height: 100%;

   color: ${({ theme }) => theme.TEXT_COLORS.GRAY_PRIMARY }
`;