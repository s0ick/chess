import blackLogo from '../../assets/black-queen.png';
import whiteLogo from '../../assets/white-queen.png';

import {AppColors} from '../colors/app-colors';
import {AppCell} from '../cell/app-cell';

import {AppFigure, FigureNames} from './app-figure';

export class AppQueen extends AppFigure {
  constructor(color: AppColors, cell: AppCell) {
    super(color, cell);
    this.logo = color === AppColors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.QUEEN;
  }

  canMove(target: AppCell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    if (this.cell.isEmptyVertical(target)) {
      return true;
    }

    if (this.cell.isEmptyHorizontal(target)) {
      return true;
    }

    return this.cell.isEmptyDiagonal(target);
  }
}
