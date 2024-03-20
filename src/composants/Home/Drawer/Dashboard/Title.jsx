import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

function Title(props) {
    const theme = useTheme()
 return (
    <Typography variant="h4" color="GrayText" gutterBottom sx={{display:'flex',margin:'auto', justifyContent:'center', 
    [theme.breakpoints.down('md')]:{fontSize:"1.5rem"}}}
    >
      {props.children}
    </Typography>
 );
}

Title.propTypes = {
 children: PropTypes.node,
};

export default Title;
