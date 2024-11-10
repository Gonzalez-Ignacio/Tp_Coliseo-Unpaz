//Manejar las rutas de Armas
// import { getWeapons, getWeapon, getWeaponsType } from "./../controller/weaponsControllerEjemplo.js";
import { weapons } from "../controller/weaponsController.js";
import express from "express";
const router = express.Router();

// Rutas para weaponsControllerEjemplo.js
// router.get("/", getWeapons);
// router.get("/name/:name", getWeapon);
// router.get("/type/:type", getWeaponsType);

// Rutas para weaponsController.js
router.get("/name/:name", weapons.getWeapon.bind(weapons)); 
// router.get("/", weapons.getWeapons.bind(weapons));                      //Se usa .bind(weapons) porque weapons.getWeapons "pierde el contexto de this"
// router.get("/type/:type", weapons.getWeaponsType.bind(weapons));

export default router;