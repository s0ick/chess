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

  moveFigure(target: AppCell) {
    if (this.figure?.canMove(target)) {

    }
  }
}
