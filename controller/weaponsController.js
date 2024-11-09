export class Weapons {
    constructor() {
        this.armas = [];
    }

    addWeapon(weapon) {
        this.armas.push(weapon);
        console.log(this.armas)
    }

    getWeapons(req, res) {
        res.send(this.armas);
    }

    getWeapon(req, res) {
        res.send(this.armas[req.params.name]);
    }
}

class Weapon {
    constructor(name, type, damage) {
        this.name = name;
        this.type = type;
        this.damage = damage;
    }
}

// Cada tipo de arma(Filo/Contundente) tiene un Daño de Ataque diferente.
class EdgeWeapon extends Weapon {
    constructor(name, type, damage) {
        super(name, type, damage);
        this.damage = damage;                   //Damage * longitud de arma
    }
}

class DevastatingWeapon extends Weapon {
    constructor(name, type, damage) {
        super(name, type, damage);
        this.damage = damage;                   //Damage * peso de arma
    }
}



const initialWeapons = [
    new EdgeWeapon("Espada", "Armas de Filo", 20),
    new EdgeWeapon("Daga", "Armas de Filo", 15),
    new EdgeWeapon("Hacha", "Armas de Filo", 25),
    new DevastatingWeapon("Maza", "Armas Contundentes", 50),
    new DevastatingWeapon("Martillo", "Armas Contundentes", 40)
]


// const weapons = new Weapons()
// weapons.addWeapon(initialWeapons)



// module.exports = { Weapons }