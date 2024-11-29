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
                cells[i][j] = new Cell(null, [i, j]);
            }
        }
        return cells;
    }

    private populateBombs(nBombs: number, cells: Cell[][]): void {

        for (let i = 0; i < nBombs; i++) {

            let randomPosX = Math.floor(Math.random() * this.nRows);
            let randomPosY = Math.floor(Math.random() * this.nColumns);

            if (cells[randomPosX][randomPosY].getContent === null) {
                cells[randomPosX][randomPosY].setContent(new Bomb());
            }
            else {
                i--;
            }
        }
    }

    private countBombsAround(cell: Cell): number {
        /*
        Essa função é um pouco difícil de entender, mas basicamente criei um vetor de direções ao redor da célula (a esquerda da célula é [-1, 0], por exemplo) e 
        incremento cada posição dele nas coordenadas da célula passada no parâmetro. Sendo assim, verifico em cada uma dessas coordenadas se há uma bomba ou não.
        */
        let bomsCounter = 0;
        const aroundDirections = [
            [-1, 1], [0, 1], [1, 1],
            [-1, 0],         [1, 0],
            [-1,-1], [0,-1], [1, -1]
        ]

        for (let [xAroundDir, yAroundDir] of aroundDirections) {
            let xIndex = xAroundDir + cell.getPosX();
            let yIndex = yAroundDir + cell.getPosY();

            if (this.isValidPosition(xIndex, yIndex)) {
                if (this.cells[xIndex][yIndex].hasbomb()) {
                    bomsCounter++;
                }
            }
        }
        return bomsCounter;
    }

    private isValidPosition(xIndex: number, yIndex: number): boolean {
        //Verifica se os índices estão dentro dos limites de tamanho da matriz de células
        return xIndex >= 0 && xIndex < this.nColumns && yIndex >= 0 && yIndex < this.nRows;
    }

}