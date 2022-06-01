import blackLogo from '../../assets/black-king.png';
import whiteLogo from '../../assets/white-king.png';

import {AppColors} from '../colors/app-colors';
import {AppCell} from '../cell/app-cell';

import {AppFigure, FigureNames} from './app-figure';

export class AppKing extends AppFigure {
  constructor(color: AppColors, cell: AppCell) {
    super(color, cell);
    this.logo = color === AppColors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: AppCell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    const direction = this.cell.figure?.color === AppColors.WHITE ? -1 : 1;

    if ((target.y === this.cell.y
        || target.y === this.cell.y + direction
        || target.y + direction === this.cell.y)
      && (target.x === this.cell.x
        || target.x === this.cell.x + direction
        || target.x + direction === this.cell.x)
      && (this.cell.board?.getCell(target.x, target.y).isEmpty()
        || this.cell.isEnemy(target)
      )) {
      return true;
    }

    return false;
  }
}
