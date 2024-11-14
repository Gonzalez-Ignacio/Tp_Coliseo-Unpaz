import { armors, weapons } from "./weaponsController.js"

class Gladiadores {
    constructor() {
        this.gladiadores = [];
    }

    agregarGladiadores(gladiadores) {
        for(let guerrero of gladiadores){
            this.gladiadores.push(guerrero);
        }
        
    }

    mostrarGladiadores() {
        console.log("gladiadores -->", this.gladiadores);
    }
}

class Gladiator {
    constructor(nombre,vida,destreza,fuerza, armadura, defensa){
        this.nombre=nombre
        this.vida=vida,
        this.destreza=destreza,
        this.fuerza=fuerza,
        this.armadura=armadura
        this.defensa=defensa                            //Falta arreglar.
    }
}

class Mirmillones extends Gladiator{
    constructor(nombre, fuerza){
        super(nombre,fuerza)
        this.defensa = 0
        this.fuerza = fuerza
    }
    vida=100
    destreza=15

    obtenerArma(Arma){
        this.arma= weapons.getWeapon(Arma)
    }

    obtenerArmadura(Armadura){
        this.armadura= armors.getArmor(Armadura).name
        this.defensa = armors.getArmor(Armadura).defense + this.destreza
    }

    atacar(enemigo){
        const ataque= this.arma.damage + this.fuerza
        let damage= ataque - enemigo.defensa
        
        if(damage<0){
            damage=0
        }

        enemigo.vida-= damage

        if(enemigo.vida<0){
            enemigo.vida=0
        }
    }
}

class Dimachaerus extends Gladiator{
    constructor(nombre,destreza){
        super(nombre, destreza)
        this.destreza=destreza
        this.defensa = Math.floor(this.destreza/2)
    }

    vida=100
    fuerza=10
    armadura=0

    obtenerArma(arma01,arma02){
        this.arma1= weapons.getWeapon(arma01),
        this.arma2= weapons.getWeapon(arma02)
    }

    atacar(enemigo){
        const ataque= this.arma1.damage + this.arma2.damage + this.fuerza
        const damage= ataque - enemigo.defensa

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

export const gladiador= new Mirmillones("nombre",0,0,10)



const listaMirmillones=[
    new Mirmillones("krotos",15),
    new Mirmillones("deimos",20),
    new Mirmillones("dante",25)]

const listaDimachaerus = [
    new Dimachaerus("ferra",10),
    new Dimachaerus("leonidas",15),
    new Dimachaerus("pantheon",20),
]



listaMirmillones.forEach(gladiador=> gladiador.obtenerArma(weapons.getWeaponRandomName()))

listaDimachaerus.forEach(gladiador=> gladiador.obtenerArma(weapons.getWeaponRandomName(), weapons.getWeaponRandomName()))

listaMirmillones.forEach(gladiador=> gladiador.obtenerArmadura(armors.getArmorRandomName()))

export const gladiadores= new Gladiadores()
gladiadores.agregarGladiadores(listaMirmillones)
gladiadores.agregarGladiadores(listaDimachaerus)