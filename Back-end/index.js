import express from 'express';
import mysql2 from 'mysql2';
import cors from 'cors';
import multer from 'multer';
import XLSX from 'xlsx';

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'test_dpse',
})


app.get('/projet2022', (req, res) => {
    // const faritany = req.query.faritany;
    const idRef = req.query.idRef;
    // const date = req.query.date;
    const regions = req.query.region ? req.query.region.split(',') : [];
    const axes = req.query.axe ? req.query.axe.split(',') : [];
    const pkDebut = req.query.pkDebut;
    const pkFin = req.query.pkFin;
  
    let sql = `
    SELECT *
    FROM avancement a
    LEFT JOIN caracteristique c ON a.id_identification = c.id_identification
    LEFT JOIN identification i ON a.id_identification = i.id_identification
    LEFT JOIN localisation l ON i.id_localisation = l.id_localisation
    LEFT JOIN suividae s ON i.id_identification = s.id_identification
    LEFT JOIN total_general t ON i.id_total_general = t.id_total_general
    WHERE 1=1    
    `;

    if(idRef){
      sql+= ` AND id_avancement = '${idRef}'`;
    }
    // if(date){
    //   sql+= ` AND _date = '${date}'`;
    // }
    if (regions.length > 0) {
      sql += ` AND REGIONS_CONCERNEES IN (${regions.map(region => `'${region}'`).join(',')})`;
    }
    if (axes.length > 0) {
      sql += ` AND AXE IN (${axes.map(axe => `'${axe}'`).join(',')})`;
    }
    if (pkDebut) {
      sql += ` AND PK_DEBUT >= ${pkDebut}`;
    }
    if (pkFin) {
      sql += ` AND PK_FIN <= ${pkFin}`;
    }

    if (regions.length === 0 && !axes.length && !pkDebut && !pkFin) {
        sql += ` LIMIT 50`; // limit to 10 results if no conditions are met
    } 
  
    db.query(sql, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        // console.log(results)
        res.json(results);
      }
    });
  });

  app.get('/nbTravauxTermine',(req,res)=> {
    let sql = `SELECT COUNT(*) as nbTermine
    FROM avancement
    WHERE SITUATION = 'TERMINE'`;

    db.query(sql, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log(results)
        res.json(results);
      }
    });
  })


  // const storage = multer.diskStorage({
  //   destination: function(req,file,cb){
  //     return cb(null, "")
  //   },
  //   filename: function (req,file,cb){
  //     return cb(null, `${Date.now()}_${file.originalname}`) //nom du fichier
  //   }
  // })

  // const upload = multer({storage})
  // app.post('/upload', upload.single('file'),(req,res) => {
  //   console.log(req.body)
  //   console.log(req.file)
  // })



// Configuration de Multer pour gérer les fichiers uploadés
const upload = multer({ dest: 'uploads/' });

