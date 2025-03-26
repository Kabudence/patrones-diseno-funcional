/**
 * ! Patrón Flyweight
 * Es un patrón de diseño estructural que nos permite usar objetos compartidos
 * para soportar eficientemente grandes cantidades de objetos.
 *
 * * Es útil cuando necesitamos una gran cantidad de objetos y queremos reducir
 * * la cantidad de memoria que utilizan.
 */
import {COLORS} from "../helpers/colors";


// 1. Clase que representa el tipo de bala - BulletType (Flyweight)
class BulletType {
  private name: string;
  private damage: number;
  private color: string;

  constructor(name: string, damage: number, color: string) {
    this.name = name;
    this.damage = damage;
    this.color = color;
  }

  getName(): string {
    return this.name;
  }

  getDamage(): number {
    return this.damage;
  }

  getColor(): string {
    return this.color;
  }
}

// 2. Fábrica de Flyweights - BulletTypeFactory
class BulletTypeFactory {
  private bulletTypes: Record<string, BulletType> = {};

  getBulletType(name: string, damage: number, color: string): BulletType {
    if(!this.bulletTypes[name]) {
      console.log(`Creando nueva bala con el nombre ${name}`);
      
      this.bulletTypes[name] =  new BulletType(name,damage,color);
      
    }
    return this.bulletTypes[name];

  }
}

// 3. Clase que representa una Bala - Bullet
class Bullet {
  private x: number;
  private y: number;
  private direction: number;
  private bulletType: BulletType;

  constructor(x: number, y: number, direction: number, bulletType: BulletType) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.bulletType = bulletType;
  }

  display(): void {
    const text = `
      Bala del tipo: %c"${this.bulletType.getName()}" 
      %cCoords: (${this.x}, ${this.y})
      Dirección ${this.direction}
      Daño: ${this.bulletType.getDamage()} 
      Color: ${this.bulletType.getColor()}
    `;

    console.log(text, COLORS.green, COLORS.white);
  }
}

// 4. Sistema de Disparos - ShootingSystem

class ShootingSystem {
  private bullets: Bullet[] = [];
  private factory: BulletTypeFactory;

  constructor(factory: BulletTypeFactory) {
    this.factory = factory;
  }

  shoot(
    x: number,
    y: number,
    direction: number,
    type: string,
    damage: number,
    color: string
  ): void {
    const bulletType = this.factory.getBulletType(type, damage, color);
    const bullet = new Bullet(x, y, direction, bulletType);
    this.bullets.push(bullet);
    bullet.display();
  }

  getBulletCount(): number {
    return this.bullets.length;
  }
}

// 5. Código Cliente para probar el Flyweight

function main() {
  const factory = new BulletTypeFactory();
  const shootingSystem = new ShootingSystem(factory);

  // Disparar varias balas de diferentes tipos
  shootingSystem.shoot(10, 20, 0, 'Pistola', 10, 'Gris');
  shootingSystem.shoot(15, 25, 90, 'Escopeta', 20, 'Rojo');
  shootingSystem.shoot(20, 30, 180, 'Rifle', 15, 'Verde');
  shootingSystem.shoot(10, 20, 45, 'Pistola', 10, 'Gris');
  shootingSystem.shoot(25, 35, 270, 'Escopeta', 20, 'Rojo');

  console.log(
    `Total de balas disparadas: %c${shootingSystem.getBulletCount()}\n`,
    COLORS.yellow
  );
}

main();
