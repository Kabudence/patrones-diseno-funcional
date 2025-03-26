/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación,
 * de tal forma que ambas puedan variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */

// 1. Interfaz NotificationChannel
// Define el método `send`, que cada canal de comunicación implementará.
interface NotificationChannel {
    send(message: string): void;
}

// 2. Implementaciones de Canales de Comunicación

class EmailChannel implements NotificationChannel {
    send(message: string): void {
        console.log(`Enviando correo electrónico: ${message}`);
    }
}

class SMSChannel implements NotificationChannel {
    send(message: string): void {
        console.log(`Enviando SMS: ${message}`);
    }
}

class PushNotificationChannel implements NotificationChannel {
    send(message: string): void {
        console.log(`Enviando Push: ${message}`);
    }
}

// 3. Clase Abstracta Notification
// Define la propiedad `channel` y el método `notify`

abstract class Notifications {
    protected channels: NotificationChannel[];

    constructor(channels:NotificationChannel[]) {
        this.channels = channels;
    }
    abstract notify(message: string):void
    abstract addChannel(channel:NotificationChannel):void
}

class ALertNotififacion extends Notifications {
   
     override notify(message: string):void{
        console.log(`Enviando Alert: ${message}`);
        this.channels.forEach(channel => channel.send(message));
     }
    override addChannel(channel:NotificationChannel):void{
      this.channels.push(channel);   
    }
}

function main(){
    
    const chanels=[
        new EmailChannel(),
        new SMSChannel(),
        new PushNotificationChannel(),
        new PushNotificationChannel(),
        new PushNotificationChannel()
    ]    
    const alerts=new ALertNotififacion(chanels)
    
    alerts.notify("me estan matando ay")
}
main();



