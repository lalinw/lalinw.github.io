import React, { Component } from "react";
import './App.css';
import placeholderImage from './catlogo.PNG'

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';


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
          {proj.github !== null && <a href={proj.github} className="icon"><GitHubIcon/></a>}
          {proj.website !== null && <a href={proj.website} className="icon"><WebIcon/></a>}
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
