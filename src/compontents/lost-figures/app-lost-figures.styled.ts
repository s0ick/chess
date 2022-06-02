import styled from 'styled-components';

import {BACKGROUND} from '../../styled/color-constants';

export const AppLostFiguresWrapper = styled.div`
  height: calc(50vh - 60px);
  padding: 30px;
  margin-left: 50px;
  background-color: ${BACKGROUND};
`;

export const AppLostFiguresTitle = styled.h3`

`;

export const AppLostFiguresItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  font-size: 14px;
  
  img {
    width: 30px;
  }
`;
