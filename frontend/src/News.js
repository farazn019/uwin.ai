import './News.css';

import uwindsor_logo from './images/uwindsor_logo.jpg';
import Headers from './Headers';

import {React, Component} from 'react';

import {NewsContentSubHeading, NewsContent} from './newsContent';


class News extends Component{
  render(){
    return(
      <div className="news">
        <Headers name="News"></Headers>
        <NewsContentSubHeading></NewsContentSubHeading>
        <NewsContent news="None"></NewsContent>
      </div>
    )
  }

}

export default News;
