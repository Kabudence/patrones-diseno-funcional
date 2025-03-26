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
interface Ability{
    use(): void;
}

class swordAttack implements Ability{
    use(): void{
        console.log('Ataque con espada ferozmente');
    }
}
class MagicSpell implements Ability{
    use(): void{
        console.log('Lanza un hechizo mágico con efecto devastador');
    }
}
class BowAttack implements Ability{
    use(): void{
        console.log('Dispara una flecha con arco');
    }
}
class AxeAttack implements Ability{
    use(): void{
        console.log('Ataque con hacha');}
}

abstract class Characterr{
    protected ability: Ability;
    
     constructor(ability:Ability){
         this.ability = ability;
     }
     
     setAbility(ability:Ability){
            this.ability = ability;
     }
    abstract performAbility():void;
}

class Warrior extends Character{
    
    override performAbility():void{
        console.log('\nEl guerrero esta listo para atacar');
        this.ability.use();
    }
}

class Mage extends Character{
   
    setAbility(ability:Ability){
    }
    performAbility():void{
        console.log('\nEl mago esta listo para atacar');
        this.ability.use();
    }
}

function main(){
    const warrior = new Warrior(new swordAttack());
    warrior.performAbility();
    warrior.setAbility(new AxeAttack())
    warrior.performAbility();
}
main()








