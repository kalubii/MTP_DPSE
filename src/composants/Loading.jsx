import React from 'react'
import Lottie from "lottie-react";
import RoadConstruction from "../assets/animation/RoadConstruction.json"
import 'bootstrap/dist/css/bootstrap.min.css';

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
const Loading = () => {
   return (<div style={{margin:'auto',display:'flex',width:'60%'}}>
      <Lottie loop={true} autoPlay={true} animationData={RoadConstruction}/>
   </div>)
}

export default Loading