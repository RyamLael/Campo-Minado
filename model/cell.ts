import { GamePiece } from './gamePiece'
import { Bomb } from './bomb'; 
import { flagState, Flag } from './flag';

export class Cell {
    private Revealed: boolean;
    private bombsAround: number;
    private content: GamePiece | null;
    private position: [number, number];

    constructor(content: GamePiece | null, position: [number, number]) {
        this.content = content;
        this.position = position;
        this.Revealed = false;
        this.bombsAround = 0;
    }

    //Verifiers
    private isEmpty(): boolean{
        return this.content === null;
    }

    public hasbomb(): boolean{
        return this.content instanceof Bomb;
    }

    public hasFlag(): boolean{
        return this.content instanceof Flag;
    }

    //getters and setters

    
    public getPosition(){
        return this.position
    }
    
    public getPosX(){
        return this.position[0];
    }

    public getPosY(){
        return this.position[1];
    }

    public isRevealed(){
        return this.Revealed;
    }

    public reveal(){
        this.Revealed = true;
    }

    public getBombsAround(): number{
        return this.bombsAround;
    }

    public setBombsAround(bombsAround: number):void{
        this.bombsAround = bombsAround; 
    }

    public getContent(): GamePiece | null{
        return this.content;
    }

    public setContent(content: GamePiece | null): void{
       this.content = content;
    }
}