import React, { useState } from 'react';
import axios from 'axios';
import BackupIcon from '@mui/icons-material/Backup';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function Importer() {
  const [file, setFile] = useState();
  const [alert, setAlert] = useState({ open: false, type: 'success', message: '' });

  const upload = () => {
    const formData = new FormData()
    formData.append('file',file)
    axios.post('http://localhost:8081/upload',formData)
    .then(res => {
      setAlert({open: true, type:'success',message: 'Importation Réussit!'});
      setFile(null);
    })
    .catch(err =>{
      setAlert({open:true, type:'error',message:"Echec l\'importation!" })
    })
  }

  const handleCloseAlert = () => {
    setAlert({...alert, open:false})
  }

  return ( <>
      <div>
        {alert.open &&
          <Alert severity={alert.type} onClose={handleCloseAlert} sx={{width:'fit-content'}}>
            <AlertTitle>{alert.type === 'success' ? 'Succès' : 'Erreur'}</AlertTitle>
            {alert.message}
          </Alert>
        }
      </div>
      
    <div  style={{display:'flex', justifyContent:'flex-end', margin:'auto'}}>
      <input type="file" onChange={(e)=> setFile(e.target.files[0])}/>
      <Button variant="contained" color="success" startIcon={<BackupIcon/>} onClick={upload}>
        Importer
      </Button>
    </div>

    </>);
}

export default Importer;