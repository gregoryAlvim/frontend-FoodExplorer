import Styled from 'styled-components';
import { devices } from '../../configs/devices';

export const Main = Styled.main`
   padding: 13rem 30rem 0;

   display: flex;
   flex-direction: column;

   & .backButton {
      width: 11rem;
      text-align: start;
      font-size: 2.4rem;

      font-family: 'Poppins';
      font-weight: 500;
      color: ${({ theme }) => theme.TEXT_COLORS.FAINT_GRAY};
      
   }

   & .titlePage {
      font-size: 3.2rem;

      font-family: 'Poppins';
      font-weight: 500;
      color: ${({ theme }) => theme.TEXT_COLORS.FAINT_GRAY};

      margin: 2.4rem 0 3.2rem;
   }

   @media ${devices.laptop} {
      padding: 15rem 10rem 0;
   }

   @media ${devices.mobile} {
      padding: 30rem 2rem 0;
   }
`;

export const Form = Styled.form`
   display: grid;
   grid-template:
   "inputImage inputName inputName"
   "inputIngredients inputIngredients inputPrice"
   "dishCategory inputDescription inputDescription";

   gap: 3.2rem;
   font-size: 1.6rem;

   & .dishImage {
      grid-area: inputImage;
      cursor: pointer;
      
      .dishImageContainer {
         color: ${({ theme }) => theme.TEXT_COLORS.PRIMARY};
      }

      .dishInputImage {
         display: none;
      }

   }

   & .dishName {
      grid-area: inputName;
   }

   & .dishIngredients {
      grid-area: inputIngredients;
   }

   & .dishPrice {
      grid-area: inputPrice;
   }

   & .dishDescription {
      grid-area: inputDescription;
   }

   @media ${devices.laptop} {
      display: flex;
      flex-direction: column;
   }

   @media ${devices.mobile} {
      display: flex;
      flex-direction: column;
   }
`;

export const Span = Styled.span`
   color: ${({ theme }) => theme.TEXT_COLORS.GRAY_SECONDARY };
`;

export const Input = Styled.input`
   width: 100%;

   color: ${({ theme }) => theme.TEXT_COLORS.PRIMARY };

   border: none;
   outline: none;
   background: none;
`;

export const Container = Styled.div`
   display: flex;
   align-items: center;
   
   gap: 1rem;

   width: 100%;
   height: 5rem;

   padding: 1.2rem;

   margin-top: 0.8rem;

   color: ${({ theme }) => theme.TEXT_COLORS.GRAY_PRIMARY };

   background: none;

   border-radius: 0.5rem;
   border: 1px solid ${({ theme }) => theme.TEXT_COLORS.PRIMARY };
`;

export const ButtonsFormContainer = Styled.div`
   display: flex;
   gap: 3.2rem;
   justify-content: space-between;
   margin-top: 3.2rem;

   & .saveNewDishButton {
      background: rgba(255, 255, 255, 0.1);
   }
`;