// Endpoint pour le traitement du fichier uploadé
app.post('/upload', upload.single('file'), (req, res) => {
  // Lire le fichier xlsx et récupérer les données
  const workbook = XLSX.readFile(req.file.path);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  // Convertir les données en tableau d'objets
  // Supposons que la première ligne du fichier xlsx contient les noms de colonnes
  const columns = data[0];
  const rows = data.slice(1).map(row => {
    // Créer un objet pour chaque ligne
    const obj = {};
    for (let i = 0; i < row.length; i++) {
      // Stocker les valeurs dans l'objet en utilisant les noms de colonnes comme clés
      obj[columns[i]] = row[i];
    }
    return obj;
  });

// Itérer sur le tableau d'objets et insérer les données dans les tables correspondantes
rows.forEach(row => {
  // Vérifier la correspondance entre les noms de colonnes et les noms de colonnes des tables
  if (row.hasOwnProperty('AXE') && row.hasOwnProperty('Geo_r_f_rencement_D_but') && row.hasOwnProperty('Geo_r_f_rencement_Fin') && row.hasOwnProperty('PK_DEBUT') && row.hasOwnProperty('PK_FIN') && row.hasOwnProperty('REGIONS_CONCERNEES') && row.hasOwnProperty('DISTRICTS') && row.hasOwnProperty('Communes') && row.hasOwnProperty('Population_touch_e') && row.hasOwnProperty('Nbre_d_emploi_cr_e') && row.hasOwnProperty('Localite_debut') && row.hasOwnProperty('Localite_fin') && row.hasOwnProperty('Trafic')) 
  {
     // Exemple de requête SQL pour insérer des données dans la table1
     const sql1 = `INSERT INTO localisation (AXE,Geo_r_f_rencement_D_but,Geo_r_f_rencement_Fin,PK_DEBUT,PK_FIN,REGIONS_CONCERNEES,DISTRICTS,Communes,Population_touch_e,Nbre_d_emploi_cr_e,Localite_debut,Localite_fin,Trafic) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
 
     db.query(sql1, [row.AXE, row.Geo_r_f_rencement_D_but, row.Geo_r_f_rencement_Fin,row.PK_DEBUT,row.PK_FIN,row.REGIONS_CONCERNEES,row.DISTRICTS,row.Communes,row.Population_touch_e,row.Nbre_d_emploi_cr_e,row.Localite_debut,row.Localite_fin,row.Trafic], (err, result) => {
       if (err) throw err;
       const localisationId = result.insertId;
       console.log('Ligne insérée à la table LOCALISATION :', result);
 
       // Vérifier si la ligne a des propriétés pour la table identification
       if (row.hasOwnProperty('N_') && row.hasOwnProperty('Programme_LF_') && row.hasOwnProperty('Convention_LF_') && row.hasOwnProperty('Convention_Libell_e_LF_') && row.hasOwnProperty('Directions') && row.hasOwnProperty('ACTIVITES') && row.hasOwnProperty('Natures') && row.hasOwnProperty('Financement') && row.hasOwnProperty('Bailleurs') && row.hasOwnProperty('Co_t_estimatif_Ar_') && row.hasOwnProperty('Responsable_du_Projet') && row.hasOwnProperty('Valeur_Cible_Unit_s_') && row.hasOwnProperty('Indicateur_PEM_PTA') && row.hasOwnProperty('Indicateur_ODD') && row.hasOwnProperty('Indicateur_de_Performance')) 
       {
         // Exemple de requête SQL pour insérer des données dans la table2
         const sql2 = `INSERT INTO identification (id_localisation, N_, Programme_LF_, Convention_LF_, Convention_Libell_e_LF_, Directions, ACTIVITES, Natures, Financement, Bailleurs, Co_t_estimatif_Ar_, Responsable_du_Projet, Valeur_Cible_Unit_s_, Indicateur_PEM_PTA, Indicateur_ODD, Indicateur_de_Performance) 
         VALUES (? ,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

         db.query(sql2, [localisationId, row.N_, row.Programme_LF_, row.Convention_LF_, row.Convention_Libell_e_LF_, row.Directions, row.ACTIVITES, row.Natures, row.Financement, row.Bailleurs, row.Co_t_estimatif_Ar_, row.Responsable_du_Projet, row.Valeur_Cible_Unit_s_, row.Indicateur_PEM_PTA, row.Indicateur_ODD, row.Indicateur_de_Performance], (err, result) => {
           if (err) throw err;
           const identificationId = result.insertId;
           console.log('Ligne insérée à la table IDENTIFICATION :', result);
           
           // Vérifier si la ligne a des propriétés pour la table caracteristique
           if (row.hasOwnProperty('R_f_March_Conv_') && row.hasOwnProperty('D_signations') && row.hasOwnProperty('Co_t_Ar_') && row.hasOwnProperty('Date_PPM') && row.hasOwnProperty('Date_TEF') && row.hasOwnProperty('Montant_engag_') && row.hasOwnProperty('Date_OS') && row.hasOwnProperty('D_lai_d_ex_cution_jours_') && row.hasOwnProperty('Titulaire') && row.hasOwnProperty('Temporel') && row.hasOwnProperty('Financi_re') && row.hasOwnProperty('Date_lancement_AO') && row.hasOwnProperty('Date_Remise_AO') && row.hasOwnProperty('Unit_s')) 
           {
             // Exemple de requête SQL pour insérer des données dans la table2
             const sql3 = `INSERT INTO caracteristique (id_localisation,id_identification, R_f_March_Conv_, D_signations, Co_t_Ar_, Date_PPM, Date_TEF, Montant_engag_, Date_OS, D_lai_d_ex_cution_jours_, Titulaire, Temporel, Financi_re, Date_lancement_AO, Date_Remise_AO, Unit_s) 
             VALUES (? , ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
             db.query(sql3, [localisationId, identificationId , row.R_f_March_Conv_, row.D_signations, row.Co_t_Ar_, row.Date_PPM, row.Date_TEF, row.Montant_engag_, row.Date_OS, row.D_lai_d_ex_cution_jours_, row.Titulaire, row.Temporel, row.Financi_re, row.Date_lancement_AO, row.Date_Remise_AO, row.Unit_s], (err, result) => {
               if (err) throw err;
               console.log('Ligne insérée à la table CARACTERISTIQUE :', result);
    
             });
           }
           // Vérifier si la ligne a des propriétés pour la table avancement
           if (row.hasOwnProperty('Physique') && row.hasOwnProperty('SITUATION') && row.hasOwnProperty('ETAT_D_AVANCEMENT') && row.hasOwnProperty('Observations')) 
           {
             // Exemple de requête SQL pour insérer des données dans la table2
             const sql4 = `INSERT INTO avancement (id_identification, Physique, SITUATION, ETAT_D_AVANCEMENT, Observations) 
             VALUES (?, ?, ?, ?, ?)`;
    
             db.query(sql4, [identificationId , row.Physique, row.SITUATION, row.ETAT_D_AVANCEMENT, row.Observations], (err, result) => {
               if (err) throw err;
               console.log('Ligne insérée à la table AVANCEMENT :', result);
    
             });
           }
                    // Vérifier si la ligne a des propriétés pour la table SUIVIDAE
           if (row.hasOwnProperty('Date_envoi_Primature') && row.hasOwnProperty('Date_retour_Primature') && row.hasOwnProperty('Date_envoi_PRM') && row.hasOwnProperty('Date_Retour_PRM')) 
           {
             // Exemple de requête SQL pour insérer des données dans la table2
             const sql4 = `INSERT INTO suividae (id_identification, Date_envoi_Primature, Date_retour_Primature, Date_envoi_PRM, Date_Retour_PRM) 
             VALUES (?, ?, ?, ?, ?)`;
    
             db.query(sql4, [identificationId , row.Date_envoi_Primature, row.Date_retour_Primature, row.Date_envoi_PRM, row.Date_Retour_PRM], (err, result) => {
               if (err) throw err;
               console.log('Ligne insérée à la table SUIVIDAE :', result);
             });
           }
         });
       }
     });
  }

 });
 
 // Envoyer une réponse à l'utilisateur
 res.send('Fichier importé et données insérées dans la base de données !');
 
});



// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(Server running on port ${PORT}));

// REQUETE LOCALITE

// app.get('/localite_RN', (req, res) => {
//     // Extraction des paramètres de requête
    // const faritany = req.query.faritany;
    // const regions = req.query.region ? req.query.region.split(',') : [];
    // const axes = req.query.axe ? req.query.axe.split(',') : [];
    // const pkDebut = req.query.pkDebut;
    // const pkFin = req.query.pkFin;

//     // console.log('Faritany:', faritany);
   
    // let sql = 'SELECT * FROM localite WHERE 1=1';

    // if(faritany){
    // sql += ` AND FARITANY = '${faritany}'`;
    // }

    // if (regions.length > 0) {
    //    sql += ` AND REGION IN (${regions.map(region => `'${region}'`).join(',')})`;
    // }
    // if (axes.length > 0) {
    //    sql += ` AND AXES IN (${axes.map(axe => `'${axe}'`).join(',')})`;
    // }
    // if (pkDebut) {
    //    sql += ` AND PK_DEBUT >= ${pkDebut}`;
    // }
    // if (pkFin) {
    //    sql += ` AND PK_FIN <= ${pkFin}`;
    // }

    //  db.query(sql, (err, results) => {
    //     if (err) {
    //         res.status(500).send(err);
    //     } else {
    //         res.json(results);
    //     }
//     });
// });

// //REQUETE PROJET
// app.get('/projet',(req,res)=>{

    // const idRef = req.query.idRef;
    // const date = req.query.date;
    // const regions = req.query.region;
    // const axes = req.query.axe;
    // const pkDebut = req.query.pkDebut;
    // const pkFin = req.query.pkFin;

    // console.log('id',idRef)
   
    // let sql = 'SELECT * FROM projet WHERE 1=1';

    // if(idRef){
    //     sql+= ` AND idProjet = '${idRef}'`;
    // }

    // if(date){
    //     sql+= ` AND _date = '${date}'`;
    // }
//     if (regions) {
//        sql += ` AND REGIONS_CONCERNEES = '${regions}'`;
//     }
//     if (axes) {
//        sql += ` AND AXE = '${axes}'`;
//     }
//     if (pkDebut) {
//        sql += ` AND PK_DEBUT >= ${pkDebut}`;
//     }
//     if (pkFin) {
//        sql += ` AND PK_FIN <= ${pkFin}`;
//     }

//      db.query(sql, (err, results) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.json(results);
//         }
//     });
// });


// app.get('/liste_RN/:axe/:region/:pk_debut/:pk_fin',(req,res) => {
//     let sql = "SELECT * FROM localite WHERE region = ?";
//     let params = [req.params.region];

//     if (req.params.axe) {
//         sql += " AND AXES = ?";
//         params.push(req.params.searchAxe);
//     }
//     if (req.params.pk_debut) {
//         sql += " AND PK_DEBUT = ?";
//         params.push(req.params.pk_debut);
//     }
//     if (req.params.pk_fin) {
//         sql += " AND PK_FIN = ?";
//         params.push(req.params.pk_fin);
//     }
//     if (req.params.region) {
//         sql += " AND REGION = ?";
//         params.push(req.params.region);
//     }

//     db.query(sql, params, (err, result) => {
//         if (err) return res.json({ Message: err });
//         return res.json(result);
//     })

// // })

// app.get('/localite_RN', (req, res) =>{
//     let params = []
//     let sql = "SELECT * from localite"

//     if (req.query.axe) {
//         sql += " AND AXES = ?";
//         params.push(req.query.axe);
//     }

//     if (req.query.pkFin) {
//         sql += " AND PK_FIN = ?";
//         params.push(req.query.pkFin);
//     }

//     if (req.query.pkDebut) {
//         sql += " AND PK_DEBUT = ?";
//         params.push(req.query.pkDebut);
//     }
//     db.query(sql, (err,result)=>{
//         if(err) return res.json({Message:err})
//         return res.json(result);
//     })

// })
// app.get('/localiteAntsiranana', (req, res) =>{
//     const sql = "SELECT * FROM antsiranana"
//     db.query(sql, (err,result)=>{
//         if(err) return res.json({Message:"Erreur de serveur"})
//         return res.json(result);
//     })

// })
// app.get('/localiteFianarantsoa', (req, res) =>{
//     const sql = "SELECT * FROM fianarantsoa"
//     db.query(sql, (err,result)=>{
//         if(err) return res.json({Message:"Erreur de serveur"})
//         return res.json(result);
//     })

// })
// app.get('/localiteMahajanga', (req, res) =>{
//     const sql = "SELECT * FROM mahajanga"
//     db.query(sql, (err,result)=>{
//         if(err) return res.json({Message:"Erreur de serveur"})
//         return res.json(result);
//     })

// })
// app.get('/localiteToamasina', (req, res) =>{
//     const sql = "SELECT * FROM toamasina"
//     db.query(sql, (err,result)=>{
//         if(err) return res.json({Message:"Erreur de serveur"})
//         return res.json(result);
//     })

// })
// app.get('/localiteToliara', (req, res) =>{
//     const sql = "SELECT * FROM toliara"
//     db.query(sql, (err,result)=>{
//         if(err) return res.json({Message:"Erreur de serveur"})
//         return res.json(result);
//     })

// })

// REQUETE PROJET

//    if(req.params.searchAxe != "null" && req.params.pkDebut != "null" && req.params.pkFin != "null"){
//     sql =  "SELECT * FROM localite WHERE _date= '"+req.params.annee+"' AXE= '"+req.params.searchAxe+"' PK_DEBUT ='"+req.params.pkDebut+"' PK_FIN ='"+req.params.pkFin+"'"
//    }else if(req.params.searchAxe != "null" && req.params.pkDebut != "null"){
//     sql =  "SELECT * FROM localite WHERE _date= "+req.params.annee+"' AXE= '"+req.params.searchAxe+"' PK_DEBUT ='"+req.params.pkDebut+"'"
//    }else if(req.params.searchAxe != "null"){
//     sql =  "SELECT * FROM localite WHERE _date= '"+req.params.annee+" AXE= '"+req.params.searchAxe+"'"
//    }else if(req.params.searchAxe != "null" && req.params.pkFin != "null"){
//     sql =  "SELECT * FROM localite WHERE _date= '"+req.params.annee+"' AXE= '"+req.params.searchAxe+"' PK_FIN ='"+req.params.pkFin+"'"
//    }else if(req.params.pkDebut != "null"){
//     sql =  "SELECT * FROM localite WHERE _date= '"+req.params.annee+"' PK_DEBUT ='"+req.params.pkDebut+"'"
//    } else if(req.params.pkFin != "null"){
//     sql =  "SELECT * FROM localite WHERE _date= '"+req.params.annee+"' PK_FIN ='"+req.params.pkFin+"'"
//    }else if (req.params.pkDebut != "null" && req.params.pkFin != "null"){
//     sql =  "SELECT * FROM localite WHERE _date= '"+req.params.annee+"' PK_DEBUT ='"+req.params.pkDebut+"' PK_FIN ='"+req.params.pkFin+"'"
//    }else if(req.params.searchAxe != "null" && req.params.pkFin != "null"){
//     sql =  "SELECT * FROM localite WHERE _date= '"+req.params.annee+"' AXE= '"+req.params.searchAxe+"' PK_FIN ='"+req.params.pkFin+"'"
//    }

// (sql, (err,result)=>{
//     if(err) return res.json({Message:err})
//     return res.json(result);
// })

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

//INSERET PROJET
app.post('/projet2024', (req, res) => {
    let { faritany, region, commune, axe, section, titre, programmelf, conventionlf, conventionliblf, activite, cout, naturesurface, longueur, pk_debut, pk_fin, loc_debut, loc_Fin, annee, avancement, observation } = req.body;

    db.query(
        "INSERT INTO projet2024 (faritany, region, commune, axe, section, titre, programmelf, conventionlf, conventionliblf, activite, cout, naturesurface, longueur, pk_debut, pk_fin, loc_debut, loc_fin, annee, avancement, observation) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [faritany, region, commune, axe, section, titre, programmelf, conventionlf, conventionliblf, activite, cout, naturesurface, longueur, pk_debut, pk_fin, loc_debut, loc_Fin, annee, avancement, observation],
        (err, resultat) => {
            if (err) {
                console.error("Erreur lors de l'insertion :", err);
                return res.status(500).json({ Message: "Erreur de serveur" });
            }
            console.log("Élément inséré avec succès !");
            return res.status(200).json({ Message: "Élément inséré avec succès" });
        }
    );
});