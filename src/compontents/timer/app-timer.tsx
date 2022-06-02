import React, {FC, useCallback, useEffect, useRef, useState} from 'react';

import {AppPlayer} from '../player/app-player';
import {AppColors} from '../colors/app-colors';

interface Props {
  currentPlayer: AppPlayer | null;
  restart: () => void;
  setIsStopGame: (arg: boolean) => void;
}

export const AppTimer: FC<Props>= ({currentPlayer, restart, setIsStopGame}) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>> (null);

  const decrementBlackTimer = (): void => {
    setBlackTime(prevState => prevState - 1);
  };

  const decrementWhiteTimer = (): void => {
    setWhiteTime(prevState => prevState - 1);
  };

  const handleReset = useCallback(
    () => {
      setBlackTime(300);
      setWhiteTime(300);
      restart();
    }, [restart]
  );

  useEffect(() => {
    if (timer.current) {
      clearInterval(timer.current);
    }

    const callback = (): void => currentPlayer?.color === AppColors.WHITE ? decrementWhiteTimer() : decrementBlackTimer();
    timer.current = setInterval(callback, 1000);
  }, [currentPlayer, timer]);

  useEffect(() => {
    if (blackTime <= 0 || whiteTime <= 0) {
      if (timer.current) {
        clearInterval(timer.current);
      }

      setIsStopGame(true);
    }
  }, [blackTime, whiteTime, timer]);

  return (
    <div>
      <div>
        <button onClick={handleReset}>{'Restart game'}</button>
      </div>

      <h3>{`Черные: ${blackTime}`}</h3>
      <h3>{`Белые: ${whiteTime}`}</h3>
    </div>
  );
}
