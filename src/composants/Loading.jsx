import * as React from 'react';
import Box from '@mui/material/Box';
import { CircularProgress } from '@mui/material';

export default function LinearIndeterminate() {
  return (
    <Box sx={{display:'flex', justifyContent:'center',margin:'auto'}}>
      <CircularProgress disableShrink/>
    </Box>
  );
}


// const defaultOptions = {
//  loop: true,
//  autoplay: true, 
//  animationData: RoadConstruction,
//  rendererSettings: {
//     preserveAspectRatio: 'xMidYMid slice'
//  }
// };

// const Loading = () => {
//  return (<><div className="container">
//              <Lottie options={defaultOptions} height={400} width={400} />
//         </div>
//     </>
//  )
// };
// const Loading = () => {
//    return (<div style={{margin:'auto',display:'flex',width:'60%'}}>
//       <Lottie loop={true} autoPlay={true} animationData={RoadConstruction}/>
//    </div>)
// }