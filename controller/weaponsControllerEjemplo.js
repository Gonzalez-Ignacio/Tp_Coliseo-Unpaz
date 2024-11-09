export const getWeapons = (req, res) => {
    res.send(initialWeapons);
}

export const getWeapon = (req, res) => {
    const weapon = (initialWeapons.filter(weapon => weapon.name === req.params.name));
    if (weapon) {
        res.send(weapon);
    } else {
        res.status(404).send("Arma no encontrada");
    }
}

export const getWeaponsType = (req, res) => {
    res.send(initialWeapons.filter(weapon => weapon.type === req.params.type));
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