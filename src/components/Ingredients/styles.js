import Styled from "styled-components";

export const Container = Styled.div`

   display: flex;
   align-items: center;
   gap: 2rem;

   margin: 1rem 0 4rem;
  
   & .ingredientImage {
    width: 4.7rem;
    height: 5.9rem;
    margin: 0 auto;
  }

  .ingredientName {
    font-family: 'Poppins';
    font-size: 1.1em;
    font-weight: 400;
  }
`

export const ImageAndNameIngredientData = Styled.div`
   display: flex;
   flex-direction: column;
`