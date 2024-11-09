//Manejar las rutas de Armas
import { getWeapons, getWeapon, getWeaponsType } from "./../controller/weaponsControllerEjemplo.js";
import express from "express";

const router = express.Router();

router.get("/", getWeapons);
router.get("/:name", getWeapon);
router.get("/:type", getWeaponsType);

export default router;