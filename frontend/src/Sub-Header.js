import {React, Component} from 'react';
import uwindsor_logo from './images/uwindsor_logo.jpg';
import './Sub-Header.css';

function scrollToElement(element_id){
  var element = document.getElementById(element_id);
  element.scrollIntoView({behavior: 'smooth'});
}

function NavigationBar(){
  return(
    <nav class="navbar navbar-dark bg-dark" id="navigation">
        <a class="navbar-brand links" id="news" href="#News" onClick={scrollToElement('News')}>News</a>
        <a class="navbar-brand links" id="events" href="#Events" onClick={scrollToElement('Events')}>Events</a>
        <a class="navbar-brand links" id="projects" href="#Projects" onClick={scrollToElement('Projects')}>Projects</a>
        <a class="navbar-brand links" id="members" href="#Members" onClick={scrollToElement('Members')}>Members</a>
        <a class="navbar-brand links" id="join" href="#Join" onClick={scrollToElement('Join')}>Join The AI Club</a>
    </nav>
  )

}

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
                <NavigationBar/>
                <AIClubHeader/>
                <UWindsorLogo/>
            </div>
        
        )
    }
}

export default SubHeader;