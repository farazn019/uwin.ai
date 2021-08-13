import {React, Component} from 'react';
import uwindsor_logo from './images/uwindsor_logo.jpg';
import './Sub-Header.css';

function AIClubHeader(){
    return(
      <h2 id="main-header">Welcome To The UWindsor AI Club!</h2>
    )
}
  
  
  function UWindsorLogo(){
    return(
      <img id="uwindsor_logo" src={uwindsor_logo} alt="UWindsor Logo"></img>
    );
}


class SubHeader extends Component{
    render(){
        return(
            <div id="sub_header">
                <AIClubHeader/>
                <UWindsorLogo/>
            </div>
        
        )
    }
}

export default SubHeader;