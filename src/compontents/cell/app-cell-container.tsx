import React, {FC} from 'react';

import {AppCellAvailable, AppCellWrapper} from '../../styled/ui-components';
import {AVAILABLE_COLOR} from '../../styled/color-constants';

import {AppCell} from './app-cell';

interface Props {
  cell: AppCell,
  selected: boolean,
  clickCallback: (cell: AppCell) => void;
}

export const AppCellContainer: FC<Props> = ({cell, selected, clickCallback}) => {
  return (
    <AppCellWrapper
      bgc={cell.color}
      selected={selected}
      isFigure={!!cell.figure || cell.available}
      onClick={() => clickCallback(cell)}
      style={{
        backgroundColor: (cell.available && cell.figure) ? AVAILABLE_COLOR : ''
      }}
    >
      {(cell.available && !cell.figure) && <AppCellAvailable/>}
      {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name}/>}
    </AppCellWrapper>
  );
}
