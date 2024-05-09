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
    const date = req.query.date;
    const regions = req.query.region ? req.query.region.split(',') : [];
    const axes = req.query.axe ? req.query.axe.split(',') : [];
    const pkDebut = req.query.pkDebut;
    const pkFin = req.query.pkFin;

    console.log(pkFin)
  
    let sql = `
    SELECT *
    FROM avancement a
    LEFT JOIN caracteristique c ON a.id_identification = c.id_identification
    LEFT JOIN identification i ON a.id_identification = i.id_identification
    LEFT JOIN localisation l ON i.id_localisation = l.id_localisation
    LEFT JOIN suividae s ON i.id_identification = s.id_identification
    WHERE 1=1    
    `;

    if(idRef){
      sql+= ` AND id_avancement = '${idRef}'`;
    }
    if(date){
      sql+= ` AND Annee = '${date}'`;
    }
    if (regions.length > 0) {
      sql += ` AND REGIONS_CONCERNEES IN (${regions.map(region => `'${region}'`).join(',')})`;
    }
    if (axes.length > 0) {
      sql += ` AND AXE IN (${axes.map(axe => `'${axe}'`).join(',')})`;
    }
    if (pkDebut) {
      sql += ` AND PK_DEBUT = ${pkDebut}`;
    }
    if (pkFin) {
      sql += ` AND PK_FIN = ${pkFin}`;
    }

    if (date && regions.length === 0 && !axes.length && !pkDebut && !pkFin) {
        sql += ` LIMIT 25`;
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

  app.get('/localisation',(req,res)=>{

    const faritany = req.query.faritany;
    const idRef = req.query.idRef;
    const regions = req.query.region ? req.query.region.split(',') : [];
    const axes = req.query.axe ? req.query.axe.split(',') : [];
    const pkDebut = req.query.pkDebut;
    const pkFin = req.query.pkFin;

    console.log(faritany)

    let sql = `SELECT * FROM localisation WHERE 1=1`;

    if(idRef){
      sql+= ` AND id_localisation = '${idRef}'`;
    }
    if (regions.length > 0) {
      sql += ` AND REGIONS_CONCERNEES IN (${regions.map(region => `'${region}'`).join(',')})`;
    }
    if (axes.length > 0) {
      sql += ` AND AXE IN (${axes.map(axe => `'${axe}'`).join(',')})`;
    }
    if (pkDebut) {
      sql += ` AND PK_DEBUT = ${pkDebut}`;
    }
    if (pkFin) {
      sql += ` AND PK_FIN = ${pkFin}`;
    }

    // if (date && regions.length === 0 && !axes.length && !pkDebut && !pkFin) {
    //   sql += ` LIMIT 25`;
    // } 

    db.query(sql, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        // console.log(results)
        res.json(results);
      }
    });

  })

  app.get('/nbTravauxTermine',(req,res)=> {
    // let sql = `SELECT COUNT(*) as nbTermine
    // FROM avancement
    // WHERE SITUATION = 'TERMINE'`;

    let sql = `
    SELECT 
      l.Annee,
      COUNT(CASE WHEN a.SITUATION = 'TERMINE' THEN 1 END) as nbTravauxTermine,
      COUNT(*) as nbTotalTravaux
    FROM 
      localisation l
    JOIN 
      identification i ON l.id_localisation = i.id_localisation
    JOIN 
      avancement a ON i.id_identification = a.id_identification
    WHERE 
      l.Annee IS NOT NULL
    GROUP BY 
      l.Annee`;
      
    db.query(sql, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log(results)
        res.json(results);
      }
    });
  })

  app.get('/travauxTermine',(req,res)=>{
    let sql = `
    SELECT l.REGIONS_CONCERNEES, l.Annee,
    COUNT(CASE WHEN a.SITUATION = 'EN COURS' THEN 1 END) as nbTravauxEnCours,
    COUNT(CASE WHEN a.SITUATION = 'A DEMARRER' THEN 1 END) as nbTravauxADemarrer,
    COUNT(CASE WHEN a.SITUATION = 'Phase PPM' THEN 1 END) as nbTravauxPhasePPM,
    COUNT(CASE WHEN a.SITUATION = 'RESILIE' THEN 1 END) as nbTravauxResilie,
    COUNT(*) as nbTravauxTermine
    FROM localisation l
    JOIN identification i ON l.id_localisation = i.id_localisation
    JOIN avancement a ON i.id_identification = a.id_identification
    WHERE 1=1
    GROUP BY l.REGIONS_CONCERNEES
  `;

    db.query(sql, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        // console.log(results)
        res.json(results);
      }
    });
  })

  app.get('/situation', (req,res)=>{

    const date = req.query.date;
    const regions = req.query.region ? req.query.region.split(',') : [];
    const axes = req.query.axe ? req.query.axe.split(',') : [];
    const pkDebut = req.query.pkDebut;
    const pkFin = req.query.pkFin;

    let sql=`    SELECT l.REGIONS_CONCERNEES,
    COUNT(CASE WHEN a.SITUATION = 'EN COURS' THEN 1 END) as nbTravauxEnCours,
    COUNT(CASE WHEN a.SITUATION = 'A DEMARRER' THEN 1 END) as nbTravauxADemarrer,
    COUNT(CASE WHEN a.SITUATION = 'Phase PPM' THEN 1 END) as nbTravauxPhasePPM,
    COUNT(CASE WHEN a.SITUATION = 'RESILIE' THEN 1 END) as nbTravauxResilie
    FROM avancement a
    LEFT JOIN caracteristique c ON a.id_identification = c.id_identification
    LEFT JOIN identification i ON a.id_identification = i.id_identification
    LEFT JOIN localisation l ON i.id_localisation = l.id_localisation
    LEFT JOIN suividae s ON i.id_identification = s.id_identification
    WHERE 1=1  
    GROUP BY l.REGIONS_CONCERNEES `;

    if(date){
      sql+= ` AND Annee = '${date}'`;
    }
    if (regions.length > 0) {
      sql += ` AND REGIONS_CONCERNEES IN (${regions.map(region => `'${region}'`).join(',')})`;
    }

    db.query(sql, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        // console.log(results)
        res.json(results);
      }
    });
  })

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
  if (row.hasOwnProperty('Annee') && row.hasOwnProperty('AXE') && row.hasOwnProperty('Geo_r_f_rencement_D_but') && row.hasOwnProperty('Geo_r_f_rencement_Fin') && row.hasOwnProperty('PK_DEBUT') && row.hasOwnProperty('PK_FIN') && row.hasOwnProperty('REGIONS_CONCERNEES') && row.hasOwnProperty('DISTRICTS') && row.hasOwnProperty('Communes') && row.hasOwnProperty('Population_touch_e') && row.hasOwnProperty('Nbre_d_emploi_cr_e') && row.hasOwnProperty('Localite_debut') && row.hasOwnProperty('Localite_fin') && row.hasOwnProperty('Trafic')) 
  {
     const sql1 = `INSERT INTO localisation (Annee,AXE,Geo_r_f_rencement_D_but,Geo_r_f_rencement_Fin,PK_DEBUT,PK_FIN,REGIONS_CONCERNEES,DISTRICTS,Communes,Population_touch_e,Nbre_d_emploi_cr_e,Localite_debut,Localite_fin,Trafic) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
 
     db.query(sql1, [row.Annee,row.AXE, row.Geo_r_f_rencement_D_but, row.Geo_r_f_rencement_Fin,row.PK_DEBUT,row.PK_FIN,row.REGIONS_CONCERNEES,row.DISTRICTS,row.Communes,row.Population_touch_e,row.Nbre_d_emploi_cr_e,row.Localite_debut,row.Localite_fin,row.Trafic], (err, result) => {
       if (err) throw err;
       const localisationId = result.insertId;
       console.log('Ligne insérée à la table LOCALISATION :', result);
 
       if (row.hasOwnProperty('N_') && row.hasOwnProperty('Programme_LF_') && row.hasOwnProperty('Convention_LF_') && row.hasOwnProperty('Convention_Libell_e_LF_') && row.hasOwnProperty('Directions') && row.hasOwnProperty('ACTIVITES') && row.hasOwnProperty('Natures') && row.hasOwnProperty('Financement') && row.hasOwnProperty('Bailleurs') && row.hasOwnProperty('Co_t_estimatif_Ar_') && row.hasOwnProperty('Responsable_du_Projet') && row.hasOwnProperty('Valeur_Cible_Unit_s_') && row.hasOwnProperty('Indicateur_PEM_PTA') && row.hasOwnProperty('Indicateur_ODD') && row.hasOwnProperty('Indicateur_de_Performance')) 
       {
         const sql2 = `INSERT INTO identification (id_localisation, N_, Programme_LF_, Convention_LF_, Convention_Libell_e_LF_, Directions, ACTIVITES, Natures, Financement, Bailleurs, Co_t_estimatif_Ar_, Responsable_du_Projet, Valeur_Cible_Unit_s_, Indicateur_PEM_PTA, Indicateur_ODD, Indicateur_de_Performance) 
         VALUES (? ,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

         db.query(sql2, [localisationId, row.N_, row.Programme_LF_, row.Convention_LF_, row.Convention_Libell_e_LF_, row.Directions, row.ACTIVITES, row.Natures, row.Financement, row.Bailleurs, row.Co_t_estimatif_Ar_, row.Responsable_du_Projet, row.Valeur_Cible_Unit_s_, row.Indicateur_PEM_PTA, row.Indicateur_ODD, row.Indicateur_de_Performance], (err, result) => {
           if (err) throw err;
           const identificationId = result.insertId;
           console.log('Ligne insérée à la table IDENTIFICATION :', result);
           
           if (row.hasOwnProperty('R_f_March_Conv_') && row.hasOwnProperty('D_signations') && row.hasOwnProperty('Co_t_Ar_') && row.hasOwnProperty('Date_PPM') && row.hasOwnProperty('Date_TEF') && row.hasOwnProperty('Montant_engag_') && row.hasOwnProperty('Date_OS') && row.hasOwnProperty('D_lai_d_ex_cution_jours_') && row.hasOwnProperty('Titulaire') && row.hasOwnProperty('Temporel') && row.hasOwnProperty('Financi_re') && row.hasOwnProperty('Date_lancement_AO') && row.hasOwnProperty('Date_Remise_AO') && row.hasOwnProperty('Unit_s')) 
           {
             const sql3 = `INSERT INTO caracteristique (id_localisation,id_identification, R_f_March_Conv_, D_signations, Co_t_Ar_, Date_PPM, Date_TEF, Montant_engag_, Date_OS, D_lai_d_ex_cution_jours_, Titulaire, Temporel, Financi_re, Date_lancement_AO, Date_Remise_AO, Unit_s) 
             VALUES (? , ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
             db.query(sql3, [localisationId, identificationId , row.R_f_March_Conv_, row.D_signations, row.Co_t_Ar_, row.Date_PPM, row.Date_TEF, row.Montant_engag_, row.Date_OS, row.D_lai_d_ex_cution_jours_, row.Titulaire, row.Temporel, row.Financi_re, row.Date_lancement_AO, row.Date_Remise_AO, row.Unit_s], (err, result) => {
               if (err) throw err;
               console.log('Ligne insérée à la table CARACTERISTIQUE :', result);
    
             });
           }
  
           if (row.hasOwnProperty('Physique') && row.hasOwnProperty('SITUATION') && row.hasOwnProperty('ETAT_D_AVANCEMENT') && row.hasOwnProperty('Observations')) 
           {
             const sql4 = `INSERT INTO avancement (id_identification, Physique, SITUATION, ETAT_D_AVANCEMENT, Observations) 
             VALUES (?, ?, ?, ?, ?)`;
    
             db.query(sql4, [identificationId , row.Physique, row.SITUATION, row.ETAT_D_AVANCEMENT, row.Observations], (err, result) => {
               if (err) throw err;
               console.log('Ligne insérée à la table AVANCEMENT :', result);
    
             });
           }
           if (row.hasOwnProperty('Date_envoi_Primature') && row.hasOwnProperty('Date_retour_Primature') && row.hasOwnProperty('Date_envoi_PRM') && row.hasOwnProperty('Date_Retour_PRM')) 
           {
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
 res.send('Fichier importé et données insérées dans la base de données !');
 
});



app.get('/travauxRecents',(req,res) => {
  const sql = `
  SELECT l.REGIONS_CONCERNEES,l.PK_DEBUT,l.PK_FIN,i.ACTIVITES,i.Financement,a.SITUATION, c.Co_t_Ar_
    FROM localisation l
    JOIN identification i ON l.id_localisation = i.id_localisation
    JOIN caracteristique c ON i.id_localisation = c.id_localisation
    JOIN avancement a ON c.id_identification = a.id_identification
    ORDER BY l.id_localisation DESC
    LIMIT 7
    `;
 
      db.query(sql, (err, results) => {
        if (err) {
          res.status(500).send(err);
        } else {
          // console.log(results)
          res.json(results);
        }
      });
})


app.listen(8081, ()=>{
    console.log('Serveur démarrer avec succès...')
})