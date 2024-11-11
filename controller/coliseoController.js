import { gladiadores } from "./gladiatorController.js"

class Coliseo{
    constructor(){
        this.gladiadores=[]
    }

    mostrarGladiadores(){
        console.log(this.gladiadores)
    }

    añadirGladiador(gladiadores){
        for(let gladiador of gladiadores){
            this.gladiadores.push(gladiador)
            console.log(`se agregó el gladiador: ${gladiador.nombre}`)
        }
    };

    eliminarGladiador(gladiador){
        if(this.gladiadores.some(guerrero=> guerrero.nombre===gladiador)){
            const eliminar= this.gladiadores.findIndex(guerrero=> guerrero.nombre===gladiador)
            this.gladiadores.splice(eliminar,1)
        } else{
            console.log(`El gladiador, ${gladiador}, no está registrado en el Coliseo`)
        }
    };

    pelea(gladiador1, gladiador2){
        if(this.gladiadores.some(guerrero=> guerrero.nombre===gladiador1) && this.gladiadores.some(guerrero=>guerrero.nombre===gladiador2)){
            console.log("Los gladiadores se preparan para pelear")
        } else {
            console.log("uno de los gladiadores no está registrado, no hay pelea")
            return
        }


        while(true){
            const guerrero1= this.gladiadores.find(guerrero=> guerrero.nombre===gladiador1)
            const guerrero2= this.gladiadores.find(guerrero=> guerrero.nombre===gladiador2)

            while(true){
                guerrero1.atacar(guerrero2)
                guerrero2.atacar(guerrero1)

                console.log(`los gladiadores se atacan!`)
                console.log(`la vida de ${guerrero1.nombre} queda en: ${guerrero1.vida} puntos!`)
                console.log(`la vida de ${guerrero2.nombre} queda en: ${guerrero2.vida} puntos!`)

                if(guerrero1.vida===0){
                    console.log(`${guerrero1.nombre} ha caído! ${guerrero2.nombre} es el vencedor!`)
                    break
                } else if(guerrero2.vida===0){
                    console.log(`${guerrero2.nombre} ha caído! ${guerrero1.nombre} es el vencedor!`)
                    break
                } else if(guerrero1.vida===0 && guerrero2.vida===0){
                    console.log("Los gladiadores han caído! es un empate!")
                    break
                } else{
                    continue
                }
            }
            break
        }
    }
}


export const coliseo = new Coliseo();

coliseo.añadirGladiador(gladiadores.gladiadores)
console.log("--------------------------------------------------------------------------------------------------------------------------------------")
coliseo.mostrarGladiadores()
coliseo.pelea("krotos", "dante")