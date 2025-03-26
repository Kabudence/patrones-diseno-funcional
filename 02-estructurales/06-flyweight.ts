/**
 * ! Patrón Flyweight
 * Es un patrón de diseño estructural que nos permite usar objetos compartidos
 * para soportar eficientemente grandes cantidades de objetos.
 *
 * * Es útil cuando necesitamos una gran cantidad de objetos y queremos reducir
 * * la cantidad de memoria que utilizan.
 *
 * https://refactoring.guru/es/design-patterns/flyweight
 */

interface Locationn{
    
    display(coordinates:{x:number,y:number}):void;
    
}
//Flyweight
class LocationIcon implements Locationn{
    
    private type: string; //hospital, escuela, parque
    private iconImage:string;//imagen del marcador
   
    constructor(type: string, iconImage:string){
        this.type = type;
        this.iconImage = iconImage;
    }
    
    display(coordinates:{x:number,y:number}):void {
        console.log `Coordenadas(en x:${coordinates.x},en y:${coordinates.y}). Con icono: ${this.iconImage}`;
    }
    
}

//Fabrica de FlyWeights
class LocationFactory{
    
    private icons:Record<string,LocationIcon>={};
    
    getLocationIcon(type:string):LocationIcon{
        if(!this.icons[type]){
            console.log("Creando nueva instanacia para: ",type)
            const iconImage=`imagen de ${type.toLowerCase()}.png`;
            this.icons[type]=new LocationIcon(type,iconImage);
        }
        return this.icons[type];
    }
}
class MapLocation{
    
    private coordinates:{x:number,y:number};
    private iconImage:LocationIcon;
    
    constructor(coordinates:{x:number,y:number},iconImage:LocationIcon) {
        this.coordinates=coordinates;
        this.iconImage=iconImage;
    }
    
    display(){
        console.log(`
        Coordenadas(${this.coordinates.x},${this.coordinates.y}), con el icono: ${this.iconImage["iconImage"]}`);
    }
}

function main(){
    
    const factory=new LocationFactory();
    
    const locations=[
        new MapLocation({x:10,y:20},factory.getLocationIcon('hospital')),
        new MapLocation({x:30,y:40},factory.getLocationIcon('hospital')),
        
    ]
    locations.forEach(location=>location.display());
    
}

main();