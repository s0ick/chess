import React, {useCallback, useEffect, useState} from 'react';

import {AppPageWrapper} from '../styled/ui-components';

import {AppBoard} from './board/app-board';
import {AppBoardContainer} from './board/app-board-container';

export function AppPage() {
  const [board, setBoard] = useState(new AppBoard());

  const restart = useCallback(
    () => {
      const newBoard = new AppBoard();
      newBoard.initCells();
      newBoard.addFigures();
      setBoard(newBoard);
    },
    []
  );

  useEffect(() => {
    restart();
  }, [])

  return (
    <AppPageWrapper>
      <AppBoardContainer
        board={board}
        setBoard={setBoard}
      />
    </AppPageWrapper>
  );
}
