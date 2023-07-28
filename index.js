import cors from "cors";
import express from 'express';
import path from "path";
import {getAll,getone,update,Add,Delete} from "./routes/handlers.js";
import {fileURLToPath} from "url";

var app = express();
var port = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/api/items',getAll)
app.get('/api/items/:id',getone)
app.put('/api/items/:id',update)
app.post('/api/items/',Add)
app.delete('/api/items/:id',Delete)

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(port, function () {
    console.log('Backend server started at port ' + port );
});
