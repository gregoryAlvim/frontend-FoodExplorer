import Styled from 'styled-components';
import { devices } from '../../configs/devices';

export const Container = Styled.div`
   width: 100%;
   height: 10.4rem;

   grid-area: header;

   position: fixed;
   z-index: 3;
   top: 0;

   padding: 2.4rem 12rem;

   background: ${({ theme }) => theme.BACKGROUND_COLORS.SECONDARY};

   @media ${devices.laptop} {
      height: 15rem;
   }

   @media ${devices.mobile} {
      min-width: 35rem;
      padding: 2.4rem 0;

      height: 30rem;
      
      margin: 0 auto;
   }
`;

export const Header = Styled.header`
   
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 3.2rem;

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
      width: 35rem;
      color: ${({ theme }) => theme.TEXT_COLORS.FAINT_GRAY};
   }

   & .purchaseRequestsButton {
      width: 45rem;
   }

   & .logOutButton {
      max-width: 5rem;
   }

   @media ${devices.laptop} {
      justify-content: space-around;

      display: grid;
      grid-template:
      "Title Title myFavorite Logout"
      "Search Search MyCart MyCart";

      gap: 2rem;

      & .foodExplorerTitle {
         grid-area: Title;
      }

      & .myFavoritesText {
         grid-area: myFavorite;
         width: 15rem;
         
      }

      & .purchaseRequestsButton {
         grid-area: MyCart;
         width: 35rem;
      }

      & .logOutButton {
         grid-area: Logout;
         
      }
   }

   @media ${devices.mobile} {

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
      width: 35rem;
   }

   @media ${devices.mobile} {
      width: 80%;
   };
`;

export const Input = Styled.input`
   width: 100%;

   color: ${({ theme }) => theme.TEXT_COLORS.PRIMARY };

   border: none;
   outline: none;
   background: none;
`;