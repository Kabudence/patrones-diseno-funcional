/**
 * ! Patrón Facade
 * Este patrón proporciona una interfaz unificada para un conjunto de interfaces
 * en un subsistema.
 *
 * Facade define una interfaz de nivel más alto que hace que el subsistema
 * sea más fácil de usar.
 *
 * * Es útil cuando un subsistema es complejo o difícil de entender para
 * * proporcionar una interfaz simplificada para el cliente.
 *
 * https://refactoring.guru/es/design-patterns/facade
 */
import {COLORS} from "../helpers/colors";



// 1. Clases del Subsistema

class CPU {
  stopOperations(): void {
    console.log('CPU: Deteniendo operaciones.');
  }

  jump(position: number): void {
    console.log(`CPU: Saltando a la posición de memoria ${position}.`);
  }

  execute(): void {
    console.log('CPU: Ejecutando instrucciones.');
  }
}

class HardDrive {
  read(position: number, size: number): string {
    console.log(
      `HardDrive: Leyendo ${size} bytes desde la posición ${position}.`
    );
    return '001010001010100';
  }

  close() {
    console.log('HardDrive: Deteniendo disco duro.');
  }
}

class Memory {
  load(position: number, data: string): void {
    console.log(`Memory: Cargando datos en la posición ${position} ${data}.`);
  }

  free(): void {
    console.log('Memory: Liberando memoria.');
  }
}

// 2. Clase Facade - ComputerFacade
interface ComputerFecadeOptions{
   cpu:CPU;
   hardDrive:HardDrive;
   memory:Memory;
}


class ComputerFacade {
    private cpu:CPU;
    private hardDrive:HardDrive;
    private memory:Memory;

  // TODO: Agregar el constructor para instanciar los atributos CPU, Memory y HardDrive
  constructor({cpu,hardDrive,memory}:ComputerFecadeOptions) {
    this.cpu=cpu;
    this.hardDrive=hardDrive;
    this.memory=memory;
  }

  startComputer(): void {
    console.log('\n%cIniciando la computadora...', COLORS.cyan);

    this.memory.load(0,"Iniciando memoria")
    this.hardDrive.read(0, 1024)
    this.cpu.jump(0)
    this.cpu.execute()
    
    console.log('Computadora lista para usar.\n');
  }

  shutDownComputer(): void {
    console.log('\n%cApagando la computadora...', COLORS.red);
    console.log('Cerrando procesos y guardando datos...');

    this.cpu.stopOperations()
    this.memory.free()
    this.hardDrive.close()
    // TODO: ejecutar las operaciones necesarias para apagar la computadora
    // 1. Detener las operaciones del CPU - cpu.stopOperations()
    // 2. Liberar la memoria - memory.free()
    // 3. Cerrar el disco duro - hardDrive.close()

    console.log('Computadora apagada.\n');
  }
}

// 3. Código Cliente para Usar la Facade
// TODO: Aquí no hay nada que hacer, debe de encender la computadora y apagarla sin problemas
function main() {
  let cpu= new CPU;
  let hardDrive= new HardDrive;
  let memory= new Memory;
  
  const computer = new ComputerFacade({cpu,hardDrive,memory});

  // Encender la computadora usando la fachada
  computer.startComputer();

  // Apagar la computadora usando la fachada
  computer.shutDownComputer();
}

main();
