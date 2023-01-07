import Styled from 'styled-components';
import { devices } from '../../configs/devices';

export const Textarea  = Styled.textarea`
      width: 100%;
      height: 5rem;

      padding: 1.2rem;
      margin-top: 0.8rem;

      color: ${({ theme }) => theme.TEXT_COLORS.GRAY_PRIMARY };

      background: none;

      border-radius: 0.5rem;
      border: 1px solid ${({ theme }) => theme.TEXT_COLORS.PRIMARY };

      resize: none;

   &::placeholder {
      color: ${({ theme }) => theme.TEXT_COLORS.GRAY_SECONDARY };
   }
`;