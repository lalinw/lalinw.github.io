import React, { Component } from "react";
import './App.css';
import placeholderImage from './catlogo.PNG'

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/OpenInBrowser';
import DescriptionIcon from '@mui/icons-material/Description';
import YouTubeIcon from '@mui/icons-material/YouTube';


class App extends Component {
  constructor() {
    super(); 
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const jsonData = require('./projects.json');
    this.setState({ data: jsonData.Projects });
  }

  formatter = (proj) => {
    return (
      <div className="project-item" key={proj.id}>
        {proj.img === null 
          ? <img className="project-img" src={placeholderImage} alt=""/> 
          : <img className="project-img" src={proj.img} alt=""/>}
        
        <h4 className="project-name">
          {proj.title} 
        </h4>
        <div className="links">
          {proj.hasOwnProperty('github') && <a href={proj.github} className="icon"><GitHubIcon fontSize="large"/></a>}
          {proj.hasOwnProperty('website') && <a href={proj.website} className="icon"><WebIcon fontSize="large"/></a>}
          {proj.hasOwnProperty('document') && <a href={proj.document} className="icon"><DescriptionIcon fontSize="large"/></a>}
          {proj.hasOwnProperty('youtube') && <a href={proj.youtube} className="icon"><YouTubeIcon fontSize="large"/></a>}
        </div>
        <div className="lang-intgr">
          <p>
            {proj.lang.join(", ")}
            <br/>
            {proj.integr !== null && "Integration(s): " + proj.integr.join(", ")}
          </p>
        </div>
        <p>&emsp;{proj.descr}</p>
        
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "left" }}>Projects</h1> 
        {
          this.state.data.map((eachProject) => {
            return this.formatter(eachProject);
          })
        }
      </React.Fragment>
    );
  }
}


export default App;
