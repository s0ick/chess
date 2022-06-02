import React, {FC, useCallback, useEffect, useState} from 'react';

import {AppBoardWrapper} from '../../styled/ui-components';

import {AppCellContainer} from '../cell/app-cell-container';
import {AppCell} from '../cell/app-cell';
import {AppPlayer} from '../player/app-player';

import {AppBoard} from './app-board';

interface BoardProps {
  board: AppBoard;
  setBoard: (board: AppBoard) => void;
  currentPlayer: AppPlayer | null;
  swapPlayer: () => void;
  isStopGame: boolean;
}

export const AppBoardContainer: FC<BoardProps> = ({
  board, setBoard, currentPlayer, swapPlayer, isStopGame
}) => {
  const [selectedCell, setSelectedCell] = useState<AppCell | null>(null);

  const updateBoard = useCallback(
    () => {
      const newBoard = board.getCopyBoard();
      setBoard(newBoard);
    }, [setBoard, board]
  );

  const onClickCallback = useCallback(
    (cell: AppCell) => {
      if (isStopGame) {
        setSelectedCell(null);
      } else if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
        selectedCell.moveFigure(cell);
        swapPlayer();
        setSelectedCell(null);
        updateBoard();
      } else if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }, [selectedCell, swapPlayer, currentPlayer, updateBoard]
  );

  useEffect(() => {
    board.highlightCells(selectedCell);
    updateBoard();
  }, [selectedCell]);

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
