import express from 'express';
import mysql2 from 'mysql2';

const app = express();
app.use();


const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'',
})

app.get('/', (req, res) =>{

})

app.listen(8081, ()=>{
    console.log('Serveur démarrer avec succès...')
})