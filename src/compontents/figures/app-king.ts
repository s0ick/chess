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
}
