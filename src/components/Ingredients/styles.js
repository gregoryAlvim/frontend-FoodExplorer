import Styled from "styled-components";

export const Container = Styled.div`

   display: flex;
  
   & .ingredientImage {
    width: 7rem;
  }
  .ingredientName {
    font-size: 1.8rem;
  }
`

export const ImageAndNameIngredientData = Styled.div`
   display: flex;
   flex-direction: column;
`