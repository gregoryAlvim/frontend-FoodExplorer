import Styled from 'styled-components';
import { devices } from '../../configs/devices';

export const Header = Styled.header`
   width: 100%;
   height: 10.4rem;

   display: flex;
   align-items: center;
   justify-content: center;
   gap: 3.2rem;

   padding: 2.4rem 12rem;

   background: ${({ theme }) => theme.BACKGROUND_COLORS.SECONDARY};

   & .foodExplorerIcon {
      width: 3rem;
   }

   & .foodExplorerTitle {
      display: flex;
      align-items: center;
      gap: 1rem;

      min-width: 20rem;

      font-size: 2.5rem;
      font-weight: 700;
      line-height: 2.9rem;
   }

   & .myFavoritesText {
      min-width: 12rem;
      color: ${({ theme }) => theme.TEXT_COLORS.FAINT_GRAY};
   }

   & .purchaseRequestsButton {
      min-width: 20rem;
   }

   & .logOutButton {
      max-width: 5rem;
   }

   @media ${devices.laptop} {
      height: 100%;

      display: grid;
      grid-template:
      'Title MyFavorite Logout'
      'Search MyCart MyCart';

      & .foodExplorerTitle {
         grid-area: Title;
      }

      & .myFavoritesText {
         grid-area: MyFavorite;
      }

      & .purchaseRequestsButton {
         grid-area: MyCart;
         width: 100%;
      }

      & .logOutButton {
         grid-area: Logout;
      }
   }

   @media ${devices.mobile} {
      height: 100%;
      min-width: 35rem;
      padding: 2.4rem 0;
      
      margin: 0 auto;

      grid-template-rows: 10rem;
      grid-auto-columns: 10rem;
      
      justify-items: center;

      grid-template-areas:
      'Title Title Logout'
      'MyCart MyCart MyCart'
      'Search Search Search';

      & .foodExplorerTitle {
         justify-content: end;
         min-width: 22rem;
      }

      & .myFavoritesText {
         display: none;
      }

      & .purchaseRequestsButton {
         width: 80%;
      }

      & .logOutButton {
         width: 10rem;
      }
   };
`;

export const SearchContainer = Styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;

   width: 80%;
   height: 5rem;

   padding: 1.2rem;

   color: ${({ theme }) => theme.TEXT_COLORS.GRAY_PRIMARY };

   background: none;

   border-radius: 0.5rem;
   border: 1px solid ${({ theme }) => theme.TEXT_COLORS.PRIMARY };

   &::placeholder {
      color: ${({ theme }) => theme.TEXT_COLORS.GRAY_SECONDARY };
   }

   @media ${devices.laptop} {
      grid-area: Search;
   }

   @media ${devices.mobile} {
      min-width: 1rem;
   };
`;

export const Input = Styled.input`
   width: 100%;

   color: ${({ theme }) => theme.TEXT_COLORS.PRIMARY };

   border: none;
   outline: none;
   background: none;
`;