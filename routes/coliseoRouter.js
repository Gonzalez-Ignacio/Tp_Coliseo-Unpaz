import { coliseo } from "../controller/coliseoController.js";
import express from "express";
const router = express.Router();

router.get("/", coliseo.mostrarGladiadores.bind(coliseo));


export default router;