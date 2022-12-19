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
      background: ${ ({ theme }) => theme.BACKGROUND_COLORS.PRIMARY };
   }
`;