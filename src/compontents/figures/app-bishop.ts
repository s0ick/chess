import blackLogo from '../../assets/black-bishop.png';
import whiteLogo from '../../assets/white-bishop.png';

import {AppColors} from '../colors/app-colors';
import {AppCell} from '../cell/app-cell';

import {AppFigure, FigureNames} from './app-figure';

export class AppBishop extends AppFigure {
  constructor(color: AppColors, cell: AppCell) {
    super(color, cell);
    this.logo = color === AppColors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }

  canMove(target: AppCell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    return this.cell.isEmptyDiagonal(target);
  }
}
