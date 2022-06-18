import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
import "babel-polyfill";
import { Scene } from "aframe-react";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <Scene>
          <a-sky src="./assets/pano3.jpg" alt='pano3' rotation="0 0 0"></a-sky>
          <a-camera rotation="10 -155 0"></a-camera>
     
           <a-text value="Home"
            width="6"
            position="-5 4.5 0"
            rotation="30 90 0">
            </a-text>

  
  
   
        </Scene>
      </div>
    );
  }
}


export default App