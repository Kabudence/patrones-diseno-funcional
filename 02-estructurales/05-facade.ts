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

class Projector{
    turnOn(){
        console.log('Proyector Encendido');
        
    }
    turnOff(){
        console.log('Proyector Apagado');
    }
}

class SoundSystem{
    
    on(){
        console.log('Sistema de sonido encendido');
    }
    off(){
        console.log('Sistema de sonido apagado');
    }
}

class VideoPlayer{
    on(){
        console.log('Video Player encendido');
    }
    off(){
        console.log('Video Player apagado');
    }
    play(movie:string){
        console.log(`Video Player Reproduciendo: ${movie}`);
    }
}

class PopCornMaker{
    poppingPopCorn(){
        console.log('Haciendo palomitas');
    }
    turnOff(){
        console.log('Deteniendo palomitas');
    }
}

interface HomeTheaterFacadeOptions{
     projector: Projector;
     soundSystem: SoundSystem;
     videoPlayer: VideoPlayer;
     popCornMaker: PopCornMaker;
}

class HomeTheaterFacade{
    private projector: Projector;
    private soundSystem: SoundSystem;
    private videoPlayer: VideoPlayer;
    private popCornMaker: PopCornMaker;
    
    constructor({projector, soundSystem, videoPlayer, popCornMaker}: HomeTheaterFacadeOptions ) {
        this.projector= projector
        this.popCornMaker = popCornMaker;
        this.soundSystem = soundSystem
        this.videoPlayer = videoPlayer;
    }
    watchMovie(movie:string){
        console.log('Preparando para ver la pelicula');
        this.projector.turnOn();
        this.soundSystem.on();
        this.videoPlayer.on();
        this.videoPlayer.play(movie);
        this.popCornMaker.poppingPopCorn()
        console.log("Disfrute la pelicula");
        
    }
    endWatchMovie(){
        console.log('Preparando para detener la pelicula');
        this.projector.turnOff();
        this.soundSystem.off();
        this.videoPlayer.off();
        this.popCornMaker.turnOff()
    }
    
}
function main(){
    const homeTheater = new HomeTheaterFacade({
        projector: new Projector(),
        soundSystem: new SoundSystem(),
        videoPlayer: new VideoPlayer(),
        popCornMaker: new PopCornMaker()
    })
    homeTheater.watchMovie('The Avengers');
    homeTheater.endWatchMovie();
    
}
main();