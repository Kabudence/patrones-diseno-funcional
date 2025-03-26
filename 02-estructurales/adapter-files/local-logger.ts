
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

