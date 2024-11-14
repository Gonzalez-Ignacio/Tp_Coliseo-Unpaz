import express from "express";
import coliseoRouter from "./routes/coliseoRouter.js"

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
app.use("/coliseo", coliseoRouter);