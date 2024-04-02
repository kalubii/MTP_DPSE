import express from 'express';
import mysql2 from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());


const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'bd_dpse',
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
// app.get('/projet/:annee/:searchAxe/:pkDebut/:pkFin', (req, res) =>{
    
//     let sql = ""
    
//    if(req.params.searchAxe != "null" && req.params.pkDebut != "null" && req.params.pkFin != "null"){
//     console.log(req.params.searchAxe)
//     sql =  "SELECT * FROM projet WHERE _date= '"+req.params.annee+"' AXE= '"+req.params.searchAxe+"' PK_DEBUT ='"+req.params.pkDebut+"' PK_FIN ='"+req.params.pkFin+"'"
//    }else if(req.params.searchAxe != "null" && req.params.pkDebut != "null"){
//     sql =  "SELECT * FROM projet WHERE _date= "+req.params.annee+"' AXE= '"+req.params.searchAxe+"' PK_DEBUT ='"+req.params.pkDebut+"'"
//    }else if(req.params.searchAxe != "null"){
//     sql =  "SELECT * FROM projet WHERE _date= '"+req.params.annee+" AXE= '"+req.params.searchAxe+"'"
//    }else if(req.params.searchAxe != "null" && req.params.pkFin != "null"){
//     sql =  "SELECT * FROM projet WHERE _date= '"+req.params.annee+"' AXE= '"+req.params.searchAxe+"' PK_FIN ='"+req.params.pkFin+"'"
//    }else if(req.params.pkDebut != "null"){
//     sql =  "SELECT * FROM projet WHERE _date= '"+req.params.annee+"' PK_DEBUT ='"+req.params.pkDebut+"'"
//    } else if(req.params.pkFin != "null"){
//     sql =  "SELECT * FROM projet WHERE _date= '"+req.params.annee+"' PK_FIN ='"+req.params.pkFin+"'"
//    }else if (req.params.pkDebut != "null" && req.params.pkFin != "null"){
//     sql =  "SELECT * FROM projet WHERE _date= '"+req.params.annee+"' PK_DEBUT ='"+req.params.pkDebut+"' PK_FIN ='"+req.params.pkFin+"'"
//    }else if(req.params.searchAxe != "null" && req.params.pkFin != "null"){
//     sql =  "SELECT * FROM projet WHERE _date= '"+req.params.annee+"' AXE= '"+req.params.searchAxe+"' PK_FIN ='"+req.params.pkFin+"'"
//    }

   app.get('/projet/:annee/:searchAxe/:pkDebut/:pkFin', (req, res) => {
    let sql = "SELECT * FROM projet WHERE _date = ?";
    let params = [req.params.annee];

    if (req.params.searchAxe) {
        sql += " AND AXE = ?";
        params.push(req.params.searchAxe);
    }
    if (req.params.pkDebut) {
        sql += " AND PK_DEBUT = ?";
        params.push(req.params.pkDebut);
    }
    if (req.params.pkFin) {
        sql += " AND PK_FIN = ?";
        params.push(req.params.pkFin);
    }

    db.query(sql, params, (err, result) => {
        if (err) return res.json({ Message: err });
        return res.json(result);
    });
})

// app.get('/projet2022', (req, res) =>{
//     const sql = "SELECT * FROM donnee"
//     db.query(sql, (err,result)=>{
//         if(err) return res.json({Message:"Erreur de serveur"})
//         return res.json(result);
//     })
// })

// app.get('/projet2021', (req, res) =>{
//     const sql = "SELECT * FROM projet2021"
//     db.query(sql, (err,result)=>{
//         if(err) return res.json({Message:"Erreur de serveur"})
//         return res.json(result);
//     })
// })

// app.get('/projet2020', (req, res) =>{
//     const sql = "SELECT * FROM projet2020"
//     db.query(sql, (err,result)=>{
//         if(err) return res.json({Message:"Erreur de serveur"})
//         return res.json(result);
//     })
// })
app.listen(8081, ()=>{
    console.log('Serveur démarrer avec succès...')
})