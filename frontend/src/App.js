import logo from './logo.svg';
import './App.css';

import {React, Component} from 'react';

import {NewsContentSubHeading, NewsContent} from './newsContent';


function AIClubHeader(){
  return(
    <h2 id="main-header">Welcome To The UWindsor AI Club!</h2>
  )
}


//TODO: Implement components in another react file, to write some stuff below each header.
function Headers(props){
  return(
    <h2 class="subheading">{props.name}</h2>
  );
} 


class App extends Component{
  render(){
    return(
    
      <div className="App">
        
        <AIClubHeader/>

        <Headers name="News"></Headers>
        <NewsContentSubHeading></NewsContentSubHeading>
        <NewsContent news="None"></NewsContent>

        <Headers name="Events"></Headers>

        <Headers name="Projects"></Headers>
        <Headers name="Members"></Headers>
        <Headers name="Join"></Headers>
      </div>
    )
  }

}

export default App;
