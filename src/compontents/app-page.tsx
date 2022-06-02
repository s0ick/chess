import React, {useCallback, useEffect, useState} from 'react';

import {AppPageWrapper} from '../styled/ui-components';

import {AppBoardContainer} from './board/app-board-container';
import {AppLostFigures} from './lost-figures/app-lost-figures';
import {AppTimer} from './timer/app-timer';
import {AppBoard} from './board/app-board';
import {AppPlayer} from './player/app-player';
import {AppColors} from './colors/app-colors';

export function AppPage() {
  const [board, setBoard] = useState(new AppBoard());
  const [whitePlayer] = useState(new AppPlayer(AppColors.WHITE));
  const [blackPlayer] = useState(new AppPlayer(AppColors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<AppPlayer | null>(null);
  const [isStopGame, setIsStopGame] = useState(false);

  const restart = useCallback(
    () => {
      const newBoard = new AppBoard();
      newBoard.initCells();
      newBoard.addFigures();
      setCurrentPlayer(whitePlayer);
      setBoard(newBoard);
    },
    [whitePlayer]
  );

  const swapPlayer = useCallback(
    () => {
      setCurrentPlayer(prevState => prevState?.color === AppColors.BLACK ? whitePlayer : blackPlayer);
    }, [blackPlayer, whitePlayer]
  );

  useEffect(() => {restart();}, [restart]);

  return (
    <AppPageWrapper>
      <AppTimer currentPlayer={currentPlayer} restart={restart} setIsStopGame={setIsStopGame}/>
      <div>
        <h3>{`Текущий игрок: ${currentPlayer?.color}`}</h3>
        <AppBoardContainer
          board={board}
          setBoard={setBoard}
          currentPlayer={currentPlayer}
          swapPlayer={swapPlayer}
          isStopGame={isStopGame}
        />
      </div>
      <div>
        <AppLostFigures
          title={'Lost black figures'}
          figures={board.lostBlackFigures}
        />
        <AppLostFigures
          title={'Lost white figures'}
          figures={board.lostWhiteFigures}
        />
      </div>
    </AppPageWrapper>
  );
}
