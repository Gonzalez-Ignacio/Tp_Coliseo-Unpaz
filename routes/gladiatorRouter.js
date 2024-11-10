import { gladiador } from "../controller/gladiatorController.js";
import express from "express";
const router = express.Router();

router.get("/name/:name", gladiador.obtenerArma.bind(gladiador));


export default router;