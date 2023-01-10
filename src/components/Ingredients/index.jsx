import { Container, ImageAndNameIngredientData } from "./styles";

export function Ingredients({ ingredientsData }) {

    return (
      <Container>
         {
            ingredientsData.map((ingredient) => (
               <ImageAndNameIngredientData key={String(ingredient.id)}>
                  <img src={`/src/assets/ingredients/${ingredient.name}.png`} alt="Ingredientes que são usados no seu prato." className="ingredientImage" />
                  <span className="ingredientName">{ingredient.name}</span>
               </ImageAndNameIngredientData>
            ))
         }
      </Container>
    );
  }