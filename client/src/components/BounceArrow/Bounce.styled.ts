import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
    0%,
    20%,
    50%,
    80%,
    100% {
    transform: translateY(0);
    }
    40% {
    transform: translateY(-30px);
    }
    60% {
    transform: translateY(-15px);
    }
`;

export const IconLink = styled.a`
  color: #5db7f3;
  animation: ${bounce} 2s infinite;

  &:hover {
    color: #5db7f3;
  }
`;
