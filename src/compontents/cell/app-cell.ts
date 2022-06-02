import {AppColors} from '../colors/app-colors';
import {AppFigure} from '../figures/app-figure';
import {AppBoard} from '../board/app-board';

export class AppCell {
  readonly x: number;
  readonly y: number;
  readonly color: AppColors;

  figure: AppFigure | null;
  board: AppBoard | null;
  available: boolean; // Can move?

  id: number; // ID for React keys

  constructor(board: AppBoard, x: number, y: number, color: AppColors, figure: AppFigure | null) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.board = board;
    this.available = false;
    this.id = Math.random();
  }

  addLostFigure(figure: AppFigure) : void {
    if (figure.color === AppColors.BLACK) {
      this.board?.lostBlackFigures.push(figure);
      return;
    }

    this.board?.lostWhiteFigures.push(figure);
  };

  isEnemy(target: AppCell) : boolean {
    if (target.figure) {
      return target.figure?.color !== this.figure?.color;
    }

    return false;
  };

  isEmpty() : boolean {
    return this.figure === null;
  };

  isEmptyVertical(target: AppCell) : boolean {
    if (target.x !== this.x) {
      return false;
    }

    const min = Math.min(target.y, this.y);
    const max = Math.max(target.y, this.y);

    for (let i = min + 1; i < max; i++) {
      if (!this.board?.getCell(this.x, i).isEmpty()) {
        return false;
      }
    }

    return true;
  };

  isEmptyHorizontal(target: AppCell) : boolean {
    if (target.y !== this.y) {
      return false;
    }

    const min = Math.min(target.x, this.x);
    const max = Math.max(target.x, this.x);

    for (let i = min + 1; i < max; i++) {
      if (!this.board?.getCell(i, this.y).isEmpty()) {
        return false;
      }
    }

    return true;
  };

  isEmptyDiagonal(target: AppCell) : boolean {
    const absX = Math.abs(target.x - this.x);
    const absY = Math.abs(target.y - this.y);

    if (absX !== absY) {
      return false;
    }

    const dy = this.y < target.y ? 1 : -1;
    const dx = this.x < target.x ? 1 : -1;

    for (let i = 1; i < absY; i++) {
      if (!this.board?.getCell(this.x + dx * i, this.y + dy * i).isEmpty()) {
        return false;
      }
    }

    return true;
  };

  setFigure(figure: AppFigure) : void {
    this.figure = figure;
    this.figure.cell = this;
  };

  moveFigure(target: AppCell) : void {
    if (this.figure?.canMove(target)) {
      this.figure.moveFigure(target);

      if (target.figure) {
        this.addLostFigure(target.figure);
      }

      target.setFigure(this.figure);
      this.figure = null;
    }
  };
}
