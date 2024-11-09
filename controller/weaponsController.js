class Weapons {
  constructor() {
    this.armas = [];
  }

  addWeapon(weapon) {
    this.armas.push(weapon);
    console.log(this.armas);
  }

  getWeapons(req, res) {
    res.send(this.armas);
  }

  getWeapon(req, res) {
    const weaponName = (this.armas.find(weapon => weapon.name === req.params.name));
    if (weaponName) {
        res.send(weaponName);
    } else {
        res.status(404).send({message: "Arma no encontrada"});
    }
  }

  getWeaponsType(req, res) {
    const weaponType = this.armas.filter(
      (weapon) => weapon.type === req.params.type
    );
    if (weaponType.length > 0) {
      res.send(weaponType);
    } else {
      res.status(404).send({ message: "Arma no encontrada" });
    }
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
    this.damage = damage; //Damage * longitud de arma
  }
}

class DevastatingWeapon extends Weapon {
  constructor(name, type, damage) {
    super(name, type, damage);
    this.damage = damage; //Damage * peso de arma
  }
}

const initialWeapons = [
  new EdgeWeapon("Espada", "Armas de Filo", 20),
  new EdgeWeapon("Daga", "Armas de Filo", 15),
  new EdgeWeapon("Hacha", "Armas de Filo", 25),
  new DevastatingWeapon("Maza", "Armas Contundentes", 50),
  new DevastatingWeapon("Martillo", "Armas Contundentes", 40),
];

export const weapons = new Weapons();
initialWeapons.forEach((addWeapon) => weapons.addWeapon(addWeapon));