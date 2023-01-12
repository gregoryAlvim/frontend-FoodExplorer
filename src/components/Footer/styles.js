import Styled from 'styled-components';
import { devices } from '../../configs/devices';

export const Footer = Styled.footer`
   width: 100%;
   height: 7rem;

   display: flex;
   align-items: center;
   justify-content: space-between;

   margin-top: 8rem;

   padding: 2.4rem 12rem;

   background: ${({ theme }) => theme.BACKGROUND_COLORS.SECONDARY};
  

   & .foodExplorerIcon {
      width: 3rem;
      fill: rgba(255, 255, 255, 0.3);
   }

   & .foodExplorerTitle {
      display: flex;
      align-items: center;
      gap: 1rem;

      min-width: 20rem;

      font-size: 2.5rem;
      font-weight: 700;
      line-height: 2.9rem;

      color: rgba(255, 255, 255, 0.3);
   }

   & .footerDescription {
      font-family: 'DM Sans';
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.8rem;
   }

   @media ${devices.laptop} {
      flex-direction: column;
      gap: 1rem;

      padding: 2rem 8rem;

      position: absolute;

      height: 10rem;
   }

   @media ${devices.mobile} {
      padding: 2rem 5rem;
      height: 13rem;
   }
`;