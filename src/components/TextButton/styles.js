import Styled from 'styled-components';

export const Button = Styled.button`
   width: 100%;

   font-family: "Poppins";
   font-weight: 500;

   color: ${({ theme }) => theme.TEXT_COLORS.PRIMARY };
   background: none;

   border-radius: 0.5rem;
   border: none;

   cursor: pointer;

   &:hover {
      transition-delay: 0.1s;
      opacity: 0.7;
   }

   &:focus {
      transition-delay: 0.1s;
      opacity: 0.7;
   }
`;