const express = require('express');
const app = express();
app.use(express.json()); // Siempre que requiere enviar datos por POST,PUT,DELETE etc... y sean JSON se ocupa esta linea
const port = 3000;

let platillos = [
    {
        id: 1,
        nombre: "Guacamole",
        precio: 20.35
    }
];

app.get('/', (req, res) => {
    res.send('API DE PLATILLOS UCAMP v1.0');
});

app.get('/platillos', (req, res) => {
    //Listas platillos
    res.json({
        mensaje: "Platillos disponibles",
        data: platillos
    });
});

app.post('/platillos', (req, res) => {
    // console.log(req.body);
    // Agregar platillos
    // Agregar un id aleatorio....
    // math.rand()......
    let nuevoPlatillo = req.body;
    platillos.push(nuevoPlatillo);
    res.json({
        mensaje: "Se agrego el platillo",
        data: nuevoPlatillo
    });
});

app.put('/platillos', (req, res) => {
    // Actualizar platillos
    res.send('Actualizar platillos');
});

app.delete('/platillos/:id', (req, res) => {
    // Borrar platillos
    let id = parseInt(req.params.id);
    const indice = platillos.findIndex(platillo => platillo.id === id);
    platillos.splice(indice, 1);
    res.json({
        mensaje: "Se elimino el platillo",
        data: null
    });
});


app.listen(port, () => {
    console.log('Servidor escuchando en http://localhost:' + port);
});