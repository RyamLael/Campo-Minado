import { Cell } from './cell';
import { Bomb } from './bomb';

class Field {
    private nRows: number;
    private nColumns: number;
    private nBombs: number;
    private cells: Cell[][];

    construtor(nRows: number, nColumns: number, nBombs: number) {
        this.nRows = nRows;
        this.nColumns = nColumns;
        this.nBombs = nBombs;
        this.cells = this.createField(nRows, nColumns);
    }

    private createField(nRows: number, nColumns: number): Cell[][] {

        let cells: Cell[][] = [];

        for (let i = 0; i < nRows; i++) {
            for (let j = 0; j < nColumns; j++) {
                cells[i][j] = new Cell(null);
            }
        }
        return cells;
    }

    private populateBombs(nBombs: number, cells: Cell[][]): void {

        for(let i = 0; i < nBombs; i++) {

            let randomPosX = Math.floor(Math.random() * this.nRows);
            let randomPosY = Math.floor(Math.random() * this.nColumns);

            if(cells[randomPosX][randomPosY].getContent === null){
                cells[randomPosX][randomPosY].setContent(new Bomb());
            }
            else{
                i--;
            }
        }
    }
}