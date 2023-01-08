import Styled from "styled-components";

export const Container = Styled.div`

   display: flex;
   align-items: center;

   background-color: ${ ({ theme, isNew }) => isNew ? "transparent" : theme.BACKGROUND_COLORS.GRAY_SECONDARY };

   color: ${ ({ theme }) => theme.TEXT_COLORS.PRIMARY };

   border: ${ ({ theme, isNew }) => isNew ? `1px dashed ${theme.TEXT_COLORS.GRAY_SECONDARY}` : "none" };

   border-radius: 1rem;

   .button-delete {
      color: ${ ({ theme }) => theme.BACKGROUND_COLORS.WHITE_PRIMARY };
   }

   .button-add {
      color: ${ ({ theme }) => theme.BACKGROUND_COLORS.WHITE_PRIMARY };
   }
   
`;

export const Input = Styled.input`
   height: 3.2rem;

   width: ${ ({ isNew }) => isNew ? '8rem' : '8rem' };

   padding-left: 1.2rem;

   color: ${ ({ theme }) => theme.TEXT_COLORS.PRIMARY };

   border: none;
   background: transparent;
   outline: none;

   &::placeholder {
      color: ${ ({ theme }) => theme.TEXT_COLORS.PRIMARY };
   }
`;

export const Button = Styled.button`
   border: none;
   background: none;
   cursor: pointer;
`;