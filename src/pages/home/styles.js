import Styled from 'styled-components';
import { devices } from '../../configs/devices';

export const Main = Styled.main`
   width: 100%;
   display: flex;
   flex-direction: column;
   
   padding: 10rem 12.4rem;

   @media ${devices.laptop} {
      max-width: 65rem;
      
      margin: 15rem auto 0;

      padding: 0;
   }

   @media ${devices.mobile} {
      margin: 30rem auto 0;
   }
`;

export const CoverPageContainer = Styled.div`

   position: relative;

   width: 100%;
   height: 26rem;

   margin-top: 16.4rem;

   background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
   border-radius: 0.8rem;

   color: ${({ theme }) => theme.TEXT_COLORS.FAINT_GRAY};

   & .subtitle {
      display: ;
      position: absolute;

      top: 8rem;
      left: 60rem;

      font-family: 'Poppins';
      font-weight: 500;
      font-size: 4rem;
      line-height: 3rem;

   }

   & .paragraph {
      position: absolute;
      top: 14rem;
      left: 60rem;

      font-family: 'Poppins';
      font-weight: 400;
      font-size: 1.7rem;
   }

   @media ${devices.laptop} {
      
      & .subtitle {
         top: 7rem;
         left: 1rem;
         font-size: 3.5rem;
      }

      & .paragraph {
         top: 14rem;
         left: 1rem;
      }
   }
   
   @media ${devices.mobile} {
      
      min-width: 35rem;
      height: 14rem;

      margin-top: 10rem;

      & .subtitle {
         position: absolute;
         top: 4rem;
         left: 2rem;

         font-size: 2rem;
      }

      & .paragraph {
         position: absolute;
         top: 8rem;
         left: 2rem;

         font-size: 1.5rem;
      }
   };
`

export const Image = Styled.img`

   position: absolute;
   object-fit: cover;
   top: -14rem;
   left: -7rem;

   @media ${devices.laptop} {
      opacity: 0.9;
   }

   @media ${devices.mobile} {
      max-width: 35rem;
      top: -7.4rem;
      left: 0;
   };
`