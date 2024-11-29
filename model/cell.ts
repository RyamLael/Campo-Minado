import { GamePiece } from './gamePiece'
import { Bomb } from './bomb'; 
import { flagState, Flag } from './flag';

export class Cell {
    // private position: [number, number];
    private content: GamePiece | null;

    // position: [number, number], 
    constructor(content: GamePiece | null) {
        // this.position = position;
        this.content = content;
    }

    private isEmpty(): boolean{
        return this.content === null;
    }

    public hasbomb(): boolean{
        return this.content instanceof Bomb;
    }

    public hasFlag(): boolean{
        return this.content instanceof Flag;
    }

    public getContent(): GamePiece | null{
        return this.content;
    }

    public setContent(content: GamePiece | null): void{
       this.content = content;
    }
}