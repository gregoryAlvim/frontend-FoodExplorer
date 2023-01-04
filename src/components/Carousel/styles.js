import Styled from 'styled-components';

export const Container = Styled.div`

   position: relative;

   & .titleCarousel {
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 3.2rem;

      margin: 5rem 0 3rem 0;

      color: ${({theme}) => theme.TEXT_COLORS.FAINT_GRAY};
   }

   & .carouselContainer {
      position: relative;
      
      :before {
         background: 
         linear-gradient(
            to right,
            #000A0F 3%,
            rgba(0, 10, 15, 0.272541) 10%,
            rgba(0, 10, 15, 0),
            rgba(0, 10, 15, 0),
            rgba(0, 10, 15, 0),
            rgba(0, 10, 15, 0.272541) 90%,
            #000A0F 97%
         );
         position: absolute;
         height: 100%;
         width: 100%;
         z-index: 2;
         content: "";
      } 
   
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
      z-index: 2;
   }

   & .arrow--right {
      left: auto;
      right: 5px;
       z-index: 2;
   }

   & .arrow--disabled {
      fill: rgba(255, 255, 255, 0.5);
   }
`;