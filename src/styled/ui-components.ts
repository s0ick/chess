import styled from 'styled-components';

import {AVAILABLE_COLOR, BLACK_PIECES, SELECTED_CELL, WHITE_PIECES} from './color-constants';

export type StylesProps = {
  bgc?: string,
  selected: boolean,
  isFigure: boolean
};

export const AppPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppBoardWrapper = styled.div`
  width: calc(76px * 8);
  height: calc(76px * 8); 
  
  display: flex;
  flex-wrap: wrap;
`;

export const AppCellWrapper = styled.div<StylesProps>`
  width: 76px;
  height: 76px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: ${props => {
    if (props.selected) {
      return SELECTED_CELL;
    }
    return props.bgc === 'black' ? BLACK_PIECES: WHITE_PIECES;
  }};
  
  cursor: ${props => props.isFigure ? 'pointer' : 'default'};
  
  img {
    width: 64px;
    height: 64px;
    position: relative;
  }
`;

export const AppCellAvailable = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${AVAILABLE_COLOR};
  border-radius: 50%;
`;
