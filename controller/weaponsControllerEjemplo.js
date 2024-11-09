export const getWeapons = (req, res) => {
    res.send(initialWeapons);
}

export const getWeapon = (req, res) => {
    const weaponName = (initialWeapons.find(weapon => weapon.name === req.params.name));
    if (weaponName) {
        res.send(weaponName);
    } else {
        res.status(404).send({message: "Arma no encontrada"});
    }
}

export const getWeaponsType = (req, res) => {
    const weaponType = (initialWeapons.filter(weapon => weapon.type === req.params.type));
    if (weaponType.length > 0) {
        res.send(weaponType);
    } else {
        res.status(404).send({message: "Arma no encontrada"});
    }
}


const initialWeapons = [
    {
        name: "Espada",
        type: "Armas de Filo",
        damage: 20
    },
    {
        name: "Daga",   
        type: "Armas de Filo",
        damage: 15
    },
    {
        name: "Hacha",
        type: "Armas de Filo",
        damage: 25
    },
    {
        name: "Maza",
        type: "Armas Contundentes",
        damage: 50
    },
    {
        name: "Martillo",
        type: "Armas Contundentes",
        damage: 40
    }
]