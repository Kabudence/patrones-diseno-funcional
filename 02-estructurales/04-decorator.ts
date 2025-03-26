/**
 * ! Patrón decorador
 * Es un patrón de diseño estructural que permite añadir
 * funcionalidades a objetos, colocando estos objetos dentro de
 * objetos encapsuladores especiales que contienen estas funcionalidades.
 *
 * No confundirlo con los decoradores de TypeScript que son anotaciones.
 *
 * * Es útil cuando necesitas añadir funcionalidades a objetos
 *  * de manera dinámica y flexible.
 *
 * https://refactoring.guru/es/design-patterns/decorator
 */

interface Notificationn{
    send(mesagge:string):void;
}

class BasicNotification implements Notificationn{
    send(mesagge:string):void{
        console.log(`Enviado Notificación básica: ${mesagge}`);
    }
}
///clase Decorador

abstract class NotificationDecorator implements Notificationn{
    
    protected notification:Notificationn;
    
    constructor(notification:Notificationn){
        this.notification = notification;
    }
    
    send(mesagge:string):void{
    this.notification.send(mesagge);        
    }
    
}

class EmailDecorator extends NotificationDecorator{
    
    private sendEmail(mesagge:string):void {
        console.log(`Enviado Email: ${mesagge}`);
    }
    
    override send(mesagge:string):void{
    super.send(mesagge);
    this.sendEmail(mesagge);
    }
}

class SMSDecorator extends NotificationDecorator{

    private sendSMS(mesagge:string):void {
        console.log(`Enviado SMS: ${mesagge}`);
    }

    override send(mesagge:string):void{
        super.send(mesagge);
        this.sendSMS(mesagge);
    }
}

function main(){
    let notification:Notificationn = new BasicNotification();
    
    notification.send("alerta sistema")
    
    notification= new EmailDecorator(notification);
    notification.send("alerta sistema 2")
    
    notification=new SMSDecorator(notification);
    notification.send("alerta sistema 3")
    
    notification=new EmailDecorator(notification);
    notification.send("alerta sistema 4")

}
main();



