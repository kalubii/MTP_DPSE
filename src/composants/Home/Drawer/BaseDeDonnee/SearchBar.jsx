import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await axios.get('/search', {
      params: {
        searchTerm,
      },
    });
    setResults(response.data);
  };

  return (<>
       <Box sx={{display:'flex'}}>   
        <TextField id="standard-search" sx={{marginX:4}} label="Region" type="search" variant="standard"/>    
        <TextField id="standard-search" label="Axes" type="search" variant="standard"/>
        <TextField id="standard-search" sx={{marginX:4}} label="PK Début" type="search" variant="standard"/>
        <TextField id="standard-search" label="PK Fin" type="search" variant="standard"/>
    </Box>

    
</>
  )
}

export default SearchBar