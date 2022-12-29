import Styled from 'styled-components';

export const Button = Styled.button`
   width: 100%;
   height: 5rem;

   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1rem;

   padding: 1.2rem;

   font-family: "Poppins";
   font-weight: 500;

   color: ${({ theme }) => theme.TEXT_COLORS.PRIMARY };
   background: ${({ theme }) => theme.BACKGROUND_COLORS.RED_PRIMARY};

   border-radius: 0.5rem;
   border: none;

   cursor: pointer;

   &:hover {
      transition-delay: 0.1s;
      opacity: 0.9;
   }

   &:focus {
      transition-delay: 0.1s;
      opacity: 0.9;
   }
`;