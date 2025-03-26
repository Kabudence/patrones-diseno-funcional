
// TODO: Implementar el LocalLogger Class


export class LocalLogger{
    constructor(private file:string){

    }
    writeLog(msg:string):void{
        console.log(`[${this.file}Log] ${msg}`);
    }
    writeError(msg:string):void{
        console.log(`[${this.file}Error] ${msg}`);
    }
    writeWarning(msg:string):void{
        console.log(`[${this.file}Log] ${msg}`);
    }


}
const logger=new LocalLogger('01-adapter.ts');

logger.writeLog('Log de prueba');
logger.writeError('Error de prueba');
logger.writeWarning('Warning de prueba');





interface IloggerAdapter{
    file: string;

    writeLog(msg:string) : void;
    writeError(msg:string) : void;
    writeWarning(msg:string) : void;

}

export class LoggerAdapter implements IloggerAdapter{
    
    public file: string;
    private logger= new Logger();
    
    constructor(file:string){
        this.file=file;
    }
    
    writeLog(msg:string):void{
        this.logger.log(`[${this.file}Log] ${msg}`);
    }
    writeError(msg:string):void{
        this.logger.error(`[${this.file}Error] ${msg}`);
    }
    writeWarning(msg:string):void{
        this.logger.warn(`[${this.file}Log] ${msg}`);
    }
}