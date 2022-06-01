import logo from '../../assets/black-bishop.png';

import {AppColors} from '../colors/app-colors';
import {AppCell} from '../cell/app-cell';

export enum FigureNames {
  FIGURE = 'Фигура',
  KING = 'Король',
  KNIGHT = 'Конь',
  PAWN = 'Пешка',
  QUEEN = 'Ферзь',
  ROOK = 'Ладья',
  BISHOP = 'Слон'
}

export class AppFigure {
  color: AppColors;
  logo: typeof logo | null;
  cell: AppCell;
  name:  FigureNames;
  id: number;

  constructor(color: AppColors, cell: AppCell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }

  canMove(target: AppCell) : boolean {
    return true
  }

  moveFigure(target: AppCell) {

  }
}
