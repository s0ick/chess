import React, {FC, useCallback, useEffect, useState} from 'react';

import {AppBoardWrapper} from '../../styled/ui-components';

import {AppCell} from '../cell/app-cell';
import {AppCellContainer} from '../cell/app-cell-container';

import {AppBoard} from './app-board';

interface BoardProps {
  board: AppBoard;
  setBoard: (board: AppBoard) => void;
}

export const AppBoardContainer: FC<BoardProps> = ({board, setBoard}) => {
  const [selectedCell, setSelectedCell] = useState<AppCell | null>(null);

  const onClickCallback = (cell: AppCell) => {
    if (cell.figure) {
      setSelectedCell(cell);
    }
  };

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };

  const highlightCells = () => {
    board.highlightCells(selectedCell);
    updateBoard();
  };

  useEffect(() => {
    highlightCells();
  }, [selectedCell])

  return (
    <AppBoardWrapper>
      {board.cells.map((row, index) =>
        <React.Fragment key={`cell-${index}`}>
          {row.map(cell =>
            <AppCellContainer
              clickCallback={onClickCallback}
              cell={cell}
              key={cell.id}
              selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
            />
          )}
        </React.Fragment>
      )}
    </AppBoardWrapper>
  );
}
