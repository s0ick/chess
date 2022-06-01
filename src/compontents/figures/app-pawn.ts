import blackLogo from '../../assets/black-pawn.png';
import whiteLogo from '../../assets/white-pawn.png';

import {AppColors} from '../colors/app-colors';
import {AppCell} from '../cell/app-cell';

import {AppFigure, FigureNames} from './app-figure';

export class AppPawn extends AppFigure {
  isFirstStep: boolean = true;

  constructor(color: AppColors, cell: AppCell) {
    super(color, cell);
    this.logo = color === AppColors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.PAWN;
  }

  canMove(target: AppCell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    const direction = this.cell.figure?.color === AppColors.WHITE ? -1 : 1;
    const firstStepDirection = this.cell.figure?.color === AppColors.WHITE ? -2 : 2;

    if ((target.y === this.cell.y + direction || this.isFirstStep
      && (target.y === this.cell.y + firstStepDirection))
      && target.x === this.cell.x
      && this.cell.board?.getCell(target.x, target.y).isEmpty()) {
      return true;
    }

    if (target.y === this.cell.y + direction
      && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
      && this.cell.isEnemy(target)) {
      return true;
    }

    return false;
  }

  moveFigure(target: AppCell) {
    super.moveFigure(target);
    this.isFirstStep = false;
  }
}
