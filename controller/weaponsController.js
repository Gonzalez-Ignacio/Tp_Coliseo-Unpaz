//Armas y Escudos
class Weapons {
  constructor() {
    this.armas = [];
  }


  getWeaponRandomName() {
    return this.armas[Math.floor(Math.random() * this.armas.length)].name
  }

  addWeapon(weapon) {
    this.armas.push(weapon);
  }

  getWeapons() {
    return this.armas
  }

  getWeapon(getWeapon) { //Espada
    const weaponName = (this.armas.find(weapon => weapon.name === getWeapon));
    if (weaponName) {
        return weaponName
    } else {
        return console.log("El arma no existe")
    }
  }
}

class Weapon {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

// Cada tipo de arma(Filo/Contundente) tiene un Daño de Ataque diferente.
class EdgeWeapon extends Weapon {
  constructor(name, type, lengthWeapons) {
    super(name, type);
    const lengthWeapon = lengthWeapons
    const edgeWeapon = Math.random()
    const damageContributed =  lengthWeapon * edgeWeapon
    this.damage = Math.floor(damageContributed);
  }
}

class DevastatingWeapon extends Weapon {
  constructor(name, type) {
    super(name, type);
    const weightWeapon = Math.floor(Math.random() * (70 - 40 + 1)) + 40
    this.damage =  weightWeapon;
  }
}

const initialWeapons = [
  new EdgeWeapon("Espada", "Armas de Filo", 50),
  new EdgeWeapon("Daga", "Armas de Filo", 20),
  new EdgeWeapon("Hacha", "Armas de Filo", 40),
  new DevastatingWeapon("Maza", "Armas Contundentes"),
  new DevastatingWeapon("Martillo", "Armas Contundentes"),
];








//Armaduras
class Armors {
  constructor() {
    this.armors = [];
  }
  
  addArmor(armor) {
    this.armors.push(armor);
  }
  
  
  getArmor(getArmor) {
    const armorName = (this.armors.find(armor => armor.name === getArmor));
    if (armorName) {
      return armorName
    } else {
      res.status(404).send({message: "Armadura no encontrada"});
    }
  }

  getArmorRandomName() {
    return this.armors[Math.floor(Math.random() * this.armors.length)].name
  }

}


class Helmet {
  constructor(name, type, defense) {
    this.name = name;
    this.type = type;
    this.defense = defense;
  }
}

class shield {
  constructor(name, type, defense) {
    this.name = name;
    this.type = type;
    this.defense = defense;
  }
}

const initialArmors = [
  new Helmet("Casco con Cresta", "Casco", 5),
  new shield("Escudo Rectangular", "Escudo", 10),
];


export const armors = new Armors();
initialArmors.forEach((addArmor) => armors.addArmor(addArmor));

export const weapons = new Weapons();
initialWeapons.forEach((addWeapon) => weapons.addWeapon(addWeapon));