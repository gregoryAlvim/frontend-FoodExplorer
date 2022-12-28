import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   * {
      margin: 0;
      border: 0;
      box-sizing: border-box;
   }

   :root {
      font-size: 62.5%;
   }

   body {
      font-family: "Roboto";
      font-weight: 400;
      font-size: 1.6rem;

      background: ${ ({ theme }) => theme.BACKGROUND_COLORS.PRIMARY };
      color: ${ ({ theme }) => theme.TEXT_COLORS.PRIMARY };
   }
`;