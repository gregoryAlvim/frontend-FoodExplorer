import Styled from 'styled-components';
import { devices } from '../../configs/devices';

export const Container = Styled.div`

   position: relative;

   & .titleCarousel {
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 3.2rem;

      margin: 5rem 0 3rem 0;

      color: ${({ theme }) => theme.TEXT_COLORS.FAINT_GRAY};
 
   }

   & .slidesContainer {
      position: relative;
      display: flex;
   }

   & .rightOpacityEffect {
      background: 
         linear-gradient(
            to right,
            #000A0F 40%,
            rgba(0, 10, 15, 0.272541) 90%,
            rgba(0, 10, 15, 0)
         );
         position: absolute;
         height: 100%;
         width: 10rem;
         z-index: 1;
         content: "";
   }

   & .leftOpacityEffect {
      background: 
         linear-gradient(
            to left,
            #000A0F 40%,
            rgba(0, 10, 15, 0.272541) 90%,
            rgba(0, 10, 15, 0)
         );
         position: absolute;
         height: 100%;
         width: 10rem;
         z-index: 1;
         content: "";
         right: 0;
   }

   & .arrow {
      width: 30px;
      height: 30px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      fill: #fff;
      cursor: pointer;
   }

   & .arrow--left {
      left: 5px; 
      z-index: 1;
   }

   & .arrow--right {
      left: auto;
      right: 5px;
       z-index: 1;
   }

   & .arrow--disabled {
      fill: rgba(255, 255, 255, 0.5);
   }

   @media ${devices.laptop} {

   };

   @media ${devices.mobile} {
         flex-direction: column;
         gap: 1rem;

         height: 100%;

         
         text-align: center;

         & .rightOpacityEffect {
            width: 5rem;
         }

         & .leftOpacityEffect {
               width: 5rem;
         }
      }
`;

