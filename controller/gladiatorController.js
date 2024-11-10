import { armors, weapons } from "./weaponsController.js"

class gladiator {
    constructor(nombre,vida,destreza,fuerza, armadura, defensa){
        this.nombre=nombre
        this.vida=vida,
        this.destreza=destreza,
        this.fuerza=fuerza,
        this.armadura=armadura
        this.defensa=defensa                            //Falta arreglar.
    }
}

class mirmillones extends gladiator{
    constructor(nombre,arma, armadura, fuerza){
        super(nombre,fuerza, armadura)
        this.arma=arma
        this.defensa = defensa
    }
    vida=100
    destreza=15
    defensa= this.armadura.defense + this.destreza

    obtenerArma(Arma){
        this.arma= weapons.getWeapon(Arma)
    }

    obtenerArmadura(Armadura){
        this.armadura= armors.getArmor(Armadura)
    }

    atacar(enemigo){
        const ataque= this.arma.damage + this.fuerza
        const damage= ataque - enemigo.armadura
        
        if(damage<0){
            damage=0
        }

        enemigo.vida-= damage

        if(enemigo.vida<0){
            enemigo.vida=0
        }
    }
}

class dimachaerus extends gladiator{
    constructor(nombre,destreza, arma1, arma2,){
        super(nombre, destreza)
        this.arma1=arma1,
        this.arma2=arma2
    }
    vida=100
    fuerza=10
    armadura=0
    defensa= Math.floor(this.destreza/2)

    obtenerArma(arma01,arma02){
        this.arma1= weapons.getWeapon(arma01),
        this.arma2= weapons.getWeapon(arma02)
    }

    atacar(enemigo){
        const ataque= this.arma1.damage + this.arma2.damage + this.fuerza
        const damage= ataque - enemigo.armadura

        if(damage<0){
            damage=0
        }

        enemigo.vida-= damage

        this.destreza++
        this.defensa= Math.floor(this.destreza/2)

        if(enemigo.vida<0){
            enemigo.vida=0
        }
    }
}

export const gladiador= new mirmillones(0,0,10)



const listaMirmillones=[
    new mirmillones("krotos",0,0,15),
    new mirmillones("deimos",0,0,20),
    new mirmillones("dante",0,0,25)]

const listaDimachaerus = [
    new dimachaerus("ferra",10,0,0),
    new dimachaerus("leonidas",15,0,0),
    new dimachaerus("pantheon",20,0,0),
]



listaMirmillones.forEach(gladiador=> gladiador.obtenerArma(weapons.getWeaponRandomName()))

listaDimachaerus.forEach(gladiador=> gladiador.obtenerArma(weapons.getWeaponRandomName(), weapons.getWeaponRandomName()))

listaMirmillones.forEach(gladiador=> gladiador.obtenerArmadura(armors.getArmorRandomName()))

console.log(listaDimachaerus)
console.log(listaMirmillones)


// Armaduras
//      new Helmet("Casco con Cresta", "Casco", 20),
//      new shield("Escudo Rectangular", "Escudo", 50),