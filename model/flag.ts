import { GamePiece } from "./gamePiece";

export enum flagState{
    FLAGGED,    //Bandeira marcada
    QUESTIONED  //Dúvida sobre a bandeira
}

//Essa classe serve apenas para marcar o tipo de conteúdo presente na célula
export class Flag extends GamePiece{

    private state: flagState;

    constructor(){
        super();
        this.state = flagState.FLAGGED;
    }

    public getState(): flagState{
        return this.state;
    }

    public changeState(): void{
        if(this.state == flagState.FLAGGED){
            this.state = flagState.QUESTIONED;
        }
        else{
            this.state = flagState.FLAGGED;
        }
    }
}