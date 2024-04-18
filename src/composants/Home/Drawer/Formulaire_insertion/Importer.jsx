import React, { useState } from 'react';
import axios from 'axios';
import BackupIcon from '@mui/icons-material/Backup';
import { Button } from '@mui/material';

function Importer() {
  const [file, setFile] = useState();

  const upload = () => {
    const formData = new FormData()
    formData.append('file',file)
    axios.post('http://localhost:8081/upload',formData)
    .then(res => {})
    .catch(err => console.log(err))
  }

  return (
    <div  style={{display:'flex', justifyContent:'flex-end', margin:'auto'}}>
      <input type="file" onChange={(e)=> setFile(e.target.files[0])}/>
      {/* <button className='btn btn-outline-success' type='button' onClick={upload}><BackupIcon/>Importer</button> */}
      <Button variant="contained" color="success" startIcon={<BackupIcon/>} onClick={upload}>
        Importer
      </Button>
    </div>
  );
}

export default Importer;