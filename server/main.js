import express from "express";
import { PORT } from "./config.js";
import mysql from "mysql2";
import cors from "cors";

const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.json());

const pool = mysql
  .createPool({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "tp17"
  })
  .promise();

app.get("/jugadores", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM jugadores");
    res.status(200).send(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener jugadores");
  }
});

app.get("/jugadores/argentinos", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM jugadores WHERE nac = ?", [
      "Argentina"
    ]);
    res.status(200).send(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener jugadores argentinos");
  }
});

app.get('/jugadores/porpeso', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM jugadores WHERE peso BETWEEN ? AND ?', [74, 81]);
        res.status(200).send(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener jugadores con peso entre 75 y 80');
    }
});

app.get('/jugadores/masalto', async (req, res) => {
    try {
        const [row] = await pool.query('SELECT * FROM jugadores ORDER BY altura DESC LIMIT 1');
        res.status(200).send(row);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el jugador más alto');
    }
});


app.get('/jugadores/:id', async (req, res) => {
  const playerId = req.params.id;
  try {
      const [row] = await pool.query('SELECT * FROM jugadores WHERE id = ?', [playerId]);
      if (row.length === 0) {
          res.status(404).send('Jugador no encontrado');
      } else {
          res.status(200).send(row[0]);
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener el jugador');
  }
});

app.post('/jugadores', async (req, res) => {
  const nuevoJugador = req.body;
  try {
      const result = await pool.query('INSERT INTO jugadores SET ?', [nuevoJugador]);
      res.status(201).send(`Jugador creado`);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error al crear el jugador');
  }
});

app.put('/jugadores/:id', async (req, res) => {
  const playerId = req.params.id;
  const jugadorActualizado = req.body;
  try {
      const result = await pool.query('UPDATE jugadores SET ? WHERE id = ?', [jugadorActualizado, playerId]);
      if (result.affectedRows === 0) {
          res.status(404).send('Jugador no encontrado');
      } else {
          res.status(200).send('Jugador actualizado exitosamente');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Error al actualizar el jugador');
  }
});

app.delete('/jugadores/:id', async (req, res) => {
  const playerId = req.params.id;
  try {
      const result = await pool.query('DELETE FROM jugadores WHERE id = ?', [playerId]);
      if (result.affectedRows === 0) {
          res.status(404).send('Jugador no encontrado');
      } else {
          res.status(200).send('Jugador eliminado exitosamente');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Error al eliminar el jugador');
  }
});



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
