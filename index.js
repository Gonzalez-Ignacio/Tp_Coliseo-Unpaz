import express from "express";

import gladiatorRouter from "./routes/gladiatorRouter.js";
import weaponsRouter from "./routes/weaponsRouter.js";

const app = express();
app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Escuchando puerto: ${PORT}. Link: https://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Bienvenidos al Coliseo');
});

// Rutas
app.use("/gladiators", gladiatorRouter);
app.use("/weapons", weaponsRouter);