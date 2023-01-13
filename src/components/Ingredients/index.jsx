import Lettuce from "../../assets/ingredients/alface.png";
import Plum from "../../assets/ingredients/ameixa.png"
import Almonds from "../../assets/ingredients/amêndoas.png"
import Anise from "../../assets/ingredients/aniz.png";
import Coffee from "../../assets/ingredients/café.png";
import Shrimp from "../../assets/ingredients/camarão.png";
import LowerLeg from "../../assets/ingredients/canela.png";
import EggWhites from "../../assets/ingredients/claras.png"
import Damascus from "../../assets/ingredients/damasco.png"
import Flour from "../../assets/ingredients/farinha.png"
import Lemon from "../../assets/ingredients/limão.png";
import Apple from "../../assets/ingredients/maçã.png";
import PassionFruit from "../../assets/ingredients/maracujá.png";
import Pasta from "../../assets/ingredients/massa.png";
import Bread from "../../assets/ingredients/pão.png";
import BreadNaan from "../../assets/ingredients/pão-naan.png";
import Cucumber from "../../assets/ingredients/pepino.png";
import Peach from "../../assets/ingredients/pêssego.png"
import Pesto from "../../assets/ingredients/pesto.png";
import Ham from "../../assets/ingredients/presunto.png";
import Radish from "../../assets/ingredients/rabanete.png";
import Arugula from "../../assets/ingredients/rúcula.png";
import Tomato from "../../assets/ingredients/tomate.png";
import Whiskey from "../../assets/ingredients/whiskey.png";
import noImage from '../../assets/noImage.png';


import { Container, ImageAndNameIngredientData } from "./styles";

export function Ingredients({ ingredientsData }) {

   function fetchImageIngredient(name) {
      let ingredient = name.toLowerCase().trim();

      if (ingredient == "alface") {
         return Lettuce;
      } else if (ingredient == "ameixa") {
         return Plum;

      } else if (ingredient == "amêndoas") {
         return Almonds;

      } else if (ingredient == "aniz") {
         return Anise;

      } else if (ingredient == "café") {
         return Coffee;

      } else if (ingredient == "camarão") {
         return Shrimp;

      } else if (ingredient == "canela") {
         return LowerLeg;

      } else if (ingredient == "claras") {
         return EggWhites;

      } else if (ingredient == "damasco") {
         return Damascus;

      } else if (ingredient == "farinha") {
         return Flour;

      } else if (ingredient == "limão") {
         return Lemon;

      } else if (ingredient == "maçã") {
         return Apple;

      } else if (ingredient == "maracujá") {
         return PassionFruit;

      } else if (ingredient == "massa") {
         return Pasta;

      } else if (ingredient == "pão") {
         return Bread;

      } else if (ingredient == "pão naan") {
         return BreadNaan;

      } else if (ingredient == "pepino") {
         return Cucumber;

      } else if (ingredient == "pêssego") {
         return Peach;

      } else if (ingredient == "pesto") {
         return Pesto;

      } else if (ingredient == "presunto") {
         return Ham;

      } else if (ingredient == "rabanete") {
         return Radish;

      } else if (ingredient == "rúcula") {
         return Arugula;

      } else if (ingredient == "tomate") {
         return Tomato;

      } else if (ingredient == "whiskey") {
         return Whiskey;
      } else {
         return noImage;
      }
   }

   return (
      <Container>
         {
            ingredientsData.map((ingredient) => (
               <ImageAndNameIngredientData key={String(ingredient.id)}>
                  <img src={fetchImageIngredient(ingredient.name)} alt=" " className="ingredientImage" />
                  <span className="ingredientName">{ingredient.name}</span>
               </ImageAndNameIngredientData>
            ))
         }
      </Container>
   );
}