import styled from 'styled-components';
import { GRAY, WHITE } from '../constants/ColorsTypes';

export const CardContainer = styled.div`
  min-height: ${props => props.height || '30rem'};
  background-color: ${props => props.background || WHITE};
  border: 1px solid ${props => props.borderColor || GRAY};
  border-radius: ${props => props.borderRadius || '0.75rem'};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: ${props => props.width || '30%'};
  @media (max-width: 576px) {
    width: 100%;
  }
`;
