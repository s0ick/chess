import {AppCell} from '../cell/app-cell';
import {AppColors} from '../colors/app-colors';
import {AppPawn} from '../figures/app-pawn';
import {AppKing} from '../figures/app-king';
import {AppQueen} from '../figures/app-queen';
import {AppBishop} from '../figures/app-bishop';
import {AppKnight} from '../figures/app-knight';
import {AppRook} from '../figures/app-rook';

export class AppBoard {
  cells: AppCell[][] = []

  public initCells() {
     for (let i = 0; i < 8; i++) {
       const row: AppCell[] = [];

       for (let j = 0; j < 8; j++) {
         if ((i + j) % 2 !== 0) {
           row.push(new AppCell(this, j, i, AppColors.BLACK, null)); // black cells
         } else {
           row.push(new AppCell(this, j, i, AppColors.WHITE, null)) // white cells
         }
       }

       this.cells.push(row);
     }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  public highlightCells(selectedCell: AppCell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];

      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        target.available = !!selectedCell?.figure?.canMove(target);
      }
    }
  }

  public getCopyBoard() : AppBoard {
    const newBoard = new AppBoard();
    newBoard.cells = this.cells;
    return newBoard;
  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new AppPawn(AppColors.BLACK, this.getCell(i, 1));
      new AppPawn(AppColors.WHITE, this.getCell(i, 6));
    }
  }

  private appKings() {
    new AppKing(AppColors.BLACK, this.getCell(4, 0));
    new AppKing(AppColors.WHITE, this.getCell(4, 7));
  }

  private addQueens() {
    new AppQueen(AppColors.BLACK, this.getCell(3, 0));
    new AppQueen(AppColors.WHITE, this.getCell(3, 7));
  }

  private addBishops() {
    new AppBishop(AppColors.BLACK, this.getCell(2, 0));
    new AppBishop(AppColors.BLACK, this.getCell(5, 0));
    new AppBishop(AppColors.WHITE, this.getCell(2, 7));
    new AppBishop(AppColors.WHITE, this.getCell(5, 7));
  }

  private addKnights() {
    new AppKnight(AppColors.BLACK, this.getCell(1, 0));
    new AppKnight(AppColors.BLACK, this.getCell(6, 0));
    new AppKnight(AppColors.WHITE, this.getCell(1, 7));
    new AppKnight(AppColors.WHITE, this.getCell(6, 7));
  }

  private addRooks() {
    new AppRook(AppColors.BLACK, this.getCell(0, 0));
    new AppRook(AppColors.BLACK, this.getCell(7, 0));
    new AppRook(AppColors.WHITE, this.getCell(0, 7));
    new AppRook(AppColors.WHITE, this.getCell(7, 7));
  }

  public addFigures() {
    this.addPawns();
    this.addRooks();
    this.addBishops()
    this.addKnights();
    this.appKings();
    this.addQueens();
  }
}
