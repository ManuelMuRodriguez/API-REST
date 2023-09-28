const express = require("express");
// LLamamos a las rutas de v1
const v1WorkoutRoutes = require("./v1/routes/workoutRoutes")

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1/workout", v1WorkoutRoutes);

app.listen(PORT,() =>{
    console.log(`El sevidor corriendo en el puerto ${PORT} `)
});