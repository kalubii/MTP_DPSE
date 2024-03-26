import express from 'express';
import mysql2 from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());


const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'bdmtp',
})

// REQUETE LOCALITE
app.get('/localiteTana', (req, res) =>{
    const sql = "SELECT * FROM antananarivo"
    db.query(sql, (err,result)=>{
        if(err) return res.json({Message:"Erreur de serveur"})
        return res.json(result);
    })

})
app.get('/localiteAntsiranana', (req, res) =>{
    const sql = "SELECT * FROM antsiranana"
    db.query(sql, (err,result)=>{
        if(err) return res.json({Message:"Erreur de serveur"})
        return res.json(result);
    })

})
app.get('/localiteFianarantsoa', (req, res) =>{
    const sql = "SELECT * FROM fianarantsoa"
    db.query(sql, (err,result)=>{
        if(err) return res.json({Message:"Erreur de serveur"})
        return res.json(result);
    })

})
app.get('/localiteMahajanga', (req, res) =>{
    const sql = "SELECT * FROM mahajanga"
    db.query(sql, (err,result)=>{
        if(err) return res.json({Message:"Erreur de serveur"})
        return res.json(result);
    })

})
app.get('/localiteToamasina', (req, res) =>{
    const sql = "SELECT * FROM toamasina"
    db.query(sql, (err,result)=>{
        if(err) return res.json({Message:"Erreur de serveur"})
        return res.json(result);
    })

})
app.get('/localiteToliara', (req, res) =>{
    const sql = "SELECT * FROM toliara"
    db.query(sql, (err,result)=>{
        if(err) return res.json({Message:"Erreur de serveur"})
        return res.json(result);
    })

})

// REQUETE PROJET
app.get('/projet2022', (req, res) =>{
    const sql = "SELECT * FROM donnee"
    db.query(sql, (err,result)=>{
        if(err) return res.json({Message:"Erreur de serveur"})
        return res.json(result);
    })

})

app.listen(8081, ()=>{
    console.log('Serveur démarrer avec succès...')
})